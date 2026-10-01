import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ImageFeatureGrid } from "@/components/image-feature-grid";
import { RelatedServices } from "@/components/related-services";
import { QuoteCta } from "@/components/quote-cta";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Heavy Duty Maintenance (Commercial)",
  description:
    "Carpet cleaning, floor maintenance, pressure washing, and more essential heavy duty maintenance services for commercial facilities.",
};

const services = [
  { image: "/images/rhea-lofranco-fcfQB4bbsIk-unsplash.jpg", alt: "Carpet Cleaning", title: "Carpet Cleaning" },
  { image: "/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg", alt: "Furniture Upholstery", title: "Furniture Upholstery" },
  {
    image: "/images/frank-lloyd-de-la-cruz-J0c5jko_Yww-unsplash.jpg",
    alt: "Floor Waxing Vancouver",
    title: "Floor Maintenance",
    description: "Buffing, striping, scrubbing and waxing",
  },
  { image: "/images/lala-v-vIdRMp8IpO0-unsplash.jpg", alt: "Marble & Natural Stone Care Vancouver", title: "Marble & Natural Stone Care" },
  { image: "/images/abstract-blur-bubble-clean-612341.jpg", alt: "Pressure Washing Vancouver", title: "Pressure Washing" },
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
      <ImageFeatureGrid title="Mint Clean's Heavy Duty Maintenance Services" items={services} />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-muted/40 px-6 py-8 text-center sm:px-6 lg:px-8">
          <p className="font-medium text-foreground">
            If we are already working together, feel free to ask us about our special services.
          </p>
          <p className="mt-2 text-muted-foreground">
            We guarantee competitive pricing and immediate savings on any additional work granted.
          </p>
          <Link href="/contact#quote" className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
            Request Quote
          </Link>
        </div>
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
