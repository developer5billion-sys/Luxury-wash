import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Reviews
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      name: "Express Wash (Ekspress Yuvish)",
      description: "Quick exterior wash and drying (Tezkor tashqi yuvish va quritish)",
      price: 120000,
      category: "exterior",
      duration: "30 min",
    });
    await storage.createService({
      name: "Full Wash (To'liq Yuvish)",
      description: "Complete exterior and interior cleaning (To'liq tashqi va ichki tozalash)",
      price: 180000,
      category: "full",
      duration: "60 min",
    });
    await storage.createService({
      name: "Interior Cleaning (Salon Tozalash)",
      description: "Deep cleaning of seats, carpets, and dashboard (O'rindiqlar, gilamlar va asboblar panelini chuqur tozalash)",
      price: 220000,
      category: "interior",
      duration: "90 min",
    });
    await storage.createService({
      name: "Car Polishing (Polirovka)",
      description: "Professional polishing for a shiny finish (Yaltiroq qoplama uchun professional silliqlash)",
      price: 300000,
      category: "exterior",
      duration: "120 min",
    });
  }

  const existingReviews = await storage.getReviews();
  if (existingReviews.length === 0) {
    await storage.createReview({
      name: "Igor",
      rating: 5,
      comment: "Excellent car wash! Fast and high quality. (Ajoyib avtomoyka! Tez va sifatli.)",
    });
    await storage.createReview({
      name: "Aziz",
      rating: 5,
      comment: "Very professional service. My car looks new! (Juda professional xizmat. Mashinam yangiday bo'lib qoldi!)",
    });
    await storage.createReview({
      name: "Malika",
      rating: 4,
      comment: "Good service, friendly staff. (Yaxshi xizmat, samimiy xodimlar.)",
    });
  }
}
