import { MapPin, MessageCircle, Navigation, Star } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { brand, hero } from "@/lib/content";
import { whatsappLink } from "@/lib/config";

function ListingMock() {
  return (
    <div
      aria-hidden
      className="rounded-2xl border border-ink-line bg-ink-card/80 p-5 shadow-2xl shadow-black/30 backdrop-blur"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-bold">Tu negocio</p>
          <div className="mt-1.5 flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold" />
            ))}
            <span className="ml-2 text-sm text-mist">5,0</span>
          </div>
          <p className="mt-1 text-sm text-slate2">Tu rubro · Tu barrio</p>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
          Abierto ahora
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold">
        <span className="flex items-center justify-center gap-2 rounded-lg bg-ink-line/60 py-3">
          <Navigation className="h-4 w-4 text-gold" /> Cómo llegar
        </span>
        <span className="flex items-center justify-center gap-2 rounded-lg bg-ink-line/60 py-3">
          <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
        </span>
      </div>
      <p className="mt-4 text-center text-xs text-slate2">Así se ve tu ficha optimizada</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-ink-card" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-2 border-ink-line/70" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-deep/40 px-3.5 py-1.5 text-xs font-semibold text-mist">
              <MapPin aria-hidden className="h-3.5 w-3.5 text-gold" />
              {brand.zone}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-[2.6rem] font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {hero.titleStart}
              <span className="text-gold">{hero.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={whatsappLink()} className="w-full sm:w-auto">
                {hero.cta}
              </CTAButton>
              <CTAButton href="#planes" variant="ghost" arrow={false} className="w-full sm:w-auto">
                {hero.secondaryCta}
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mx-auto w-full max-w-md lg:max-w-none">
          <ListingMock />
        </Reveal>
      </div>
    </section>
  );
}
