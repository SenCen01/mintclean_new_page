"use client";

import { StaggerGroup, StaggerItem, AnimatedCounter } from "@/components/motion";

export type Stat =
  | { value: number; suffix?: string; display?: undefined; label: string }
  | { display: string; value?: undefined; suffix?: undefined; label: string };

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <StaggerItem key={stat.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <span className="font-heading text-4xl font-black text-primary sm:text-5xl">
            {stat.display !== undefined ? (
              stat.display
            ) : (
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            )}
          </span>
          <span className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</span>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
