"use client";

import { useRouter } from "next/navigation";
import { ClientForm } from "@/components/clients/client-form";
import type { ClientSchema } from "@/lib/validations/client";
import type { Client, ClientVehicle } from "@/types/client";

interface ClientFormClientProps {
  client: Client;
  vehicles: ClientVehicle[];
}

export function ClientFormClient({ client, vehicles }: ClientFormClientProps) {
  const router = useRouter();

  const handleSubmit = async (
    data: ClientSchema,
  ): Promise<{ error?: string }> => {
    try {
      // Actualizar el cliente
      const response = await fetch(`/api/clients/${client.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update client");
      }

      // Eliminar todos los vehículos existentes
      for (const vehicle of vehicles) {
        await fetch(`/api/clients/vehicles/${vehicle.id}`, {
          method: "DELETE",
        });
      }

      // Crear los nuevos vehículos
      if (data.vehicles && data.vehicles.length > 0) {
        for (const vehicle of data.vehicles) {
          if (vehicle.carName && vehicle.licensePlate) {
            await fetch(`/api/clients/${client.id}/vehicles`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vehicle),
            });
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
    <ClientForm
      client={client}
      initialVehicles={initialVehicles}
      onSubmit={handleSubmit}
    />
  );
}
