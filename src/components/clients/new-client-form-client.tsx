"use client";

import { useRouter } from "nextjs-toploader/app";
import { ClientForm } from "@/components/clients/client-form";
import { Card } from "@/components/ui/card";
import { useSetHeaderBreadcrumbs } from "@/hooks/use-set-header-breadcrumbs";
import { apiClient } from "@/lib/interceptor";
import type { ClientSchema } from "@/lib/validations/client";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface NewClientFormClientProps {
  breadcrumbs: BreadcrumbItem[];
}

export function NewClientFormClient({ breadcrumbs }: NewClientFormClientProps) {
  const router = useRouter();

  useSetHeaderBreadcrumbs(breadcrumbs);

  const handleSubmit = async (
    data: ClientSchema,
  ): Promise<{ error?: string }> => {
    try {
      // Crear el cliente
      const clientResponse = await apiClient.post("/api/clients", {
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!clientResponse.data) {
        throw new Error("Failed to create client");
      }

      const client = await clientResponse.data;

      // Si hay vehículos, crearlos
      if (data.vehicles && data.vehicles.length > 0) {
        for (const vehicle of data.vehicles) {
          if (vehicle.carName && vehicle.licensePlate) {
            await apiClient.post(`/api/clients/${client.id}/vehicles`, vehicle);
          }
        }
      }

      // Redirigir a la lista de clientes después de crear
      router.push("/back-office/private/clients");
      router.refresh();

      return {};
    } catch (error) {
      console.error("Error creating client:", error);
      return {
        error: "Error al crear el cliente. Por favor, inténtalo de nuevo.",
      };
    }
  };

  return (
    <Card>
      <ClientForm onSubmit={handleSubmit} />
    </Card>
  );
}
