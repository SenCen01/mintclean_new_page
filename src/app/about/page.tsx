import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Recycle, Zap, FileText, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { QuoteCta } from "@/components/quote-cta";
import { Reveal } from "@/components/motion";
import { StatStrip } from "@/components/about/stat-strip";
import { EcoPracticeGrid } from "@/components/about/eco-practice-grid";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mint Clean serves commercial and residential strata properties across Greater Vancouver with professionalism, reliability, and attention to detail.",
};

const mintGreenItems = [
  {
    icon: <Leaf />,
    title: "Eco-Friendly Products",
    description:
      "We minimize our footprint by avoiding petroleum based cleaners and choosing Green Seal and Ecologos supplies whenever possible.",
  },
  {
    icon: <Recycle />,
    title: "Recyclable Materials",
    description:
      "We recycle the majority of our consumables, including 100% biodegradable plastic bags and 100% recyclable plastic bottles.",
  },
  {
    icon: <Zap />,
    title: "Energy Efficiency",
    description:
      "Energy Star equipment means less energy wasted and longer useful life. Staff are also encouraged to use public transit.",
  },
  {
    icon: <FileText />,
    title: "Paperless Statements",
    description:
      "By using online systems, we offer paperless invoicing, filling, ordering and reporting.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Strata Units Trusted to Our Care" },
  { display: "24/7", label: "Availability, Rain or Shine" },
  { display: "100%", label: "Insured, Bonded & WorkSafeBC Covered" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Mint Clean Building Maintenance Ltd."
        title="About Us"
        description="Mint Clean serves commercial and residential strata properties across Greater Vancouver."
        image="/images/spencer-watson-VLW2GjQHlgE-unsplash-1.jpg"
        imageAlt="Vancouver skyline at dusk"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 text-muted-foreground">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Our Story
              </span>
              <h2 className="font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                Reliable building maintenance, done right
              </h2>
              <p>
                Our teams go above and beyond to meet our clients&apos; needs
                and exceed expectations, with professionalism, reliability and
                attention to detail at our core.
              </p>
              <p>
                As a Mint Clean client, you rely on our business to take care
                of yours. With customized packages for the specific needs of
                each site, you don&apos;t need to worry about paying for
                services you don&apos;t need. Give Mint Clean an opportunity
                to service your commercial or strata residential building and
                do what we do best. We&apos;ll go the extra mile, guaranteed.
              </p>
              <div className="flex items-center gap-2 text-foreground">
                <ShieldCheck className="size-5 shrink-0 text-primary" />
                <p className="font-medium">
                  Fully insured, bonded and covered by WorkSafeBC.
                </p>
              </div>
              <Link
                href="/contact#quote"
                className={cn(buttonVariants({ size: "lg" }), "w-fit")}
              >
                Request Quote
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/building.jpg"
                  alt="Modern commercial building maintained by Mint Clean"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 to-transparent p-8">
                <p className="font-heading text-lg font-bold text-white">
                  {site.legalName}
                </p>
                <p className="mt-1 text-sm text-white/75">
                  {site.address.line1}, {site.address.city} {site.address.postal}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatStrip stats={stats} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Sustainability"
              title="Mint Green"
              description="Cultivate a healthy working environment with eco-friendly cleaning practices. We embed green initiatives in our everyday operations — here are just a few ways we are going “Mint Green”."
            />
          </Reveal>
          <div className="mt-14">
            <EcoPracticeGrid items={mintGreenItems} />
          </div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-24 relative isolate overflow-hidden bg-brand-dark py-20 text-white sm:py-28">
        <Image
          src="/images/two-people-standing-on-hallway-near-glass-window-894144-1.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark/80" />
        <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Join The Team
          </span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Careers</h2>
          <p className="text-white/80">
            Our employees are integral to our company&apos;s success. At Mint
            Clean, we emphasize collaborative team work and strive to create
            positive work environments for our staff. As a growing company, we
            are constantly looking for new talent to join our team.
          </p>
          <p className="text-white/80">
            If you are looking for a full-time or part-time position, please
            e-mail us your resume at{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-primary">
              {site.email}
            </a>
            .
          </p>
          <a href={`mailto:${site.email}`} className={cn(buttonVariants({ size: "lg" }), "mt-2")}>
            Email Us
          </a>
        </Reveal>
      </section>

      <QuoteCta />
    </>
  );
}
