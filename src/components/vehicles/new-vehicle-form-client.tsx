"use client";

import { useRouter } from "nextjs-toploader/app";
import { Card } from "@/components/ui/card";
import { useSetHeaderBreadcrumbs } from "@/hooks/use-set-header-breadcrumbs";
import { apiClient } from "@/lib/interceptor";
import type { VehicleSchema } from "@/lib/validations/vehicle";
import { VehicleForm } from "./vehicle-form";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface NewVehicleFormClientProps {
  breadcrumbs: BreadcrumbItem[];
}

export function NewVehicleFormClient({
  breadcrumbs,
}: NewVehicleFormClientProps) {
  const router = useRouter();

  useSetHeaderBreadcrumbs(breadcrumbs);

  const handleSubmit = async (
    data: VehicleSchema,
  ): Promise<{ error?: string }> => {
    try {
      const response = await apiClient.post("/api/vehicles", {
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
        throw new Error(errorData.error || "Failed to create vehicle");
      }

      // Redirigir a la lista de vehículos después de crear
      router.push("/back-office/private/vehicules");
      router.refresh();

      return {};
    } catch (error) {
      console.error("Error creating vehicle:", error);
      return {
        error:
          error instanceof Error
            ? error.message
            : "Error al crear el vehículo. Por favor, inténtalo de nuevo.",
      };
    }
  };

  return (
    <Card>
      <VehicleForm
        onSubmit={handleSubmit}
        vehicle={{
          id: "",
          name: "",
          description: "",
          price: 0,
          mileage: 0,
          year: 0,
          fuel: "",
          status: "available",
          createdAt: new Date(),
        }}
        isEditing={false}
      />
    </Card>
  );
}
