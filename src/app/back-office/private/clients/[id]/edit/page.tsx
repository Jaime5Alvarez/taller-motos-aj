import { Card } from "@/components/ui/card";
import { ClientFormClient } from "@/components/clients/client-form-client";
import { ClientService } from "@/modules/clients/application/services/client-service";
import { notFound } from "next/navigation";

interface EditClientPageProps {
  params: { id: string };
}

async function getClient(id: string) {
  const clientService = new ClientService();
  try {
    return await clientService.getClientById(id);
  } catch (error) {
    console.error("Error fetching client:", error);
    return null;
  }
}

export default async function EditClientPage({ params }: EditClientPageProps) {
  const client = await getClient(params.id);

  if (!client) {
    notFound();
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <Card>
        <ClientFormClient client={client} />
      </Card>
    </div>
  );
}
