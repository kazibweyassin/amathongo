import { ServiceCard } from "@/components/ServiceCard";
import type { Service } from "@/lib/services";

export function ServiceGrid({
  services,
  compact = false,
}: {
  services: Service[];
  compact?: boolean;
}) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.slug}
          slug={service.slug}
          title={service.title}
          description={compact ? undefined : service.description}
        />
      ))}
    </div>
  );
}
