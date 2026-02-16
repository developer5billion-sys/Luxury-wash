import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";

// Серверные зависимости, которые должны остаться в bundle
const allowlist = [
  "express",
  "pg",
  "drizzle-orm",
  "drizzle-zod",
  "connect-pg-simple",
  "express-session",
  "memorystore",
  "passport",
  "passport-local",
  "zod",
  "zod-validation-error",
  "ws",
  "uuid",
  "axios",
  "date-fns",
  "jsonwebtoken",
];

async function buildAll() {
  // Удаляем старую сборку
  await rm("dist", { recursive: true, force: true });

  console.log("Building client...");
  await viteBuild();

  console.log("Building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  console.log("Build complete!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});