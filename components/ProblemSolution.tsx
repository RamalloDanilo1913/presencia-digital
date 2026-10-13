import { MapPin, MessageCircle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { pillars, problem, solution } from "@/lib/content";

const icons: Record<(typeof pillars)[number]["key"], LucideIcon> = {
  posicionamiento: MapPin,
  conversion: MessageCircle,
  reputacion: Star,
};

export default function ProblemSolution() {
  return (
    <section className="bg-ink-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid items-center gap-8 rounded-2xl border border-ink-line bg-ink-card p-7 sm:p-10 md:grid-cols-[auto_1fr] md:gap-12">
            <p className="text-7xl font-extrabold leading-none tracking-tight text-gold sm:text-8xl">
              {problem.stat}
            </p>
            <div>
              <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl">{problem.question}</h2>
              <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{problem.body}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 sm:mt-28">
          <Reveal>
            <SectionHeading eyebrow="La solución" title={solution.title} text={solution.body} />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = icons[p.key];
              return (
                <Reveal key={p.key} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-ink-line bg-ink-card p-7">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-line/70">
                      <Icon aria-hidden className="h-7 w-7 text-gold" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-mist">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
