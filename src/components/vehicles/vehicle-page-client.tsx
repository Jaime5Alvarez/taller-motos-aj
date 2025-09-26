"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VehicleTable } from "@/components/vehicles/vehicle-table";
import type { Vehicle } from "@/types/vehicle";

interface VehiclePageClientProps {
  vehicles: Vehicle[];
}

export function VehiclePageClient({ vehicles }: VehiclePageClientProps) {
  const handleVehicleClick = (vehicle: Vehicle) => {
    console.log("Clicked on vehicle:", vehicle.name);
    // Aquí podrías navegar a una página de detalles o abrir un modal
  };

  const handleAddVehicle = () => {
    console.log("Add new vehicle");
    // Aquí podrías navegar a un formulario de creación o abrir un modal
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Vehículos en venta
          </h1>
          <p className="text-muted-foreground">
            Gestiona el inventario de vehículos disponibles para la venta
          </p>
        </div>
        <Button onClick={handleAddVehicle} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Agregar vehículo
        </Button>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <VehicleTable vehicles={vehicles} onRowClick={handleVehicleClick} />
      </div>
    </div>
  );
}
