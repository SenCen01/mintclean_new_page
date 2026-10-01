import type { Metadata } from "next";
import { ShieldCheck, Clock, Building2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceRail, type RailService } from "@/components/residential/service-rail";
import { QuoteCta } from "@/components/quote-cta";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Residential Services",
  description:
    "Janitorial, caretaking, and heavy duty maintenance services for residential strata properties across Greater Vancouver.",
};

const badges = [
  { icon: Building2, label: "10,000+ Strata Units Serviced" },
  { icon: ShieldCheck, label: "Fully Insured & Bonded" },
  { icon: Clock, label: "24/7 Availability" },
];

const services: RailService[] = [
  {
    title: "Residential Strata Janitorial Services",
    description:
      "Cleaning for common areas of strata properties, from entrances and lobbies to stairwells and amenity rooms.",
    href: "/residential-janitorial-services",
    image: "/images/sean-benesh-Dxre07jUe3c-unsplash.jpg",
    imageAlt: "Residential strata building exterior",
    points: [
      "Flexible, customized janitorial solutions",
      "Collaboration with your building staff",
      "Servicing for every common property area",
    ],
  },
  {
    title: "Residential Strata Caretaking",
    description:
      "On-site administrative support and central oversight for janitorial functions, supporting your strata manager, council, and building staff.",
    href: "/strata-caretaking-services",
    image: "/images/high-rise-building-1829191-1.jpg",
    imageAlt: "High-rise residential building at dusk",
    points: [
      "On-site administrative support",
      "Central oversight for janitorial functions",
      "Trusted support for council & building staff",
    ],
  },
  {
    title: "Residential Strata Heavy Duty Maintenance",
    description:
      "Carpet cleaning, floor maintenance, pressure washing, and more to keep strata buildings in top shape long-term.",
    href: "/heavy-duty-maintenance-residential",
    image: "/images/brown-wooden-floor-48889-1-1.jpg",
    imageAlt: "Mop cleaning a hardwood floor",
    points: [
      "Carpet, floor, and marble & stone care",
      "Pressure washing and lighting maintenance",
      "Competitive pricing on additional work",
    ],
  },
];

export default function ResidentialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential Strata"
        title="Residential Services"
        description="Building maintenance solutions for strata properties across the Lower Mainland, from medium-size buildings to high density developments."
        image="/images/high-rise-building-1829191-2.jpg"
        imageAlt="Residential strata building at night"
      />

      <section className="border-b border-border py-10">
        <StaggerGroup className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
          {badges.map((badge) => (
            <StaggerItem key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <badge.icon className="size-4 text-primary" />
              {badge.label}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Three ways we keep your building running smoothly"
              description="Whichever your property needs, Mint Clean brings the same professionalism, reliability, and attention to detail."
            />
          </Reveal>
        </div>
        <div className="mt-16">
          <ServiceRail services={services} />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
