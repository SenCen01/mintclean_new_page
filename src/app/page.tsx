import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TrustPillars } from "@/components/trust-pillars";
import { SectionHeading } from "@/components/section-heading";
import { QuoteCta } from "@/components/quote-cta";
import { ClientMarquee } from "@/components/client-marquee";
import { WhyChoose } from "@/components/home/why-choose";
import { ProcessSteps } from "@/components/home/process-steps";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  AnimatedCounter,
  ParallaxImage,
} from "@/components/motion";
import { cn } from "@/lib/utils";

const stats = [
  { value: 10000, suffix: "+", label: "Strata Units Serviced" },
  { value: 7, suffix: "+", label: "Industries Served" },
  { value: null, display: "24/7", label: "Emergency-Ready Availability" },
];

const clientRowOne = [
  { title: "Residential Strata Properties", image: "/images/clients/residential-strata.jpg" },
  { title: "Office Towers", image: "/images/clients/office-towers.jpg" },
  { title: "Auto Dealerships", image: "/images/clients/auto-dealerships.jpg" },
  { title: "Schools & Educational Institutions", image: "/images/clients/schools.jpg" },
];

const clientRowTwo = [
  { title: "Shopping Centres & Strip Malls", image: "/images/clients/shopping-centres.jpg" },
  { title: "Retail Mixed Use", image: "/images/clients/retail-mixed-use.jpg" },
  { title: "Gymnasiums", image: "/images/clients/gymnasiums.jpg" },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-brand-dark text-white">
        <ParallaxImage
          src="/images/MintHero.jpg"
          alt="Bright, well-maintained office space"
          priority
          sizes="100vw"
          wrapperClassName="absolute inset-0"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/30" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 py-24 sm:px-6 lg:px-8">
          <Reveal y={16}>
            <span className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" />
              Fully Insured &amp; Bonded
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="max-w-2xl font-heading text-5xl font-black tracking-tight text-balance sm:text-7xl">
              Taking care of your spaces so you can focus on the main things
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-lg text-white/80">
              Commercial and residential strata building maintenance across
              Greater Vancouver, with professionalism, reliability, and
              attention to detail at our core.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link href="/commercial-services" className={cn(buttonVariants({ size: "lg" }))}>
                Commercial
              </Link>
              <Link
                href="/residential-services"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Residential
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <TrustPillars className="mt-4 text-white/90 [&_svg]:text-primary" />
          </Reveal>
        </div>
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/60 sm:block">
          <ChevronDown className="size-6" />
        </div>
      </section>

      <section className="border-b border-border py-16">
        <StaggerGroup className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-heading text-4xl font-black text-primary sm:text-5xl">
                {stat.value !== null ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <WhyChoose />

      <ProcessSteps />

      <section className="overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Who We Serve" title="Our Clients" />
          </Reveal>
        </div>
        <div className="mt-12">
          <ClientMarquee rowOne={clientRowOne} rowTwo={clientRowTwo} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
