import Image from "next/image";
import Link from "next/link";
import { CloudSnow, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TrustPillars } from "@/components/trust-pillars";
import { Snowfall } from "@/components/snow-removal/snowfall";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SnowHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark py-28 text-white sm:py-32">
      <Image
        src="/images/MC-Landing-BG-1.jpg"
        alt="MintClean crew clearing snow in Vancouver"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/50" />
      <Snowfall />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <span className="flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur">
          <CloudSnow className="size-3.5 text-primary" />
          Winter Storm Ready &mdash; 24/7 Dispatch
        </span>
        <h1 className="max-w-3xl font-heading text-5xl font-black tracking-tight text-balance sm:text-7xl">
          Snow Removal &amp; Salting
        </h1>
        <p className="max-w-2xl text-lg text-white/80">
          Reliable, experienced, and insured. We monitor the forecast so your
          parking lots, sidewalks, and driveways stay clear before the storm
          becomes a problem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#quote" className={cn(buttonVariants({ size: "lg" }))}>
            Get A Free Quote
          </Link>
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "gap-2 bg-white/10 text-white hover:bg-white/20"
            )}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>
        <TrustPillars className="mt-2 text-white/90 [&_svg]:text-primary" />
      </div>
    </section>
  );
}
