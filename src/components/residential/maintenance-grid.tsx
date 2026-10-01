import Image from "next/image";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

export type MaintenanceService = {
  image: string;
  alt: string;
  title: string;
  description?: string;
  wide?: boolean;
};

export function MaintenanceGrid({ items }: { items: MaintenanceService[] }) {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {items.map((item) => (
        <StaggerItem
          key={item.title}
          className={cn(
            "group relative h-56 overflow-hidden rounded-2xl sm:h-64",
            item.wide && "col-span-2"
          )}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="font-heading font-bold text-white">{item.title}</h3>
            {item.description && (
              <p className="mt-1 text-sm text-white/75">{item.description}</p>
            )}
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
