import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbItemUI,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function PageBreadcrumbs({ items }: PageBreadcrumbsProps) {
  if (items.length === 0) {
    return (
      <div className="px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItemUI>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItemUI>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }

  return (
    <div className="px-4">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={`${item.label}-${index}`} className="flex items-center">
                {index > 0 && <BreadcrumbSeparator className="mx-2" />}
                <BreadcrumbItemUI>
                  {isLast || !item.href ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItemUI>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
