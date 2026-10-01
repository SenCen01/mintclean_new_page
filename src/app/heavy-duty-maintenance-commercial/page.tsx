import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { HeavyDutyShowcase, type HeavyDutyService } from "@/components/commercial/heavy-duty-showcase";
import { RelatedServices } from "@/components/related-services";
import { QuoteCta } from "@/components/quote-cta";
import { Reveal } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Heavy Duty Maintenance (Commercial)",
  description:
    "Carpet cleaning, floor maintenance, pressure washing, and more essential heavy duty maintenance services for commercial facilities.",
};

const services: HeavyDutyService[] = [
  {
    image: "/images/frank-lloyd-de-la-cruz-J0c5jko_Yww-unsplash.jpg",
    alt: "Floor Waxing Vancouver",
    title: "Floor Maintenance",
    description: "Buffing, striping, scrubbing and waxing",
    featured: true,
  },
  { image: "/images/rhea-lofranco-fcfQB4bbsIk-unsplash.jpg", alt: "Carpet Cleaning", title: "Carpet Cleaning" },
  { image: "/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg", alt: "Furniture Upholstery", title: "Furniture Upholstery" },
  { image: "/images/lala-v-vIdRMp8IpO0-unsplash.jpg", alt: "Marble & Natural Stone Care Vancouver", title: "Marble & Natural Stone Care" },
  {
    image: "/images/abstract-blur-bubble-clean-612341.jpg",
    alt: "Pressure Washing Vancouver",
    title: "Pressure Washing",
    description: "Exterior surfaces, walkways, and more",
    featured: true,
  },
  { image: "/images/tony-yakovlenko-DgGaL3-n1nA-unsplash.jpg", alt: "Lighting Maintenance Vancouver", title: "Lighting Maintenance" },
  { image: "/images/troy-t-khk_w42dfS4-unsplash.jpg", alt: "Snow Removal Vancouver", title: "Snow Removal" },
  { image: "/images/ann-kathrin-bopp-7zaanYdzRnc-unsplash.jpg", alt: "Junk Removal Vancouver", title: "Junk Removal" },
];

export default function HeavyDutyMaintenanceCommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Heavy Duty Maintenance Services"
        description="Mint Clean provides an array of services essential for the preservation and upkeep of your facilities. The right services, performed professionally, make a big difference in the long-term maintenance of your property."
        image="/images/brown-wooden-floor-48889-1.jpg"
        imageAlt="Mop cleaning a hardwood floor"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Mint Clean's Heavy Duty Maintenance Services" />
          </Reveal>
          <div className="mt-14">
            <HeavyDutyShowcase items={services} />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-primary/5 px-6 py-10 text-center sm:px-10">
            <ShieldCheck className="size-8 text-primary" />
            <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
              Already working with us?
            </p>
            <p className="max-w-xl text-muted-foreground">
              Feel free to ask us about our special services. We guarantee
              competitive pricing and immediate savings on any additional
              work granted.
            </p>
            <Link href="/contact#quote" className={cn(buttonVariants({ size: "lg" }), "mt-2")}>
              Request Quote
            </Link>
          </div>
        </Reveal>
      </section>

      <RelatedServices
        title="Explore more commercial services"
        items={[
          {
            title: "Janitorial Services",
            description: "Collaboration with your existing team.\n24/7 availability, regular check-ins, quality assurance.",
            href: "/commercial-janitorial-services",
          },
        ]}
      />
      <QuoteCta />
    </>
  );
}
