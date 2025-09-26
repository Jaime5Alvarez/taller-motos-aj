"use client";

import { ClientForm } from "@/components/clients/client-form";
import type { ClientSchema } from "@/lib/validations/client";
import { useRouter } from "next/navigation";

export function NewClientFormClient() {
  const router = useRouter();

  const handleSubmit = async (data: ClientSchema): Promise<{ error?: string }> => {
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create client");
      }
      
      // Redirigir a la lista de clientes después de crear
      router.push("/back-office/private/clients");
      router.refresh();
      
      return {};
    } catch (error) {
      console.error("Error creating client:", error);
      return { 
        error: "Error al crear el cliente. Por favor, inténtalo de nuevo."
      };
    }
  };

  return (
    <ClientForm
      onSubmit={handleSubmit}
    />
  );
}
