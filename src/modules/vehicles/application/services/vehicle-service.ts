import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { eq } from "drizzle-orm";
import { AWS_CONFIG, s3Client } from "@/lib/aws-config";
import { moveImageFromTempToPermanent } from "@/lib/s3-utils";
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

  async getAvailableVehicles(): Promise<Vehicle[]> {
    try {
      const result = await this.db
        .select()
        .from(vehicles)
        .where(eq(vehicles.status, "available"));
      return result as Vehicle[];
    } catch (error) {
      console.error("Error fetching available vehicles:", error);
      throw new Error("Failed to fetch available vehicles");
    }
  }

  async getAvailableVehiclesWithDetails(): Promise<VehicleWithDetails[]> {
    try {
      const vehiclesList = await this.db
        .select()
        .from(vehicles)
        .where(eq(vehicles.status, "available"));

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
      console.error("Error fetching available vehicles with details:", error);
      throw new Error("Failed to fetch available vehicles with details");
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
        .where(eq(vehiculeImages.vehiculeId, vehicleId))
        .orderBy(vehiculeImages.order);

      return result;
    } catch (error) {
      console.error("Error fetching vehicle images:", error);
      throw new Error("Failed to fetch vehicle images");
    }
  }

  async createVehicle(
    vehicleData: Omit<Vehicle, "id" | "createdAt">,
    features?: string[],
    images?: Array<{ url: string; order: number }>,
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

      // Crear las imágenes si existen (mover de temporal a permanente)
      const vehicleImagesList: VehicleImage[] = [];
      if (images && images.length > 0) {
        const permanentImages = [];

        // Mover cada imagen de temporal a permanente
        for (const image of images.filter((img) => img.url.trim() !== "")) {
          try {
            let permanentUrl = image.url.trim();

            // Si es una imagen temporal, moverla a permanente
            if (permanentUrl.includes("/temp/")) {
              permanentUrl = await moveImageFromTempToPermanent(permanentUrl);
              console.log(
                `Moved temp image to permanent: ${image.url} -> ${permanentUrl}`,
              );
            }

            permanentImages.push({
              id: crypto.randomUUID(),
              vehiculeId: vehicleId,
              imageUrl: permanentUrl,
              order: image.order,
              createdAt: new Date(),
            });
          } catch (error) {
            console.error(`Failed to move image ${image.url}:`, error);
            // Continuar con las demás imágenes, no fallar toda la creación
          }
        }

        if (permanentImages.length > 0) {
          const imageResults = await this.db
            .insert(vehiculeImages)
            .values(permanentImages)
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
    images?: Array<{ url: string; order: number }>,
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
      if (images !== undefined) {
        // Obtener imágenes existentes antes de eliminarlas
        const existingImages = await this.getVehicleImages(id);

        // Identificar qué imágenes se van a eliminar (las que no están en la nueva lista)
        const newImageUrls = images.map((img) => img.url);
        const imagesToDelete = existingImages.filter(
          (existingImg) => !newImageUrls.includes(existingImg.imageUrl),
        );

        // Eliminar imágenes de S3 que ya no se necesitan
        if (imagesToDelete.length > 0) {
          const deletePromises = imagesToDelete.map((image) =>
            this.deleteImageFromS3(image.imageUrl),
          );
          await Promise.allSettled(deletePromises);
          console.log(
            `Attempted to delete ${imagesToDelete.length} unused images from S3`,
          );
        }

        // Eliminar imágenes existentes de la base de datos
        await this.db
          .delete(vehiculeImages)
          .where(eq(vehiculeImages.vehiculeId, id));

        // Crear nuevas imágenes (mover de temporal a permanente si es necesario)
        if (images.length > 0) {
          const permanentImages = [];

          // Procesar cada imagen (mover de temporal a permanente si es necesario)
          for (const image of images.filter((img) => img.url.trim() !== "")) {
            try {
              let permanentUrl = image.url.trim();

              // Si es una imagen temporal, moverla a permanente
              if (permanentUrl.includes("/temp/")) {
                permanentUrl = await moveImageFromTempToPermanent(permanentUrl);
                console.log(
                  `Moved temp image to permanent: ${image.url} -> ${permanentUrl}`,
                );
              }

              permanentImages.push({
                id: crypto.randomUUID(),
                vehiculeId: id,
                imageUrl: permanentUrl,
                order: image.order,
                createdAt: new Date(),
              });
            } catch (error) {
              console.error(`Failed to move image ${image.url}:`, error);
              // Continuar con las demás imágenes, no fallar toda la actualización
            }
          }

          if (permanentImages.length > 0) {
            await this.db.insert(vehiculeImages).values(permanentImages);
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

  private async deleteImageFromS3(imageUrl: string): Promise<void> {
    try {
      let key: string;

      // Manejar tanto URLs de proxy como URLs directas de S3
      if (imageUrl.startsWith("/api/image/")) {
        // URL de proxy: /api/image/vehicles/filename.ext
        key = imageUrl.replace("/api/image/", "");
      } else if (imageUrl.startsWith("http")) {
        // URL directa de S3: https://bucket-name.s3.region.amazonaws.com/vehicles/filename.ext
        const url = new URL(imageUrl);
        key = url.pathname.substring(1); // Remover el '/' inicial
      } else {
        // Asumir que ya es una key
        key = imageUrl;
      }

      const deleteCommand = new DeleteObjectCommand({
        Bucket: AWS_CONFIG.bucketName,
        Key: key,
      });

      await s3Client.send(deleteCommand);
      console.log(`Image deleted from S3: ${key}`);
    } catch (error) {
      console.error(`Error deleting image from S3: ${imageUrl}`, error);
      // No lanzamos error aquí para no fallar toda la eliminación por una imagen
    }
  }

  async deleteVehicle(id: string): Promise<boolean> {
    try {
      // Primero obtener todas las imágenes del vehículo antes de eliminarlo
      const vehicleImages = await this.getVehicleImages(id);

      // Eliminar el vehículo de la base de datos primero (las imágenes y características se eliminan por CASCADE)
      const result = await this.db
        .delete(vehicles)
        .where(eq(vehicles.id, id))
        .returning();

      if (result.length === 0) {
        throw new Error("Vehicle not found");
      }

      // Después eliminar las imágenes de S3 en paralelo (si las hay)
      if (vehicleImages.length > 0) {
        const deletePromises = vehicleImages.map((image) =>
          this.deleteImageFromS3(image.imageUrl),
        );

        // Ejecutar todas las eliminaciones en paralelo
        // Usamos Promise.allSettled para que no falle si alguna imagen no se puede eliminar
        await Promise.allSettled(deletePromises);
        console.log(
          `Attempted to delete ${vehicleImages.length} images from S3 after vehicle deletion`,
        );
      }

      return true;
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      throw new Error("Failed to delete vehicle");
    }
  }
}
