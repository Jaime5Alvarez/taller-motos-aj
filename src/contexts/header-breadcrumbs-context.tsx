"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderBreadcrumbsContextType {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
}

const HeaderBreadcrumbsContext = createContext<
  HeaderBreadcrumbsContextType | undefined
>(undefined);

export function HeaderBreadcrumbsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  return (
    <HeaderBreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </HeaderBreadcrumbsContext.Provider>
  );
}

export function useHeaderBreadcrumbs() {
  const context = useContext(HeaderBreadcrumbsContext);
  if (context === undefined) {
    throw new Error(
      "useHeaderBreadcrumbs must be used within a HeaderBreadcrumbsProvider",
    );
  }
  return context;
}
