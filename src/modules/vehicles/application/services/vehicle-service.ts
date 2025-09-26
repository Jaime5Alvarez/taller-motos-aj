import { eq } from "drizzle-orm";
import { CreateDBClient } from "@/modules/shared/database/factories/CreateDBClient";
import {
  vehicles,
  vehiculeFeatures,
  vehiculeImages,
} from "@/modules/shared/database/infrastructure/drizzle/schema";
import type {
  Vehicle,
  VehicleFeature,
  VehicleImage,
  VehicleWithDetails,
} from "@/types/vehicle";

export class VehicleService {
  private db = CreateDBClient();

  async getAllVehicles(): Promise<Vehicle[]> {
    try {
      const result = await this.db.select().from(vehicles);
      return result as Vehicle[];
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      throw new Error("Failed to fetch vehicles");
    }
  }

  async getAllVehiclesWithDetails(): Promise<VehicleWithDetails[]> {
    try {
      const vehiclesList = await this.db.select().from(vehicles);

      const vehiclesWithDetails = await Promise.all(
        (vehiclesList as Vehicle[]).map(async (vehicle) => {
          const features = await this.getVehicleFeatures(vehicle.id);
          const images = await this.getVehicleImages(vehicle.id);

          return {
            ...vehicle,
            features,
            images,
          };
        }),
      );

      return vehiclesWithDetails;
    } catch (error) {
      console.error("Error fetching vehicles with details:", error);
      throw new Error("Failed to fetch vehicles with details");
    }
  }

  async getVehicleById(id: string): Promise<Vehicle | null> {
    try {
      const result = await this.db
        .select()
        .from(vehicles)
        .where(eq(vehicles.id, id))
        .limit(1);

      return (result[0] as Vehicle) || null;
    } catch (error) {
      console.error("Error fetching vehicle by id:", error);
      throw new Error("Failed to fetch vehicle");
    }
  }

  async getVehicleWithDetailsById(
    id: string,
  ): Promise<VehicleWithDetails | null> {
    try {
      const vehicle = await this.getVehicleById(id);
      if (!vehicle) return null;

      const features = await this.getVehicleFeatures(id);
      const images = await this.getVehicleImages(id);

      return {
        ...vehicle,
        features,
        images,
      };
    } catch (error) {
      console.error("Error fetching vehicle with details by id:", error);
      throw new Error("Failed to fetch vehicle with details");
    }
  }

  async getVehicleFeatures(vehicleId: string): Promise<VehicleFeature[]> {
    try {
      const result = await this.db
        .select()
        .from(vehiculeFeatures)
        .where(eq(vehiculeFeatures.vehiculeId, vehicleId));

      return result;
    } catch (error) {
      console.error("Error fetching vehicle features:", error);
      throw new Error("Failed to fetch vehicle features");
    }
  }

  async getVehicleImages(vehicleId: string): Promise<VehicleImage[]> {
    try {
      const result = await this.db
        .select()
        .from(vehiculeImages)
        .where(eq(vehiculeImages.vehiculeId, vehicleId));

      return result;
    } catch (error) {
      console.error("Error fetching vehicle images:", error);
      throw new Error("Failed to fetch vehicle images");
    }
  }

  async createVehicle(
    vehicleData: Omit<Vehicle, "id" | "createdAt">,
    features?: string[],
    imageUrls?: string[],
  ): Promise<VehicleWithDetails> {
    try {
      const vehicleId = crypto.randomUUID();
      const newVehicle = {
        id: vehicleId,
        ...vehicleData,
        createdAt: new Date(),
      };

      // Crear el vehículo
      const vehicleResult = await this.db
        .insert(vehicles)
        .values(newVehicle)
        .returning();

      const vehicle = vehicleResult[0] as Vehicle;

      // Crear las características si existen
      const vehicleFeaturesList: VehicleFeature[] = [];
      if (features && features.length > 0) {
        const featureValues = features
          .filter((feature) => feature.trim() !== "")
          .map((feature) => ({
            id: crypto.randomUUID(),
            vehiculeId: vehicleId,
            feature: feature.trim(),
            createdAt: new Date(),
          }));

        if (featureValues.length > 0) {
          const featureResults = await this.db
            .insert(vehiculeFeatures)
            .values(featureValues)
            .returning();

          vehicleFeaturesList.push(...featureResults);
        }
      }

      // Crear las imágenes si existen
      const vehicleImagesList: VehicleImage[] = [];
      if (imageUrls && imageUrls.length > 0) {
        const imageValues = imageUrls
          .filter((url) => url.trim() !== "")
          .map((imageUrl) => ({
            id: crypto.randomUUID(),
            vehiculeId: vehicleId,
            imageUrl: imageUrl.trim(),
            createdAt: new Date(),
          }));

        if (imageValues.length > 0) {
          const imageResults = await this.db
            .insert(vehiculeImages)
            .values(imageValues)
            .returning();

          vehicleImagesList.push(...imageResults);
        }
      }

      return {
        ...vehicle,
        features: vehicleFeaturesList,
        images: vehicleImagesList,
      };
    } catch (error) {
      console.error("Error creating vehicle:", error);
      throw new Error("Failed to create vehicle");
    }
  }

  async updateVehicle(
    id: string,
    vehicleData: Partial<Omit<Vehicle, "id" | "createdAt">>,
    features?: string[],
    imageUrls?: string[],
  ): Promise<VehicleWithDetails | null> {
    try {
      // Actualizar el vehículo
      const result = await this.db
        .update(vehicles)
        .set(vehicleData)
        .where(eq(vehicles.id, id))
        .returning();

      if (result.length === 0) return null;

      // Si se proporcionan features, reemplazar todas
      if (features !== undefined) {
        // Eliminar features existentes
        await this.db
          .delete(vehiculeFeatures)
          .where(eq(vehiculeFeatures.vehiculeId, id));

        // Crear nuevas features
        if (features.length > 0) {
          const featureValues = features
            .filter((feature) => feature.trim() !== "")
            .map((feature) => ({
              id: crypto.randomUUID(),
              vehiculeId: id,
              feature: feature.trim(),
              createdAt: new Date(),
            }));

          if (featureValues.length > 0) {
            await this.db.insert(vehiculeFeatures).values(featureValues);
          }
        }
      }

      // Si se proporcionan imágenes, reemplazar todas
      if (imageUrls !== undefined) {
        // Eliminar imágenes existentes
        await this.db
          .delete(vehiculeImages)
          .where(eq(vehiculeImages.vehiculeId, id));

        // Crear nuevas imágenes
        if (imageUrls.length > 0) {
          const imageValues = imageUrls
            .filter((url) => url.trim() !== "")
            .map((imageUrl) => ({
              id: crypto.randomUUID(),
              vehiculeId: id,
              imageUrl: imageUrl.trim(),
              createdAt: new Date(),
            }));

          if (imageValues.length > 0) {
            await this.db.insert(vehiculeImages).values(imageValues);
          }
        }
      }

      // Obtener el vehículo completo actualizado
      return await this.getVehicleWithDetailsById(id);
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
