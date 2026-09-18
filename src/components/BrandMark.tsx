import { GOOGLE_COLORS } from "../data/googlePalette";

interface BrandMarkProps {
  className?: string;
}

export default function BrandMark({
  className = "block h-full w-full",
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <linearGradient
          id="google-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={GOOGLE_COLORS[0]} />
          <stop offset="25%" stopColor={GOOGLE_COLORS[0]} />
          <stop offset="45%" stopColor={GOOGLE_COLORS[3]} />
          <stop offset="65%" stopColor={GOOGLE_COLORS[2]} />
          <stop offset="85%" stopColor={GOOGLE_COLORS[1]} />
          <stop offset="100%" stopColor={GOOGLE_COLORS[0]} />
        </linearGradient>
      </defs>

      <g transform="translate(-5 -5) scale(1.25)">
        <path
          d="M13 25h13.1a4.4 4.4 0 0 0 .7-8.75A7.2 7.2 0 0 0 13 17.8 3.6 3.6 0 0 0 13 25Z"
          fill="none"
          stroke="url(#google-gradient)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 25h8.8"
          stroke="white"
          strokeOpacity="0.7"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
