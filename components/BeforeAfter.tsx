"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  BadgeCheck,
  Camera,
  Clock,
  MessageCircle,
  Navigation,
  Star,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Mode = "antes" | "despues";

function StarRow({ filled }: { filled: boolean }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${filled ? "fill-gold text-gold" : "text-ink-line"}`}
        />
      ))}
    </div>
  );
}

function ListingCard({ mode }: { mode: Mode }) {
  const ok = mode === "despues";

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-line bg-ink-card">
      <div
        className={`flex h-36 items-center justify-center border-b border-ink-line sm:h-44 ${
          ok
            ? "bg-gradient-to-br from-[#2E4459] to-ink-card"
            : "bg-ink-deep"
        }`}
      >
        {ok ? (
          <span className="flex flex-col items-center gap-2 text-slate2">
            <Camera className="h-8 w-8 text-gold" />
            <span className="text-xs font-medium">12 fotos actualizadas</span>
          </span>
        ) : (
          <span className="flex flex-col items-center gap-2 text-slate2/70">
            <Camera className="h-8 w-8" />
            <span className="text-xs font-medium">Sin fotos</span>
          </span>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-white">Tu negocio</p>
            <div className="mt-1.5 flex items-center gap-2">
              <StarRow filled={ok} />
              <span className="text-sm text-mist">
                {ok ? "5,0 (48 reseñas)" : "0,0 (sin reseñas)"}
              </span>
            </div>
          </div>
          <span
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              ok
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-white/5 text-slate2"
            }`}
          >
            {ok ? (
              <>
                <BadgeCheck className="h-3.5 w-3.5" /> Ficha verificada
              </>
            ) : (
              <>
                <AlertTriangle className="h-3.5 w-3.5" /> Ficha incompleta
              </>
            )}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm">
          <Clock className={`h-4 w-4 shrink-0 ${ok ? "text-gold" : "text-slate2/70"}`} />
          <span className={ok ? "text-mist" : "text-slate2/70"}>
            {ok ? "Abierto ahora · Cierra 21:00" : "Horario no disponible"}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold">
          <span
            className={`flex items-center justify-center gap-2 rounded-lg py-3 ${
              ok ? "bg-ink-line/60 text-white" : "bg-ink-line/20 text-slate2/60"
            }`}
          >
            <Navigation className="h-4 w-4" /> Cómo llegar
          </span>
          <span
            className={`flex items-center justify-center gap-2 rounded-lg py-3 ${
              ok ? "bg-ink-line/60 text-white" : "bg-ink-line/20 text-slate2/60"
            }`}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [mode, setMode] = useState<Mode>("antes");
  const reduce = useReducedMotion();

  return (
    <section id="demo" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="La diferencia se ve"
            title="Así queda tu ficha de Google."
            text="Este es el mismo negocio, antes y después de trabajar la ficha. Probá los dos botones."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex w-full max-w-xs rounded-full border border-ink-line bg-ink-card p-1">
            {(["antes", "despues"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`min-h-[44px] flex-1 rounded-full text-sm font-bold transition ${
                  mode === m
                    ? "bg-gold text-ink-deep"
                    : "text-slate2 hover:text-white"
                }`}
              >
                {m === "antes" ? "Antes" : "Después"}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-8 max-w-sm">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mode}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <ListingCard mode={mode} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
