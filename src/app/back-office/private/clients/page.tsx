"use client";

import { Plus } from "lucide-react";
import { ClientTable } from "@/components/clients/client-table";
import { Button } from "@/components/ui/button";
import type { Client } from "@/types/client";

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
const sampleClients: Client[] = [
  {
    id: "1",
    name: "Juan Carlos Martínez",
    email: "juan.martinez@email.com",
    phone: "+34 612 345 678",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "María González López",
    email: "maria.gonzalez@email.com",
    phone: "+34 687 123 456",
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "3",
    name: "Pedro Sánchez Ruiz",
    email: "pedro.sanchez@email.com",
    phone: "+34 654 987 321",
    createdAt: new Date("2024-03-05"),
  },
  {
    id: "4",
    name: "Ana Fernández Castro",
    email: "ana.fernandez@email.com",
    phone: "+34 623 456 789",
    createdAt: new Date("2024-01-28"),
  },
  {
    id: "5",
    name: "Carlos Rodríguez Vega",
    email: "carlos.rodriguez@email.com",
    phone: "+34 698 765 432",
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "6",
    name: "Laura Jiménez Moreno",
    email: "laura.jimenez@email.com",
    phone: "+34 645 123 987",
    createdAt: new Date("2024-03-12"),
  },
  {
    id: "7",
    name: "Miguel Ángel Torres",
    email: "miguel.torres@email.com",
    phone: "+34 676 543 210",
    createdAt: new Date("2024-01-08"),
  },
  {
    id: "8",
    name: "Isabel Ramírez Díaz",
    email: "isabel.ramirez@email.com",
    phone: "+34 634 876 543",
    createdAt: new Date("2024-02-25"),
  },
];

export default function ClientsPage() {
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
        <ClientTable clients={sampleClients} onRowClick={handleClientClick} />
      </div>
    </div>
  );
}
