import type { LucideIcon } from "lucide-react";
import { DoorOpen, Dumbbell, Trash2, Trees } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion";

export type AreaCategory = {
  icon: LucideIcon;
  title: string;
  areas: string[];
};

const categories: AreaCategory[] = [
  {
    icon: DoorOpen,
    title: "Entry & Circulation",
    areas: ["Entrances", "Lobbies", "Elevators", "Common Hallways & Corridors", "Stairwells"],
  },
  {
    icon: Dumbbell,
    title: "Amenities & Recreation",
    areas: ["Gym Facilities", "Amenity Rooms (All Types)", "Party Rooms", "Strata-Owned Guest Suites"],
  },
  {
    icon: Trash2,
    title: "Building Services",
    areas: ["Washrooms", "Garbage Rooms", "Parkade Landing Areas", "Common Area Décor"],
  },
  {
    icon: Trees,
    title: "Exterior & Grounds",
    areas: ["Outdoor Amenities & Courtyards", "Property Exterior"],
  },
];

export function AreaCoverage() {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2">
      {categories.map((category) => (
        <StaggerItem
          key={category.title}
          className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <category.icon className="size-5.5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
