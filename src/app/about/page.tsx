import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Recycle, Zap, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { QuoteCta } from "@/components/quote-cta";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mint Clean serves commercial and residential strata properties across Greater Vancouver with professionalism, reliability, and attention to detail.",
};

const mintGreenItems = [
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We minimize our footprint by avoiding petroleum based cleaners and choosing Green Seal and Ecologos supplies whenever possible.",
  },
  {
    icon: Recycle,
    title: "Recyclable Materials",
    description:
      "We recycle the majority of our consumables, including 100% biodegradable plastic bags and 100% recyclable plastic bottles.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description:
      "Energy Star equipment means less energy wasted and longer useful life. Staff are also encouraged to use public transit.",
  },
  {
    icon: FileText,
    title: "Paperless Statements",
    description:
      "By using online systems, we offer paperless invoicing, filling, ordering and reporting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Mint Clean Building Maintenance Ltd."
        title="About Us"
        description="Mint Clean serves commercial and residential strata properties across Greater Vancouver."
        image="/images/spencer-watson-VLW2GjQHlgE-unsplash-1.jpg"
        imageAlt="Vancouver skyline at dusk"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-5 text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Reliable building maintenance, done right
            </h2>
            <p>
              Our teams go above and beyond to meet our clients&apos; needs
              and exceed expectations, with professionalism, reliability and
              attention to detail at our core.
            </p>
            <p>
              As a Mint Clean client, you rely on our business to take care of
              yours. With customized packages for the specific needs of each
              site, you don&apos;t need to worry about paying for services you
              don&apos;t need. Give Mint Clean an opportunity to service your
              commercial or strata residential building and do what we do
              best. We&apos;ll go the extra mile, guaranteed.
            </p>
            <p className="font-medium text-foreground">
              Mint Clean is fully insured, bonded and covered by WorkSafeBC.
            </p>
            <Link href="/contact#quote" className={cn(buttonVariants({ size: "lg" }), "w-fit")}>
              Request Quote
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-8">
            <h3 className="text-lg font-semibold text-foreground">
              {site.legalName}
            </h3>
            <dl className="mt-4 flex flex-col gap-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Address</dt>
                <dd className="font-medium text-foreground">
                  {site.address.line1}, {site.address.city} {site.address.postal}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="font-medium text-foreground">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="font-medium text-foreground">{site.email}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sustainability"
            title="Mint Green"
            description="Cultivate a healthy working environment with eco-friendly cleaning practices. We embed green initiatives in our everyday operations &mdash; here are just a few ways we are going &ldquo;Mint Green&rdquo;."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mintGreenItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5.5" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Careers</h2>
          <p className="mt-4 text-muted-foreground">
            Our employees are integral to our company&apos;s success. At Mint
            Clean, we emphasize collaborative team work and strive to create
            positive work environments for our staff. As a growing company, we
            are constantly looking for new talent to join our team.
          </p>
          <p className="mt-2 text-muted-foreground">
            If you are looking for a full-time or part-time position, please
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
