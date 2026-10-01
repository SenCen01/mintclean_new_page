import Image from "next/image";
import { cn } from "@/lib/utils";

export type ClientType = {
  title: string;
  image?: string;
};

function MarqueeRow({
  items,
  reverse,
}: {
  items: ClientType[];
  reverse?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className="marquee-row overflow-hidden">
      <div
        className={cn(
          "marquee-track flex w-max gap-5",
          reverse && "marquee-track-reverse"
        )}
      >
        {track.map((client, i) => (
          <div
            key={`${client.title}-${i}`}
            className="group relative flex h-44 w-72 shrink-0 items-end overflow-hidden rounded-2xl sm:w-80"
          >
            {client.image ? (
              <>
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  sizes="320px"
                  className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="relative p-4 text-sm font-semibold text-white">
                  {client.title}
                </span>
              </>
            ) : (
              <div className="flex size-full items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-center text-sm font-semibold text-primary">
                {client.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientMarquee({
  rowOne,
  rowTwo,
}: {
  rowOne: ClientType[];
  rowTwo: ClientType[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <MarqueeRow items={rowOne} reverse />
      <MarqueeRow items={rowTwo} />
    </div>
  );
}
