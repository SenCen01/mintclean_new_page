"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "motion/react";

export type TimelineItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function DifferenceTimeline({
  items,
  image,
  imageAlt,
}: {
  items: TimelineItem[];
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
      <div className="hidden lg:block">
        <div className="sticky top-28 h-[32rem] overflow-hidden rounded-3xl">
          <Image src={image} alt={imageAlt} fill sizes="40vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="font-heading text-2xl font-extrabold text-white">
              The Mint Clean Difference
            </p>
            <p className="mt-2 text-sm text-white/80">
              Six reasons commercial properties across Vancouver trust us
              with their day-to-day upkeep.
            </p>
          </div>
        </div>
      </div>

      <ol className="relative flex flex-col gap-10 before:absolute before:top-2 before:bottom-2 before:left-[1.35rem] before:w-px before:bg-border sm:gap-12">
        {items.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-6 pl-0"
          >
            <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-primary [&_svg]:size-5">
              {item.icon}
            </span>
            <div className="pt-1">
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
