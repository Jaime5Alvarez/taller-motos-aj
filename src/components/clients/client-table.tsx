"use client";

import { clientColumns } from "@/components/clients/client-columns";
import { BaseDataTable } from "@/components/shared/base-data-table";
import type { Client } from "@/types/client";

interface ClientTableProps {
  clients: Client[];
  onRowClick?: (client: Client) => void;
}

export function ClientTable({ clients, onRowClick }: ClientTableProps) {
  const handleRowClick = (client: Client) => {
    if (onRowClick) {
      onRowClick(client);
    } else {
      // Comportamiento por defecto: navegar a los detalles del cliente
      console.log("Ver detalles del cliente:", client.id);
    }
  };

  return (
    <BaseDataTable
      columns={clientColumns}
      data={clients}
      searchPlaceholder="Buscar clientes..."
      searchColumnKey="name"
      emptyMessage="No se encontraron clientes."
      onRowClick={handleRowClick}
    />
  );
}
