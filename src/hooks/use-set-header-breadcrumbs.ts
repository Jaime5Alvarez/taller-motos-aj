"use client";

import { useEffect } from "react";
import { useBreadcrumbsStore } from "@/stores/breadcrumbs-store";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function useSetHeaderBreadcrumbs(breadcrumbs: BreadcrumbItem[]) {
  const setBreadcrumbs = useBreadcrumbsStore((state) => state.setBreadcrumbs);
  const clearBreadcrumbs = useBreadcrumbsStore(
    (state) => state.clearBreadcrumbs,
  );

  useEffect(() => {
    setBreadcrumbs(breadcrumbs);

    // Limpiar las breadcrumbs cuando el componente se desmonte
    return () => {
      clearBreadcrumbs();
    };
  }, [breadcrumbs, setBreadcrumbs, clearBreadcrumbs]);
}
