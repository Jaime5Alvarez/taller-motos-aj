"use client";

import { Car, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSetHeaderBreadcrumbs } from "@/hooks/use-set-header-breadcrumbs";

export default function BackOfficePage() {
  const router = useRouter();

  useSetHeaderBreadcrumbs([{ label: "Dashboard" }]);

  return (
    <div className="space-y-6">
      {/* Card de bienvenida */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            ¡Bienvenido al Panel de Administración!
          </CardTitle>
          <CardDescription>
            Gestiona tu taller de motocicletas desde aquí
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Cards de acceso rápido */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Vehículos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Car className="h-6 w-6" />
              </div>
              Vehículos en Venta
            </CardTitle>
            <CardDescription>
              Gestiona tu inventario de motocicletas y coches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => router.push("/back-office/private/vehicules")}
            >
              Ir a Vehículos
            </Button>
          </CardContent>
        </Card>

        {/* Clientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              Clientes
            </CardTitle>
            <CardDescription>
              Administra tu base de datos de clientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push("/back-office/private/clients")}>
              Ir a Clientes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
