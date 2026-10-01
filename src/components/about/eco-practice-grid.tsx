"use client";

import type { ReactNode } from "react";
import { StaggerGroup, StaggerItem } from "@/components/motion";

export type EcoPractice = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function EcoPracticeGrid({ items }: { items: EcoPractice[] }) {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <StaggerItem key={item.title}>
          <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground [&_svg]:size-6">
              {item.icon}
            </div>
            <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
