import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export type RailService = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  points: string[];
};

export function ServiceRail({ services }: { services: RailService[] }) {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      {services.map((service, i) => {
        const reversed = i % 2 === 1;
        return (
          <Reveal key={service.href} y={32}>
            <div
              className={cn(
                "mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8",
                reversed && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-96">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="flex flex-col gap-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="group mt-2 flex w-fit items-center gap-1.5 text-sm font-bold text-primary"
                >
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
