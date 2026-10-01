import Image from "next/image";
import {
  MessageSquare,
  CalendarClock,
  KeyRound,
  ShieldAlert,
  Siren,
  Users,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const duties = [
  {
    icon: MessageSquare,
    title: "Resident Requests",
    description: "A responsive, on-site point of contact for day-to-day resident needs.",
  },
  {
    icon: CalendarClock,
    title: "Bookings & Move Scheduling",
    description: "Coordinating amenity bookings and move-in / move-out scheduling.",
  },
  {
    icon: KeyRound,
    title: "Trades Coordination & Access",
    description: "Managing trades access and coordination for repairs and service calls.",
  },
  {
    icon: ShieldAlert,
    title: "Bylaw Infractions",
    description: "Monitoring and reporting bylaw infractions across common property.",
  },
  {
    icon: Siren,
    title: "Emergencies",
    description: "On-site response to building emergencies as they arise.",
  },
  {
    icon: Users,
    title: "Strata Manager & Council Support",
    description: "Working closely with your Strata Manager, council, and building staff.",
  },
];

export function CaretakingDuties({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <Reveal y={32} className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative h-80 w-full overflow-hidden rounded-3xl lg:h-[32rem]">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
        </div>
      </Reveal>
      <StaggerGroup className="flex flex-col gap-5">
        {duties.map((duty) => (
          <StaggerItem
            key={duty.title}
            className="flex gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <duty.icon className="size-5.5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">{duty.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{duty.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
