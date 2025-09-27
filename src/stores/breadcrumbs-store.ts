import { create } from "zustand";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsStore {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
  clearBreadcrumbs: () => void;
}

export const useBreadcrumbsStore = create<BreadcrumbsStore>((set) => ({
  breadcrumbs: [],
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
  clearBreadcrumbs: () => set({ breadcrumbs: [] }),
}));
