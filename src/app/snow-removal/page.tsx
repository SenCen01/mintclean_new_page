import type { Metadata } from "next";
import { Users, MapPinned, CloudSnow, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Snow Removal",
  description:
    "Reliable, experienced, and insured snow removal and salting contractor serving Vancouver, North Vancouver, Richmond, Burnaby, New Westminster, Coquitlam, Surrey, and Langley.",
};

const stats = [
  { icon: Users, title: "Experienced professionals" },
  { icon: MapPinned, title: "Crew strategically allocated" },
  { icon: CloudSnow, title: "24/7 Weather monitoring" },
];

const offerItems = [
  {
    title: "Stress-Free Service",
    description: "We handle all snow removal while you stay worry-free indoors.",
  },
  {
    title: "Reliable and Friendly Crews",
    description: "Skilled, professional teams prioritize your safety and convenience.",
  },
  {
    title: "Specialized Equipment",
    description: "Fleet of well-maintained snow plows and salting trucks for optimal winter performance.",
  },
  {
    title: "Competitive Pricing",
    description: "Affordable rates that ensure exceptional service for budget-conscious businesses.",
  },
  {
    title: "24/7 Emergency Response",
    description: "Quick and efficient response to unexpected winter emergencies, day or night.",
  },
  {
    title: "Customer Satisfaction",
    description: "Committed to quality service, ensuring your property stays safe and accessible.",
  },
  {
    title: "Liability Reduction",
    description: "Services designed to minimize slip-and-fall incidents and avoid costly lawsuits.",
  },
];

export default function SnowRemovalPage() {
  return (
    <>
      <PageHero
        eyebrow="Winter Services"
        title="Snow Removal & Salting"
        description="Reliable, experienced, and insured contractor."
        image="/images/MC-Landing-BG-1.jpg"
        imageAlt="Snow removal crew clearing a snowy pathway"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <stat.icon className="size-6" />
              </div>
              <h2 className="font-heading text-lg font-bold text-foreground">{stat.title}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            Local Snow Removal + Salting in Lower Vancouver
          </h3>
          <div className="mt-6 flex flex-col gap-4 text-muted-foreground">
            <p>
              We are your trusted partner for professional snow removal
              services in the Vancouver area. Winter weather in Vancouver can
              be unpredictable, but your operations don&apos;t have to be. At
              MintClean, we offer comprehensive snow clearing and salting
              services to ensure your parking lots, sidewalks, and driveways
              remain safe and accessible, no matter how harsh the conditions.
            </p>
            <p>
              Our dedicated team stays ahead of the storm by closely
              monitoring incoming weather patterns. We are always prepared
              for snowfalls, fluctuating temperatures, and ice formation,
              ensuring a fast and efficient response. With warm, vibrant
              uniforms and well-equipped vehicles, our staff is ready to
              tackle the cold and keep your property clear, close to you.
            </p>
            <p>
              No matter the size of the job, MintClean delivers superior
              results every time. We&apos;re here for you day or night,
              whenever you need us most. Contact us today for all your snow
              removal needs!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Offer"
            title="Serving Residential & Commercial Customers"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {offerItems.map((item) => (
              <div key={item.title} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
            We serve Lower Mainland: Vancouver, North Vancouver, Richmond,
            Burnaby, New Westminster, Coquitlam, Surrey, Langley
          </p>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-muted/40 py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
              Request a free quote or talk to us in our chat
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
