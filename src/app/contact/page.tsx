import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteCta } from "@/components/quote-cta";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mint Clean for commercial and residential building maintenance across Greater Vancouver, or reach out about career opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        image="/images/spencer-watson-VLW2GjQHlgE-unsplash-1.jpg"
        imageAlt="Vancouver skyline at dusk"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 sm:grid-cols-3 lg:px-8">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center">
            <MapPin className="size-6 text-primary" />
            <h3 className="font-semibold text-foreground">{site.legalName}</h3>
            <p className="text-sm text-muted-foreground">
              {site.address.line1}
              <br />
              {site.address.city} {site.address.postal}
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40"
          >
            <Phone className="size-6 text-primary" />
            <h3 className="font-semibold text-foreground">Phone</h3>
            <p className="text-sm text-muted-foreground">{site.phone}</p>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40"
          >
            <Mail className="size-6 text-primary" />
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">{site.email}</p>
          </a>
        </div>
      </section>

      <section id="careers" className="scroll-mt-24 bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Careers</h2>
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
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
