import { notFound } from "next/navigation";
import { ClientFormClient } from "@/components/clients/client-form-client";
import { Card } from "@/components/ui/card";
import { ClientService } from "@/modules/clients/application/services/client-service";

interface EditClientPageProps {
  params: { id: string };
}

async function getClientWithVehicles(id: string) {
  const clientService = new ClientService();
  try {
    const client = await clientService.getClientById(id);
    if (!client) return null;

    const vehicles = await clientService.getClientVehicles(id);
    return { client, vehicles };
  } catch (error) {
    console.error("Error fetching client with vehicles:", error);
    return null;
  }
}

export default async function EditClientPage({ params }: EditClientPageProps) {
  const data = await getClientWithVehicles(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <Card>
        <ClientFormClient client={data.client} vehicles={data.vehicles} />
      </Card>
    </div>
  );
}
