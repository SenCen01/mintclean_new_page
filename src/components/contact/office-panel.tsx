import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export function OfficePanel() {
  return (
    <Reveal delay={0.1}>
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/5] w-full sm:aspect-square lg:aspect-[4/5]">
          <Image
            src="/images/building.jpg"
            alt="Modern commercial building maintained by Mint Clean"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-8 text-white">
          <p className="font-heading text-xl font-bold">{site.legalName}</p>
          <div className="flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {site.address.line1}, {site.address.city} {site.address.postal}
          </div>
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-white/80 hover:text-primary">
            <Phone className="size-4 shrink-0" />
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-primary">
            <Mail className="size-4 shrink-0" />
            {site.email}
          </a>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Clock className="size-4 shrink-0" />
            24/7 availability for emergencies
          </div>
        </div>
      </div>
    </Reveal>
  );
}
