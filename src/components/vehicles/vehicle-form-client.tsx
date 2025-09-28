"use client";

import { useRouter } from "nextjs-toploader/app";
import { Card } from "@/components/ui/card";
import { useSetHeaderBreadcrumbs } from "@/hooks/use-set-header-breadcrumbs";
import { apiClient } from "@/lib/interceptor";
import type { VehicleSchema } from "@/lib/validations/vehicle";
import type { VehicleWithDetails } from "@/types/vehicle";
import { VehicleForm } from "./vehicle-form";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface VehicleFormClientProps {
  vehicle: VehicleWithDetails;
  features: string[];
  images: Array<{ url: string; order: number }>;
  breadcrumbs: BreadcrumbItem[];
}

export function VehicleFormClient({
  vehicle,
  features,
  images,
  breadcrumbs,
}: VehicleFormClientProps) {
  const router = useRouter();

  useSetHeaderBreadcrumbs(breadcrumbs);

  const handleSubmit = async (
    data: VehicleSchema,
  ): Promise<{ error?: string }> => {
    try {
      const response = await apiClient.put(`/api/vehicles/${vehicle.id}`, {
        name: data.name,
        description: data.description,
        price: data.price,
        mileage: data.mileage,
        year: data.year,
        fuel: data.fuel,
        features: data.features,
        images: data.images,
      });

      if (!response.data) {
        const errorData = await response.data;
        throw new Error(errorData.error || "Failed to update vehicle");
      }

      // Redirigir a la lista de vehículos después de actualizar
      router.push("/back-office/private/vehicules");
      router.refresh();

      return {};
    } catch (error) {
      console.error("Error updating vehicle:", error);
      return {
        error:
          error instanceof Error
            ? error.message
            : "Error al actualizar el vehículo. Por favor, inténtalo de nuevo.",
      };
    }
  };

  const handleDelete = async (): Promise<{ error?: string }> => {
    try {
      const response = await apiClient.delete(`/api/vehicles/${vehicle.id}`);

      if (!response.data) {
        const errorData = await response.data;
        throw new Error(errorData.error || "Failed to delete vehicle");
      }

      // Redirigir a la lista de vehículos después de eliminar
      router.push("/back-office/private/vehicules");
      router.refresh();

      return {};
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      return {
        error:
          error instanceof Error
            ? error.message
            : "Error al eliminar el vehículo. Por favor, inténtalo de nuevo.",
      };
    }
  };

  return (
    <Card>
      <VehicleForm
        vehicle={vehicle}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        initialFeatures={features}
        initialImages={images}
        isEditing={true}
      />
    </Card>
  );
}
