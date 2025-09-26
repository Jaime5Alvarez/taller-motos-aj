"use client";

import { ClientForm } from "@/components/clients/client-form";
import type { ClientSchema } from "@/lib/validations/client";
import type { Client } from "@/types/client";
import { useRouter } from "next/navigation";

interface ClientFormClientProps {
  client: Client;
}

export function ClientFormClient({ client }: ClientFormClientProps) {
  const router = useRouter();

  const handleSubmit = async (data: ClientSchema): Promise<{ error?: string }> => {
    try {
      const response = await fetch(`/api/clients/${client.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update client");
      }
      
      // Redirigir a la lista de clientes después de actualizar
      router.push("/back-office/private/clients");
      router.refresh();
      
      return {};
    } catch (error) {
      console.error("Error updating client:", error);
      return { 
        error: "Error al actualizar el cliente. Por favor, inténtalo de nuevo."
      };
    }
  };

  return (
    <ClientForm
      client={client}
      onSubmit={handleSubmit}
    />
  );
}
