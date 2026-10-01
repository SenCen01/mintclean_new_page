import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceHubCard } from "@/components/service-hub-card";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Residential Services",
  description:
    "Janitorial, caretaking, and heavy duty maintenance services for residential strata properties across Greater Vancouver.",
};

const services = [
  {
    title: "Residential Strata Janitorial Services",
    description:
      "Cleaning for common areas of strata properties, from entrances and lobbies to stairwells and amenity rooms.",
    href: "/residential-janitorial-services",
    image: "/images/sean-benesh-Dxre07jUe3c-unsplash.jpg",
    imageAlt: "Residential strata building exterior",
  },
  {
    title: "Residential Strata Caretaking",
    description:
      "On-site administrative support and central oversight for janitorial functions, supporting your strata manager, council, and building staff.",
    href: "/strata-caretaking-services",
    image: "/images/high-rise-building-1829191-1.jpg",
    imageAlt: "High-rise residential building at dusk",
  },
  {
    title: "Residential Strata Heavy Duty Maintenance",
    description:
      "Carpet cleaning, floor maintenance, pressure washing, and more to keep strata buildings in top shape long-term.",
    href: "/heavy-duty-maintenance-residential",
    image: "/images/brown-wooden-floor-48889-1-1.jpg",
    imageAlt: "Mop cleaning a hardwood floor",
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
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <ServiceHubCard key={service.href} {...service} />
          ))}
        </div>
      </section>
      <QuoteCta />
    </>
  );
}
