import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { HeaderBreadcrumbs } from "@/components/header-breadcrumbs";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { HeaderBreadcrumbsProvider } from "@/contexts/header-breadcrumbs-context";
import { auth } from "@/lib/auth";
import { UserSessionProvider } from "@/lib/providers/user-session";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/back-office/login");
  }
  return (
    <UserSessionProvider
      userSession={{
        email: session.user.email,
        name: session.user.name,
        id: session.user.id,
      }}
    >
      <HeaderBreadcrumbsProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 justify-between px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <HeaderBreadcrumbs />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </HeaderBreadcrumbsProvider>
    </UserSessionProvider>
  );
}
