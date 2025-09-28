import { notFound } from "next/navigation";
import { VehicleFormClient } from "@/components/vehicles/vehicle-form-client";
import { VehicleService } from "@/modules/vehicles/application/services/vehicle-service";

interface EditVehiclePageProps {
  params: Promise<{ id: string }>;
}

async function getVehicleWithDetails(id: string) {
  const vehicleService = new VehicleService();
  try {
    const vehicle = await vehicleService.getVehicleWithDetailsById(id);
    return vehicle;
  } catch (error) {
    console.error("Error fetching vehicle with details:", error);
    return null;
  }
}

export default async function EditVehiclePage({
  params,
}: EditVehiclePageProps) {
  const { id } = await params;
  const vehicleData = await getVehicleWithDetails(id);

  if (!vehicleData) {
    notFound();
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <VehicleFormClient
        vehicle={vehicleData}
        features={vehicleData.features.map((f) => f.feature)}
        images={vehicleData.images.map((i) => ({ url: i.imageUrl, order: i.order }))}
        breadcrumbs={[
          { label: "Dashboard", href: "/back-office/private" },
          {
            label: "Vehículos en Venta",
            href: "/back-office/private/vehicules",
          },
          { label: "Editar Vehículo" },
        ]}
      />
    </div>
  );
}
