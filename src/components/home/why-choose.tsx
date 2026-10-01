import Image from "next/image";
import { ShieldCheck, Clock, SlidersHorizontal, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    description: "Covered by WorkSafeBC on every job, every property, every time.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Regular check-ins and rigorous quality assurance, day or night.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Packages",
    description: "You only pay for the services your property actually needs.",
  },
  {
    icon: Leaf,
    title: "Mint Green Practices",
    description: "Eco-friendly products, recyclable materials, paperless billing.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl sm:h-[480px]">
              <Image
                src="/images/two-people-standing-on-hallway-near-glass-window-894144-1.jpg"
                alt="Pristine, well-maintained building interior"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Mint Clean"
              title="We treat your property like it's ours"
              description="Give us an opportunity to service your commercial or strata residential building and do what we do best — we'll go the extra mile, guaranteed."
            />
            <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <StaggerItem
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5.5" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
