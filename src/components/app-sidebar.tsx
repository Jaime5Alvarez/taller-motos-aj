"use client";

import { Car, Users } from "lucide-react";
import Image from "next/image";
import type * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUserSession } from "@/lib/providers/user-session";

const data = {
  navMain: [
    {
      title: "Vehículos en venta",
      url: "/back-office/private/vehicules",
      icon: Car,
      isActive: true,
    },
    {
      title: "Clientes",
      url: "/back-office/private/clients",
      icon: Users,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userSession = useUserSession();
  if (!userSession) {
    return null;
  }
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/back-office/private">
                <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    src="/aj-logo.webp"
                    alt="AJ Taller de Motos"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    AJ Taller de Motos
                  </span>
                  <span className="truncate text-xs">Back Office</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser userSession={userSession} />
      </SidebarFooter>
    </Sidebar>
  );
}
