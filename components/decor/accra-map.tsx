import { cn } from "@/lib/utils";

/**
 * Stylised, decorative map of Accra: a coastline, the Odaw river and a
 * scatter of streets with a pulsing pin. Hidden from assistive technology.
 */
export function AccraMap({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative aspect-square", className)}>
      <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
        <defs>
          <clipPath id="map-clip">
            <rect width="400" height="400" rx="40" />
          </clipPath>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3d3b85" />
            <stop offset="1" stopColor="#24234f" />
          </linearGradient>
        </defs>
        <g clipPath="url(#map-clip)">
          <rect width="400" height="400" fill="#fff7ec" fillOpacity="0.06" />
          {/* Gulf of Guinea */}
          <path
            d="M0 300 C60 285 90 310 140 300 S230 270 280 285 S360 300 400 280 V400 H0Z"
            fill="url(#sea)"
          />
          <path
            d="M0 300 C60 285 90 310 140 300 S230 270 280 285 S360 300 400 280"
            stroke="#ffb020"
            strokeOpacity="0.55"
            strokeWidth="2"
          />
          {/* Odaw river */}
          <path
            d="M120 0 C130 60 100 110 125 160 S150 250 140 300"
            stroke="#8fb7ff"
            strokeOpacity="0.35"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Ring road + arterials */}
          <ellipse
            cx="215"
            cy="175"
            rx="120"
            ry="85"
            stroke="#fff7ec"
            strokeOpacity="0.25"
            strokeWidth="5"
          />
          <g stroke="#fff7ec" strokeOpacity="0.16" strokeWidth="3" strokeLinecap="round">
            <path d="M215 0 V290" />
            <path d="M0 140 C120 150 300 120 400 160" />
            <path d="M40 40 L330 270" />
            <path d="M380 30 L90 280" />
            <path d="M0 220 C100 215 280 225 400 205" />
          </g>
          <g stroke="#fff7ec" strokeOpacity="0.08" strokeWidth="1.5">
            {Array.from({ length: 9 }, (_, i) => (
              <path key={`h${i}`} d={`M0 ${30 + i * 30} H400`} />
            ))}
            {Array.from({ length: 13 }, (_, i) => (
              <path key={`v${i}`} d={`M${i * 32} 0 V300`} />
            ))}
          </g>
          {/* Delivery route */}
          <path
            d="M70 90 C120 120 150 90 190 130 S240 170 222 196"
            stroke="#ffb020"
            strokeWidth="4"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <circle cx="70" cy="90" r="7" fill="#ffb020" />
        </g>
      </svg>

      {/* Pin */}
      <div className="absolute top-[49%] left-[55.5%] -translate-x-1/2 -translate-y-full">
        <span className="absolute bottom-0 left-1/2 size-16 -translate-x-1/2 translate-y-1/2 animate-ping rounded-full bg-jollof/40 [animation-duration:2.4s]" />
        <svg
          viewBox="0 0 48 60"
          className="relative w-12 drop-shadow-[0_10px_14px_rgba(0,0,0,0.35)]"
        >
          <path
            d="M24 0C10.7 0 0 10.4 0 23.3 0 40.8 24 60 24 60s24-19.2 24-36.7C48 10.4 37.3 0 24 0Z"
            fill="#e8462b"
          />
          <circle cx="24" cy="23" r="9" fill="#fff7ec" />
        </svg>
      </div>
      <span className="absolute right-[6%] bottom-[9%] rounded-full bg-cream px-4 py-2 font-display text-sm font-bold text-ink shadow-soft">
        Accra
      </span>
    </div>
  );
}
