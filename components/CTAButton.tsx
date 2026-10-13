import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  arrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const styles = {
  gold: "bg-gold text-ink-deep shadow-[0_10px_30px_-10px_rgba(217,164,65,0.7)] hover:bg-gold-soft active:scale-[0.98]",
  ghost:
    "border border-ink-line text-white hover:border-gold hover:text-gold active:scale-[0.98]",
};

export default function CTAButton({
  href,
  children,
  variant = "gold",
  arrow = true,
  className = "",
}: Props) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
