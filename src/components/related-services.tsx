import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type RelatedService = {
  title: string;
  description: string;
  href: string;
};

export function RelatedServices({
  title,
  items,
}: {
  title: string;
  items: RelatedService[];
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-2 rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <h3 className="flex items-center justify-between font-heading text-lg font-bold text-foreground">
                {item.title}
                <ArrowRight className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="text-sm whitespace-pre-line text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
