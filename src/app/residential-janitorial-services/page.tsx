import type { Metadata } from "next";
import {
  Building2,
  Handshake,
  SlidersHorizontal,
  LayoutGrid,
  Users,
  Gauge,
  DoorOpen,
  Armchair,
  ArrowUpDown,
  Footprints,
  Droplets,
  Dumbbell,
  Home as HomeIcon,
  BedDouble,
  PartyPopper,
  Flower2,
  Trash2,
  CarFront,
  Trees,
  Building,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { DifferenceGrid, type DifferenceItem } from "@/components/difference-grid";
import { SectionHeading } from "@/components/section-heading";
import { RelatedServices } from "@/components/related-services";
import { QuoteCta } from "@/components/quote-cta";

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

const areas = [
  { icon: DoorOpen, label: "Entrances" },
  { icon: Armchair, label: "Lobbies" },
  { icon: ArrowUpDown, label: "Elevators" },
  { icon: Building, label: "Common Hallways & Corridors" },
  { icon: Droplets, label: "Washrooms" },
  { icon: Footprints, label: "Stairwells" },
  { icon: Dumbbell, label: "Gym Facilities" },
  { icon: HomeIcon, label: "Amenity Rooms (All Types)" },
  { icon: BedDouble, label: "Strata-Owned Guest Suites" },
  { icon: PartyPopper, label: "Party Rooms" },
  { icon: Flower2, label: "Common Area Décor" },
  { icon: Trash2, label: "Garbage Rooms" },
  { icon: CarFront, label: "Parkade Landing Areas" },
  { icon: Trees, label: "Outdoor Amenities & Courtyards" },
  { icon: Building2, label: "Property Exterior" },
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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coverage" title="Areas We Service" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {areas.map((area) => (
              <div
                key={area.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center"
              >
                <area.icon className="size-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{area.label}</span>
              </div>
            ))}
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
