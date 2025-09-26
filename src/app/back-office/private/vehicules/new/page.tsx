import { Card } from "@/components/ui/card";
import { NewVehicleFormClient } from "@/components/vehicles/new-vehicle-form-client";

export default function NewVehiclePage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <Card>
        <NewVehicleFormClient />
      </Card>
    </div>
  );
}
