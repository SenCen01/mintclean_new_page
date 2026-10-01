import Image from "next/image";
import { TrustPillars } from "@/components/trust-pillars";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-white sm:py-28">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-white/80">{description}</p>
        )}
        <TrustPillars className="mt-2 text-white/90 [&_svg]:text-primary" />
      </div>
    </section>
  );
}
