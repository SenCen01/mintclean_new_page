import { cn } from "@/lib/utils";

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-2xl font-bold tracking-tight",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="size-4.5" fill="none" aria-hidden>
          <path
            d="M12 2c4 4.5 7 8.3 7 12a7 7 0 1 1-14 0c0-3.7 3-7.5 7-12Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={variant === "dark" ? "text-white" : "text-foreground"}>
        Mint<span className="text-primary">Clean</span>
      </span>
    </span>
  );
}
