import { db } from "./db";
import { services, reviews, type Service, type InsertService, type Review, type InsertReview } from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getReviews(): Promise<Review[]>;
  createService(service: InsertService): Promise<Service>;
  createReview(review: InsertReview): Promise<Review>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(insertService).returning();
    return service;
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db.insert(reviews).values(insertReview).returning();
    return review;
  }
}

export const storage = new DatabaseStorage();
