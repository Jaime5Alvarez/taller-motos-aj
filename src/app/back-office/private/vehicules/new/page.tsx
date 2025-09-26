import { NewVehicleFormClient } from "@/components/vehicles/new-vehicle-form-client";

export default function NewVehiclePage() {
  return (
    <NewVehicleFormClient
      breadcrumbs={[
        { label: "Dashboard", href: "/back-office/private" },
        { label: "Vehículos en Venta", href: "/back-office/private/vehicules" },
        { label: "Nuevo Vehículo" },
      ]}
    />
  );
}
