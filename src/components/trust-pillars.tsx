import { ShieldCheck } from "lucide-react";
import { trustPillars } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TrustPillars({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-8 gap-y-2", className)}>
      {trustPillars.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm font-medium">
          <ShieldCheck className="size-4 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
