import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export type DifferenceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function DifferenceGrid({
  title = "The Mint Clean Difference",
  items,
}: {
  title?: string;
  items: DifferenceItem[];
}) {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5.5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
