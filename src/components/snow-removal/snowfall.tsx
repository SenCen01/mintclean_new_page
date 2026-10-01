import type { CSSProperties } from "react";

const FLAKES = Array.from({ length: 28 }, (_, i) => {
  // deterministic pseudo-random spread so server/client markup matches
  const left = (i * 37) % 100;
  const size = 3 + ((i * 13) % 5);
  const duration = 9 + ((i * 7) % 10);
  const delay = -((i * 3) % duration);
  const drift = (i % 2 === 0 ? 1 : -1) * (10 + (i % 15));
  return { left, size, duration, delay, drift };
});

export function Snowfall() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {FLAKES.map((flake, i) => (
        <span
          key={i}
          className="snowflake absolute top-[-10%] rounded-full bg-white/70"
          style={
            {
              left: `${flake.left}%`,
              width: flake.size,
              height: flake.size,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              "--drift": `${flake.drift}px`,
            } as CSSProperties
          }
        />
      ))}
      <style>{`
        @keyframes snow-fall {
          from { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          to { transform: translateY(120vh) translateX(var(--drift)); opacity: 0; }
        }
        .snowflake {
          animation-name: snow-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
