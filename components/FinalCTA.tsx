import { Instagram, Mail, MessageCircle } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { finalCta } from "@/lib/content";
import { CONTACT, whatsappLink } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative scroll-mt-16 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ink-card" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {finalCta.body}
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton href={whatsappLink()} className="w-full sm:w-auto sm:px-10">
              <MessageCircle aria-hidden className="h-5 w-5" />
              {finalCta.button}
            </CTAButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className={`mt-12 grid gap-3 text-left ${CONTACT.email ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-3 rounded-xl border border-ink-line bg-ink-card p-4 transition hover:border-gold"
              >
                <MessageCircle aria-hidden className="h-5 w-5 shrink-0 text-gold" />
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold">WhatsApp</span>
                  <span className="block truncate font-semibold">{CONTACT.whatsappDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-3 rounded-xl border border-ink-line bg-ink-card p-4 transition hover:border-gold"
              >
                <Instagram aria-hidden className="h-5 w-5 shrink-0 text-gold" />
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Instagram</span>
                  <span className="block truncate font-semibold">{CONTACT.instagram}</span>
                </span>
              </a>
            </li>
            {CONTACT.email && (
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex h-full items-center gap-3 rounded-xl border border-ink-line bg-ink-card p-4 transition hover:border-gold"
                >
                  <Mail aria-hidden className="h-5 w-5 shrink-0 text-gold" />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Mail</span>
                    <span className="block truncate font-semibold">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
