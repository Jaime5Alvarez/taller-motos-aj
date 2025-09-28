import { notFound } from "next/navigation";
import { ClientFormClient } from "@/components/clients/client-form-client";
import { ClientService } from "@/modules/clients/application/services/client-service";

interface EditClientPageProps {
  params: Promise<{ id: string }>;
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
  const { id } = await params;
  const data = await getClientWithVehicles(id);

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <ClientFormClient
        client={data.client}
        vehicles={data.vehicles}
        breadcrumbs={[
          { label: "Dashboard", href: "/back-office/private" },
          { label: "Clientes", href: "/back-office/private/clients" },
          { label: "Editar Cliente" },
        ]}
      />
    </div>
  );
}
