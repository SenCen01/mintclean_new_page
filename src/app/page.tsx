import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { TrustPillars } from "@/components/trust-pillars";
import { SectionHeading } from "@/components/section-heading";
import { QuoteCta } from "@/components/quote-cta";
import { cn } from "@/lib/utils";

const clientTypes = [
  {
    title: "Residential Strata Properties",
    image: "/images/i08_sune-de-bruyn-aXmJ2snA31U-unsplash.jpg",
  },
  {
    title: "Office Towers",
    image: "/images/i01_austin-distel-wawEfYdpkag-unsplash-1.jpg",
  },
  {
    title: "Auto Dealerships",
    image: "/images/i03_erik-mclean-bCJqNVaKL7k-unsplash.jpg",
  },
  {
    title: "Schools & Educational Institutions",
    image: "/images/i02_changbok-ko-F8t2VGnI47I-unsplash.jpg",
  },
  {
    title: "Shopping Centres & Strip Malls",
    image: "/images/i06_marcin-kempa-3sLosN6dPoQ-unsplash.jpg",
  },
  {
    title: "Retail Mixed Use",
    image: "/images/i01_alexander-kovacs-GMGdhtYeROY-unsplash.jpg",
  },
  {
    title: "Gymnasiums",
    image: "/images/i04_humphrey-muleba-LOA2mTj1vhc-unsplash.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-brand-dark text-white">
        <Image
          src="/images/MintHero.jpg"
          alt="Bright, well-maintained office space"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/30" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Taking care of your spaces so you can focus on the main things
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Commercial and residential strata building maintenance across
            Greater Vancouver, with professionalism, reliability, and
            attention to detail at our core.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/commercial-services" className={cn(buttonVariants({ size: "lg" }))}>
              Commercial
            </Link>
            <Link
              href="/residential-services"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              Residential
            </Link>
          </div>
          <TrustPillars className="mt-4 text-white/90 [&_svg]:text-primary" />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Who We Serve" title="Our Clients" />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {clientTypes.map((client) => (
              <div
                key={client.title}
                className="group relative flex h-44 items-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="relative p-4 text-sm font-semibold text-white">
                  {client.title}
                </span>
              </div>
            ))}
            <div className="flex h-44 items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-center text-sm font-semibold text-primary">
              &hellip;and many more
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
