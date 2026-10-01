import type { Metadata } from "next";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteCta } from "@/components/quote-cta";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { OfficePanel } from "@/components/contact/office-panel";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mint Clean for commercial and residential building maintenance across Greater Vancouver, or reach out about career opportunities.",
};

const contactMethods = [
  {
    icon: MapPin,
    label: "Visit",
    value: `${site.address.line1}, ${site.address.city} ${site.address.postal}`,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Call",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a property that needs a trusted maintenance partner? We'd love to hear from you."
        image="/images/spencer-watson-VLW2GjQHlgE-unsplash-1.jpg"
        imageAlt="Vancouver skyline at dusk"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <Reveal>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Let&apos;s Talk
              </span>
              <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                Three ways to reach Mint Clean
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Whether it&apos;s a question, a quote request, or an
                emergency, our team is ready to help.
              </p>
            </Reveal>

            <StaggerGroup className="mt-10 flex flex-col gap-4">
              {contactMethods.map((method) => {
                const content = (
                  <>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <method.icon className="size-5" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {method.label}
                      </span>
                      <span className="font-medium text-foreground">{method.value}</span>
                    </div>
                    {method.href && (
                      <ArrowRight className="size-4 shrink-0 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    )}
                  </>
                );

                return (
                  <StaggerItem key={method.label}>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                        {content}
                      </div>
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <Reveal delay={0.2}>
              <a href="#quote" className={cn(buttonVariants({ size: "lg" }), "mt-10")}>
                Request A Free Quote
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <OfficePanel />
          </div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-24 bg-muted/40 py-20">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Join The Team
          </span>
          <h2 className="mt-3 font-heading text-2xl font-black text-foreground sm:text-3xl">
            Careers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Valuing our employees is an integral part of the success of our
            company. At Mint Clean, we emphasize collaborative team work and
            strive to create positive work environments for our staff. As a
            growing company, we are constantly looking for new talent to join
            our team.
          </p>
          <p className="mt-2 text-muted-foreground">
            If you are looking for a full time or part time position, please
            e-mail us your resume at{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-primary">
              {site.email}
            </a>
            .
          </p>
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Email Us
          </a>
        </Reveal>
      </section>

      <QuoteCta />
    </>
  );
}
