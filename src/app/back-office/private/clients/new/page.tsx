import { NewClientFormClient } from "@/components/clients/new-client-form-client";

export default function NewClientPage() {
  return (
    <NewClientFormClient
      breadcrumbs={[
        { label: "Dashboard", href: "/back-office/private" },
        { label: "Clientes", href: "/back-office/private/clients" },
        { label: "Nuevo Cliente" },
      ]}
    />
  );
}
