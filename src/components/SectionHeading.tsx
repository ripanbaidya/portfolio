import { getGoogleColor } from "../data/googlePalette";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  colorfulTitle?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  colorfulTitle = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center sm:text-left">
      <p className="text-sm font-semibold uppercase tracking-widest">
        <span className="text-[#4285F4]">{"<"}</span>
        <span className="text-neutral-400">{eyebrow}</span>
        <span className="text-[#EA4335]">{" />"}</span>
      </p>

      {/* Main heading */}
      <h2 className="mt-3 text-xl font-thin tracking-tight text-white sm:text-4xl">
        {colorfulTitle
          ? Array.from(title).map((character, index) => (
              <span
                key={`${character}-${index}`}
                style={{ color: getGoogleColor(index) }}
              >
                {character}
              </span>
            ))
          : title}
        {/* <span className="text-[#4285F4]">.</span> */}
      </h2>
    </div>
  );
}
