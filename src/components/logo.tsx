import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/MintClean_White.png"
      alt="Mint Clean Building Maintenance Ltd."
      width={500}
      height={172}
      priority
      className={cn("h-11 w-auto shrink-0 self-start", className)}
    />
  );
}
