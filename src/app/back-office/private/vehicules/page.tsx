"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VehicleTable } from "@/components/vehicles/vehicle-table";
import type { Vehicle } from "@/types/vehicle";

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
const sampleVehicles: Vehicle[] = [
  {
    id: "1",
    name: "Honda CBR 600RR",
    description: "Motocicleta deportiva en excelente estado",
    price: 8500,
    mileage: 15000,
    year: 2020,
    fuel: "gasolina",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Yamaha MT-07",
    description: "Naked bike perfecta para ciudad",
    price: 6200,
    mileage: 22000,
    year: 2019,
    fuel: "gasolina",
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "3",
    name: "BMW R1250GS",
    description: "Adventure bike con muchos extras",
    price: 15000,
    mileage: 8000,
    year: 2022,
    fuel: "gasolina",
    createdAt: new Date("2024-03-05"),
  },
  {
    id: "4",
    name: "Harley Davidson Street 750",
    description: "Cruiser americana clásica",
    price: 7800,
    mileage: 18000,
    year: 2018,
    fuel: "gasolina",
    createdAt: new Date("2024-01-28"),
  },
  {
    id: "5",
    name: "Ducati Monster 821",
    description: "Naked italiana con carácter",
    price: 9500,
    mileage: 12000,
    year: 2021,
    fuel: "gasolina",
    createdAt: new Date("2024-02-20"),
  },
];

export default function VehiculesPage() {
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
        <VehicleTable
          vehicles={sampleVehicles}
          onRowClick={handleVehicleClick}
        />
      </div>
    </div>
  );
}
