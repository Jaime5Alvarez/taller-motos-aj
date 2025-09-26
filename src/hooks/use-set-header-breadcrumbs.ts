"use client";

import { useEffect } from "react";
import { useHeaderBreadcrumbs } from "@/contexts/header-breadcrumbs-context";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function useSetHeaderBreadcrumbs(breadcrumbs: BreadcrumbItem[]) {
  const { setBreadcrumbs } = useHeaderBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs(breadcrumbs);

    // Limpiar las breadcrumbs cuando el componente se desmonte
    return () => {
      setBreadcrumbs([]);
    };
  }, [breadcrumbs, setBreadcrumbs]);
}
