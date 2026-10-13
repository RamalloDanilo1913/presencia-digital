"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { formatARS, monthly, tiers } from "@/lib/content";

export default function MonthlyServices() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className="scroll-mt-16 bg-ink-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Crecimiento mensual"
            title={monthly.title}
            text={monthly.intro}
          />
          <p className="mt-5 inline-block rounded-full border border-gold/50 px-4 py-1.5 text-sm font-semibold text-gold">
            {monthly.note}
          </p>
        </Reveal>

        <div className="mt-10 space-y-3.5">
          {tiers.map((tier, i) => {
            const isOpen = open === tier.level;
            const panelId = `tier-panel-${tier.level}`;
            const buttonId = `tier-button-${tier.level}`;

            return (
              <Reveal key={tier.level} delay={i * 0.06}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-ink-card transition-colors ${
                    tier.highlight ? "border-gold/70" : "border-ink-line"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : tier.level)}
                      className="flex min-h-[72px] w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold sm:px-7"
                    >
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                          Nivel {tier.level}
                        </span>
                        <span className="mt-0.5 block text-lg font-extrabold text-white sm:text-xl">
                          {tier.name}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        <span className="text-right">
                          <span className="block text-xl font-extrabold text-gold sm:text-2xl">
                            {formatARS(tier.price)}
                          </span>
                          <span className="block text-xs text-slate2">por mes</span>
                        </span>
                        <ChevronDown
                          aria-hidden
                          className={`h-5 w-5 text-slate2 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-gold" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="border-t border-ink-line px-5 pb-6 pt-4 text-base leading-relaxed text-mist sm:px-7">
                          {tier.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
