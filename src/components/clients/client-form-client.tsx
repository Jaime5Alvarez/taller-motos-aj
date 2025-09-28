"use client";

import { useRouter } from "nextjs-toploader/app";
import { ClientForm } from "@/components/clients/client-form";
import { Card } from "@/components/ui/card";
import { useSetHeaderBreadcrumbs } from "@/hooks/use-set-header-breadcrumbs";
import { apiClient } from "@/lib/interceptor";
import type { ClientSchema } from "@/lib/validations/client";
import type { Client, ClientVehicle } from "@/types/client";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ClientFormClientProps {
  client: Client;
  vehicles: ClientVehicle[];
  breadcrumbs: BreadcrumbItem[];
}

export function ClientFormClient({
  client,
  vehicles,
  breadcrumbs,
}: ClientFormClientProps) {
  const router = useRouter();

  useSetHeaderBreadcrumbs(breadcrumbs);

  const handleSubmit = async (
    data: ClientSchema,
  ): Promise<{ error?: string }> => {
    try {
      // Actualizar el cliente
      const response = await apiClient.put(`/api/clients/${client.id}`, {
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!response.data) {
        throw new Error("Failed to update client");
      }

      // Eliminar todos los vehículos existentes
      for (const vehicle of vehicles) {
        await apiClient.delete(`/api/clients/vehicles/${vehicle.id}`);
      }

      // Crear los nuevos vehículos
      if (data.vehicles && data.vehicles.length > 0) {
        for (const vehicle of data.vehicles) {
          if (vehicle.carName && vehicle.licensePlate) {
            await apiClient.post(`/api/clients/${client.id}/vehicles`, vehicle);
          }
        }
      }

      // Redirigir a la lista de clientes después de actualizar
      router.push("/back-office/private/clients");
      router.refresh();

      return {};
    } catch (error) {
      console.error("Error updating client:", error);
      return {
        error: "Error al actualizar el cliente. Por favor, inténtalo de nuevo.",
      };
    }
  };

  // Convertir los vehículos del cliente al formato esperado por el formulario
  const initialVehicles = vehicles.map((v) => ({
    carName: v.carName,
    licensePlate: v.licensePlate,
  }));

  return (
    <Card>
      <ClientForm
        client={client}
        initialVehicles={initialVehicles}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}
