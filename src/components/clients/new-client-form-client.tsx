"use client";

import { useRouter } from "next/navigation";
import { ClientForm } from "@/components/clients/client-form";
import { Card } from "@/components/ui/card";
import { useSetHeaderBreadcrumbs } from "@/hooks/use-set-header-breadcrumbs";
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
      const clientResponse = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
        }),
      });

      if (!clientResponse.ok) {
        throw new Error("Failed to create client");
      }

      const client = await clientResponse.json();

      // Si hay vehículos, crearlos
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
