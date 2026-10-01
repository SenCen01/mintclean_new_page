import type { Metadata } from "next";
import {
  Building2,
  Handshake,
  SlidersHorizontal,
  LayoutGrid,
  Users,
  Gauge,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { DifferenceGrid, type DifferenceItem } from "@/components/difference-grid";
import { SectionHeading } from "@/components/section-heading";
import { AreaCoverage } from "@/components/residential/area-coverage";
import { RelatedServices } from "@/components/related-services";
import { QuoteCta } from "@/components/quote-cta";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Residential Strata Janitorial Services",
  description:
    "Janitorial services for residential strata common areas across Greater Vancouver, trusted by strata councils and management companies for over a decade.",
};

const differenceItems: DifferenceItem[] = [
  {
    icon: Building2,
    title: "Experienced with Stratas",
    description:
      "Having worked with many strata councils and strata management companies over the past decade, we understand your priorities and needs.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description:
      "The Mint Clean team is responsible for servicing common areas and limited common property for 10,000+ strata residential units in the Lower Mainland.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Services",
    description:
      "We work closely with you to provide service solutions that fit the specific needs of you and your property, with the goal of bringing you the most value.",
  },
  {
    icon: LayoutGrid,
    title: "Versatility",
    description:
      "Mint Clean is equipped to handle a broad range of residential strata properties, from medium-size properties to high density developments.",
  },
  {
    icon: Users,
    title: "Part of Your Team",
    description:
      "Each Mint Clean employee is trained to work collaboratively with the rest of your building staff as one unit, becoming an extension of your existing team.",
  },
  {
    icon: Gauge,
    title: "Going the Extra Mile",
    description:
      "As your trusted partner, Mint Clean is committed to delivering the best service, with 24/7 availability, regular check-ins, and rigorous quality assurance.",
  },
];

export default function ResidentialJanitorialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Strata Residential"
        title="Janitorial Services"
        description="We offer our clients the best building maintenance solutions for their properties and guarantee we'll go the extra mile."
        image="/images/sean-benesh-Dxre07jUe3c-unsplash.jpg"
        imageAlt="Residential strata building exterior"
      />
      <DifferenceGrid items={differenceItems} />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Coverage"
              title="Areas We Service"
              description="From the moment someone steps through the front door to the parkade and courtyard beyond, every common area is covered."
            />
          </Reveal>
          <div className="mt-14">
            <AreaCoverage />
          </div>
        </div>
      </section>
      <RelatedServices
        title="Explore more residential strata services"
        items={[
          {
            title: "Strata Caretaking",
            description:
              "On-site administrative support.\nCentral oversight for janitorial functions.\nSupport of strata manager, council & building staff.",
            href: "/strata-caretaking-services",
          },
          {
            title: "Heavy Duty Maintenance",
            description:
              "Long-term maintenance of indoor & outdoor space.\nCarpet cleaning, furniture care, floor maintenance,\npressure washing, lighting maintenance & more.",
            href: "/heavy-duty-maintenance-residential",
          },
        ]}
      />
      <QuoteCta />
    </>
  );
}
