import { eq } from "drizzle-orm";
import { CreateDBClient } from "@/modules/shared/database/factories/CreateDBClient";
import { vehicles } from "@/modules/shared/database/infrastructure/drizzle/schema";
import type { Vehicle } from "@/types/vehicle";

export class VehicleService {
  private db = CreateDBClient();

  async getAllVehicles(): Promise<Vehicle[]> {
    try {
      const result = await this.db.select().from(vehicles);
      return result;
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      throw new Error("Failed to fetch vehicles");
    }
  }

  async getVehicleById(id: string): Promise<Vehicle | null> {
    try {
      const result = await this.db
        .select()
        .from(vehicles)
        .where(eq(vehicles.id, id))
        .limit(1);

      return result[0] || null;
    } catch (error) {
      console.error("Error fetching vehicle by id:", error);
      throw new Error("Failed to fetch vehicle");
    }
  }

  async createVehicle(
    vehicleData: Omit<Vehicle, "id" | "createdAt">,
  ): Promise<Vehicle> {
    try {
      const newVehicle = {
        id: crypto.randomUUID(),
        ...vehicleData,
        createdAt: new Date(),
      };

      const result = await this.db
        .insert(vehicles)
        .values(newVehicle)
        .returning();

      return result[0];
    } catch (error) {
      console.error("Error creating vehicle:", error);
      throw new Error("Failed to create vehicle");
    }
  }

  async updateVehicle(
    id: string,
    vehicleData: Partial<Omit<Vehicle, "id" | "createdAt">>,
  ): Promise<Vehicle | null> {
    try {
      const result = await this.db
        .update(vehicles)
        .set(vehicleData)
        .where(eq(vehicles.id, id))
        .returning();

      return result[0] || null;
    } catch (error) {
      console.error("Error updating vehicle:", error);
      throw new Error("Failed to update vehicle");
    }
  }

  async deleteVehicle(id: string): Promise<boolean> {
    try {
      const result = await this.db
        .delete(vehicles)
        .where(eq(vehicles.id, id))
        .returning();

      return result.length > 0;
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      throw new Error("Failed to delete vehicle");
    }
  }
}
