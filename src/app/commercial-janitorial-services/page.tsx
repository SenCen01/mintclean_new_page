import type { Metadata } from "next";
import { Shirt, Handshake, SlidersHorizontal, LayoutGrid, Users, Gauge } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { DifferenceGrid, type DifferenceItem } from "@/components/difference-grid";
import { RelatedServices } from "@/components/related-services";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Commercial Janitorial Services",
  description:
    "Professional commercial janitorial services across Greater Vancouver, with 24/7 availability, regular check-ins, and rigorous quality assurance.",
};

const differenceItems: DifferenceItem[] = [
  {
    icon: Shirt,
    title: "Professional Image",
    description:
      "Every Mint Clean team member wears a clearly identifiable company uniform and conveys a positive and professional image of your business and ours.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description:
      "To ensure that the cleanliness of your space exceeds your expectations, we use cutting-edge cleaning techniques and industry leading machinery and chemicals.",
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
      "Mint Clean is equipped to handle a broad range of commercial properties, from auto dealerships to school campuses.",
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

export default function CommercialJanitorialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Janitorial Services"
        description="We offer our clients the best building maintenance solutions for their properties and guarantee we'll go the extra mile."
        image="/images/MintHero_Janitor.jpg"
        imageAlt="Janitor cleaning a modern commercial facility"
      />
      <DifferenceGrid items={differenceItems} />
      <RelatedServices
        title="Explore more commercial services"
        items={[
          {
            title: "Heavy Duty Maintenance",
            description:
              "Long-term maintenance of indoor & outdoor space.\nCarpet cleaning, furniture care, floor maintenance,\npressure washing, lighting maintenance & more.",
            href: "/heavy-duty-maintenance-commercial",
          },
          {
            title: "Residential Services",
            description:
              "Strata janitorial, caretaking, and heavy duty maintenance\nfor residential buildings across the Lower Mainland.",
            href: "/residential-services",
          },
        ]}
      />
      <QuoteCta />
    </>
  );
}
