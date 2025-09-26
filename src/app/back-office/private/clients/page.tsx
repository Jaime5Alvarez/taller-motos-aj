import { ClientPageClient } from "@/components/clients/client-page-client";
import { ClientService } from "@/modules/clients/application/services/client-service";

async function getClients() {
  const clientService = new ClientService();
  try {
    return await clientService.getAllClients();
  } catch (error) {
    console.error("Error fetching clients:", error);
    return [];
  }
}

export default async function ClientsPage() {
  const clients = await getClients();

  return <ClientPageClient clients={clients} />;
}
