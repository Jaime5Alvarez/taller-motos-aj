import { VehiclePageClient } from "@/components/vehicles/vehicle-page-client";
import { VehicleService } from "@/modules/vehicles/application/services/vehicle-service";

async function getVehicles() {
  const vehicleService = new VehicleService();
  try {
    return await vehicleService.getAllVehicles();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return [];
  }
}

export default async function VehiculesPage() {
  const vehicles = await getVehicles();

  return <VehiclePageClient vehicles={vehicles} />;
}
