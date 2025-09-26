"use client";

import { Plus } from "lucide-react";
import { ClientTable } from "@/components/clients/client-table";
import { Button } from "@/components/ui/button";
import type { Client } from "@/types/client";

interface ClientPageClientProps {
  clients: Client[];
}

export function ClientPageClient({ clients }: ClientPageClientProps) {
  const handleClientClick = (client: Client) => {
    console.log("Clicked on client:", client.name);
    // Aquí podrías navegar a una página de detalles o abrir un modal
  };

  const handleAddClient = () => {
    console.log("Add new client");
    // Aquí podrías navegar a un formulario de creación o abrir un modal
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Gestión de Clientes
          </h1>
          <p className="text-muted-foreground">
            Administra la información de tus clientes y sus vehículos
          </p>
        </div>
        <Button onClick={handleAddClient} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Agregar cliente
        </Button>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <ClientTable clients={clients} onRowClick={handleClientClick} />
      </div>
    </div>
  );
}
