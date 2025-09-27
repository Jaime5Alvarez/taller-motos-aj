"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ClientTable } from "@/components/clients/client-table";
import { Button } from "@/components/ui/button";
import { useSetHeaderBreadcrumbs } from "@/hooks/use-set-header-breadcrumbs";
import type { Client } from "@/types/client";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ClientPageClientProps {
  clients: Client[];
  breadcrumbs: BreadcrumbItem[];
}

export function ClientPageClient({
  clients,
  breadcrumbs,
}: ClientPageClientProps) {
  const router = useRouter();

  useSetHeaderBreadcrumbs(breadcrumbs);

  const handleAddClient = () => {
    router.push("/back-office/private/clients/new");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Gestión de Clientes
          </h1>
          <p className="text-muted-foreground">
            Administra la información de tus clientes y sus vehículos
          </p>
        </div>
        <Button onClick={handleAddClient} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Agregar cliente
        </Button>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <ClientTable clients={clients} />
      </div>
    </div>
  );
}
