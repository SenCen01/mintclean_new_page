import type { Metadata } from "next";
import {
  Users,
  MapPinned,
  CloudSnow,
  Smile,
  Truck,
  Tag,
  PhoneCall,
  ThumbsUp,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { SnowHero } from "@/components/snow-removal/snow-hero";
import { BeforeAfter } from "@/components/snow-removal/before-after";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Snow Removal",
  description:
    "Reliable, experienced, and insured snow removal and salting contractor serving Vancouver, North Vancouver, Richmond, Burnaby, New Westminster, Coquitlam, Surrey, and Langley.",
};

const highlights = [
  { icon: Users, title: "Experienced professionals" },
  { icon: MapPinned, title: "Crew strategically allocated" },
  { icon: CloudSnow, title: "24/7 Weather monitoring" },
];

const offerItems = [
  {
    icon: Smile,
    title: "Stress-Free Service",
    description: "We handle all snow removal while you stay worry-free indoors.",
  },
  {
    icon: Users,
    title: "Reliable and Friendly Crews",
    description: "Skilled, professional teams prioritize your safety and convenience.",
  },
  {
    icon: Truck,
    title: "Specialized Equipment",
    description: "Fleet of well-maintained snow plows and salting trucks for optimal winter performance.",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description: "Affordable rates that ensure exceptional service for budget-conscious businesses.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Emergency Response",
    description: "Quick and efficient response to unexpected winter emergencies, day or night.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "Committed to quality service, ensuring your property stays safe and accessible.",
  },
  {
    icon: ShieldCheck,
    title: "Liability Reduction",
    description: "Services designed to minimize slip-and-fall incidents and avoid costly lawsuits.",
  },
];

const serviceArea = [
  "Vancouver",
  "North Vancouver",
  "Richmond",
  "Burnaby",
  "New Westminster",
  "Coquitlam",
  "Surrey",
  "Langley",
];

export default function SnowRemovalPage() {
  return (
    <div
      className="contents"
      style={{ cursor: "url('/images/cursors/shovel-cursor.png') 6 6, auto" }}
    >
      <SnowHero />

      <section className="py-20">
        <StaggerGroup className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-6" />
                </div>
                <h2 className="font-heading text-lg font-bold text-foreground">{item.title}</h2>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h3 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
              Local Snow Removal + Salting in Lower Vancouver
            </h3>
          </Reveal>
          <Reveal delay={0.05}>
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
          </Reveal>
          <BeforeAfter />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Offer"
              title="Serving Residential & Commercial Customers"
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {offerItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                We serve the Lower Mainland:
              </span>
              {serviceArea.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {city}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-brand-dark py-20 text-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col justify-center gap-4">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight">
              Request a free quote or talk to us now
            </h2>
            <p className="text-white/70">
              Don&apos;t wait for the forecast to turn. Get your property on
              our winter dispatch list before the next storm hits.
            </p>
            <a
              href={site.phoneHref}
              className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20"
            >
              <Phone className="size-4" />
              {site.phone}
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-card p-6 text-card-foreground sm:p-8">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
