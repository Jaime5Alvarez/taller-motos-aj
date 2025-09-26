"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { VehicleTable } from "@/components/vehicles/vehicle-table";
import type { Vehicle } from "@/types/vehicle";

interface VehiclePageClientProps {
  vehicles: Vehicle[];
}

export function VehiclePageClient({ vehicles }: VehiclePageClientProps) {
  const router = useRouter();

  const handleVehicleClick = (vehicle: Vehicle) => {
    router.push(`/back-office/private/vehicules/${vehicle.id}/edit`);
  };

  const handleAddVehicle = () => {
    router.push("/back-office/private/vehicules/new");
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
