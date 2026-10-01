import { FileSearch, ClipboardCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Request a Free Quote",
    description:
      "Tell us about your property and what you need — commercial or residential, we'll take it from there.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "We Build a Custom Plan",
    description:
      "No cookie-cutter packages. We scope a maintenance plan sized to your property, so you only pay for what you need.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "We Go the Extra Mile",
    description:
      "Uniformed, professional teams, 24/7 availability, and rigorous quality assurance on every visit — guaranteed.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Getting started is simple" />
        <StaggerGroup className="relative mt-16 grid gap-10 sm:grid-cols-3">
          <div
            aria-hidden
            className="absolute top-11 right-0 left-0 hidden h-px bg-border sm:block"
          />
          {steps.map((item) => (
            <StaggerItem key={item.step} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex size-22 items-center justify-center rounded-full border border-border bg-background">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="size-6" />
                </div>
              </div>
              <span className="mt-5 text-xs font-bold tracking-widest text-primary">
                STEP {item.step}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{item.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
