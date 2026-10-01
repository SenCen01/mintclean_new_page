"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type HeavyDutyService = {
  image: string;
  alt: string;
  title: string;
  description?: string;
  featured?: boolean;
};

export function HeavyDutyShowcase({ items }: { items: HeavyDutyService[] }) {
  return (
    <div className="grid auto-rows-[14rem] grid-flow-row-dense grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 * (i % 4), ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "group relative overflow-hidden rounded-2xl",
            item.featured && "col-span-2 row-span-2"
          )}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity group-hover:from-black/90" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <h3
              className={cn(
                "font-heading font-bold text-white",
                item.featured ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
              )}
            >
              {item.title}
            </h3>
            {item.description && item.featured && (
              <p className="mt-1 text-sm text-white/80">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
