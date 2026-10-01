"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShowcaseService = {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

function Row({ service, reverse }: { service: ShowcaseService; reverse?: boolean }) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-2"
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-72 overflow-hidden rounded-3xl sm:h-96"
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        <span className="font-heading absolute top-5 left-5 text-6xl font-black text-white/25 select-none">
          {service.index}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-5"
      >
        <h3 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="text-base text-muted-foreground sm:text-lg">{service.description}</p>
        <ul className="flex flex-col gap-2.5">
          {service.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {highlight}
            </li>
          ))}
        </ul>
        <Link
          href={service.href}
          className="mt-2 flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Learn more
          <ArrowUpRight className="size-4" />
        </Link>
      </motion.div>
    </div>
  );
}

export function ServiceShowcase({ services }: { services: ShowcaseService[] }) {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      {services.map((service, i) => (
        <Row key={service.href} service={service} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}
