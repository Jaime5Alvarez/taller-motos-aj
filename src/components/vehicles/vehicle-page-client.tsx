"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { VehicleTable } from "@/components/vehicles/vehicle-table";
import { useHeaderBreadcrumbs } from "@/contexts/header-breadcrumbs-context";
import type { Vehicle } from "@/types/vehicle";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface VehiclePageClientProps {
  vehicles: Vehicle[];
  breadcrumbs: BreadcrumbItem[];
}

export function VehiclePageClient({
  vehicles,
  breadcrumbs,
}: VehiclePageClientProps) {
  const router = useRouter();
  const { setBreadcrumbs } = useHeaderBreadcrumbs();

  setBreadcrumbs(breadcrumbs);

  const handleAddVehicle = () => {
    router.push("/back-office/private/vehicules/new");
  };

  return (
    <div>
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
        <VehicleTable vehicles={vehicles} />
      </div>
    </div>
  );
}
