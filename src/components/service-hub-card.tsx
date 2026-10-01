import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ServiceHubCard({
  title,
  description,
  href,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{description}</p>
        <span className="flex items-center gap-1 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
