"use client";

import { useRouter } from "next/navigation";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { Card } from "@/components/ui/card";
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

  const handleSubmit = async (
    data: VehicleSchema,
  ): Promise<{ error?: string }> => {
    try {
      const response = await fetch("/api/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
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
    <div className="space-y-6">
      <PageBreadcrumbs items={breadcrumbs} />
      <Card>
        <VehicleForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
}
