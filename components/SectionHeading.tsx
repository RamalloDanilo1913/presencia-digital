import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, text, align = "left" }: Props) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{text}</p>}
    </div>
  );
}
