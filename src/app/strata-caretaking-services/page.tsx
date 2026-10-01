import type { Metadata } from "next";
import { Building2, Handshake, SlidersHorizontal, LayoutGrid, Users, Gauge } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { DifferenceGrid, type DifferenceItem } from "@/components/difference-grid";
import { RelatedServices } from "@/components/related-services";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Residential Strata Caretaking Services",
  description:
    "On-site administrative and caretaking support for residential strata properties across Greater Vancouver, working closely with strata managers and councils.",
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

export default function StrataCaretakingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Strata Residential"
        title="Caretaking Services"
        description="Communication, trust and flexibility are key to the operational success and maintenance of any building. Our caretakers bring a complete on-site solution to a property's cleaning and administrative needs."
        image="/images/high-rise-building-1829191-1.jpg"
        imageAlt="High-rise residential building at dusk"
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center text-muted-foreground sm:px-6 lg:px-8">
          <p>
            Some properties require on-site administrative support in
            addition to janitorial services. Our caretakers become the
            go-to source for janitorial functions, as well as a wide range
            of administrative duties &mdash; handling resident requests,
            bookings, move scheduling, trades coordination and access,
            bylaw infractions, and emergencies.
          </p>
          <p className="mt-4">
            Most importantly, the Mint Clean team understands the
            importance of working closely with and supporting the Strata
            Manager, building supervisors, concierge and other site staff
            to maintain the upkeep and operational success of each
            property. We understand that properties can run much better
            when we all work together.
          </p>
        </div>
      </section>
      <DifferenceGrid items={differenceItems} />
      <RelatedServices
        title="Explore more residential strata services"
        items={[
          {
            title: "Strata Janitorial Services",
            description:
              "Servicing for common property areas.\nCollaboration with your building staff.\nFlexible, customized janitorial solutions.",
            href: "/residential-janitorial-services",
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
