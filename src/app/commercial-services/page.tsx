import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceHubCard } from "@/components/service-hub-card";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Commercial Services",
  description:
    "Janitorial and heavy duty maintenance services for commercial properties across Greater Vancouver.",
};

const services = [
  {
    title: "Commercial Janitorial Services",
    description:
      "Daily and scheduled cleaning solutions customized to your commercial property, delivered with 24/7 availability and rigorous quality assurance.",
    href: "/commercial-janitorial-services",
    image: "/images/MintHero_Janitor.jpg",
    imageAlt: "Janitor cleaning a commercial facility",
  },
  {
    title: "Heavy Duty Maintenance",
    description:
      "Carpet cleaning, floor maintenance, pressure washing, and more to keep your facility in top shape long-term.",
    href: "/heavy-duty-maintenance-commercial",
    image: "/images/brown-wooden-floor-48889-1.jpg",
    imageAlt: "Mop cleaning a hardwood floor",
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
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {services.map((service) => (
            <ServiceHubCard key={service.href} {...service} />
          ))}
        </div>
      </section>
      <QuoteCta />
    </>
  );
}
