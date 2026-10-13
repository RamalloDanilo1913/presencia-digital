import { Check, Sparkles } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { addon, formatARS, plans, pricing } from "@/lib/content";
import type { Plan } from "@/lib/content";
import { whatsappLink } from "@/lib/config";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink-line bg-ink-card p-7 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-extrabold leading-snug">{plan.name}</h3>
        {plan.badge && (
          <span className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
            {plan.badge}
          </span>
        )}
      </div>

      <p className="mt-5 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
          {formatARS(plan.price)}
        </span>
        <span className="text-sm text-slate2">pago único</span>
      </p>

      <p className="mt-4 text-sm text-slate2">
        <strong className="text-white">Ideal para:</strong> {plan.ideal}
      </p>

      <ul className="mt-6 flex-1 space-y-3.5 border-t border-ink-line pt-6">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-snug text-mist">
            <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <CTAButton
        href={whatsappLink(`Hola! Me interesa el ${plan.name} (${formatARS(plan.price)}). ¿Me cuentan más?`)}
        className="mt-8 w-full"
      >
        Quiero este plan
      </CTAButton>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="planes" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Planes de arranque" title={pricing.title} text={pricing.subtitle} />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl border-2 border-dashed border-gold/70 bg-gold/[0.06] p-7 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  <Sparkles aria-hidden className="h-4 w-4" /> {addon.label}
                </p>
                <h3 className="mt-2 text-xl font-extrabold">{addon.name}</h3>
                <p className="mt-2 text-base leading-relaxed text-mist">
                  {addon.text} <span className="text-white">{addon.extra}</span>
                </p>
              </div>
              <p className="text-3xl font-extrabold tracking-tight text-gold sm:text-4xl">
                + {formatARS(addon.price)}
              </p>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-sm text-slate2">{pricing.footnote}</p>
      </div>
    </section>
  );
}
