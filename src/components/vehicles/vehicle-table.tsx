"use client";

import { BaseDataTable } from "@/components/shared/base-data-table";
import { vehicleColumns } from "@/components/vehicles/vehicle-columns";
import type { Vehicle } from "@/types/vehicle";

interface VehicleTableProps {
  vehicles: Vehicle[];
  onRowClick?: (vehicle: Vehicle) => void;
}

export function VehicleTable({ vehicles, onRowClick }: VehicleTableProps) {
  const handleRowClick = (vehicle: Vehicle) => {
    if (onRowClick) {
      onRowClick(vehicle);
    } else {
      // Comportamiento por defecto: navegar a los detalles del vehículo
      console.log("Ver detalles del vehículo:", vehicle.id);
    }
  };

  return (
    <BaseDataTable
      columns={vehicleColumns}
      data={vehicles}
      searchPlaceholder="Buscar vehículos..."
      searchColumnKey="name"
      emptyMessage="No se encontraron vehículos."
      additionalFilter={{
        columnKey: "fuel",
        placeholder: "Filtrar por combustible",
        options: [
          { value: "gasolina", label: "Gasolina" },
          { value: "diesel", label: "Diésel" },
          { value: "eléctrico", label: "Eléctrico" },
          { value: "híbrido", label: "Híbrido" },
        ],
      }}
      onRowClick={handleRowClick}
    />
  );
}
