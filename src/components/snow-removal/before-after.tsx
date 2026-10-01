import Image from "next/image";
import { Reveal } from "@/components/motion";

export function BeforeAfter() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      <Reveal>
        <figure className="overflow-hidden rounded-2xl border border-border">
          <div className="relative h-72 w-full">
            <Image
              src="/images/MC-Landing-5.jpg"
              alt="MintClean equipment clearing a large snow pile"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="bg-card px-5 py-4 text-sm font-semibold text-foreground">
            Equipment ready to move serious snow
          </figcaption>
        </figure>
      </Reveal>
      <Reveal delay={0.1}>
        <figure className="overflow-hidden rounded-2xl border border-border">
          <div className="relative h-72 w-full">
            <Image
              src="/images/MC-Landing-4.jpg"
              alt="A fully cleared sidewalk in front of a building after MintClean service"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="bg-card px-5 py-4 text-sm font-semibold text-foreground">
            Clear, safe, accessible &mdash; every time
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
