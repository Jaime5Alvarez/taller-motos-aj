"use client";

import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbItemUI,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useHeaderBreadcrumbs } from "@/contexts/header-breadcrumbs-context";

export function HeaderBreadcrumbs() {
  const { breadcrumbs } = useHeaderBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={`${item.label}-${index}`} className="flex items-center">
              {index > 0 && <BreadcrumbSeparator className="mx-2" />}
              <BreadcrumbItemUI>
                {isLast || !item.href ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItemUI>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
