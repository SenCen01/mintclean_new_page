import type { Metadata } from "next";
import { ShieldCheck, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceShowcase, type ShowcaseService } from "@/components/commercial/service-showcase";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Commercial Services",
  description:
    "Janitorial and heavy duty maintenance services for commercial properties across Greater Vancouver.",
};

const badges = [
  { icon: ShieldCheck, label: "Fully Insured & Bonded" },
  { icon: Clock, label: "24/7 Availability" },
  { icon: MapPin, label: "Serving Greater Vancouver" },
];

const services: ShowcaseService[] = [
  {
    index: "01",
    title: "Commercial Janitorial Services",
    description:
      "Daily and scheduled cleaning solutions customized to your commercial property, delivered with rigorous quality assurance and a team that works as an extension of yours.",
    href: "/commercial-janitorial-services",
    image: "/images/MintHero_Janitor.jpg",
    imageAlt: "Janitor cleaning a commercial facility",
    highlights: [
      "Customized cleaning plans for your property",
      "Uniformed, professional on-site teams",
      "Regular check-ins and quality assurance",
    ],
  },
  {
    index: "02",
    title: "Heavy Duty Maintenance",
    description:
      "Carpet cleaning, floor maintenance, pressure washing, and more to keep your facility in top shape long-term — with competitive pricing on any additional work.",
    href: "/heavy-duty-maintenance-commercial",
    image: "/images/brown-wooden-floor-48889-1.jpg",
    imageAlt: "Mop cleaning a hardwood floor",
    highlights: [
      "Carpet, floor, and marble & stone care",
      "Pressure washing and lighting maintenance",
      "Snow removal and junk removal on request",
    ],
  },
];

export default function CommercialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Commercial Services"
        description="Building maintenance solutions for offices, retail, auto dealerships, schools, and more across the Lower Mainland."
        image="/images/MintHero_Janitor.jpg"
        imageAlt="Janitor cleaning a modern commercial facility"
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
              title="Two ways we take the work off your plate"
              description="Whichever your property needs, Mint Clean brings the same professionalism, reliability, and attention to detail."
            />
          </Reveal>
          <div className="mt-16">
            <ServiceShowcase services={services} />
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
