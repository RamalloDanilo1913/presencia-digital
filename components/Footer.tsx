import { Github, MapPin } from "lucide-react";
import CTAButton from "./CTAButton";
import { brand } from "@/lib/content";
import { GITHUB_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line/70 pb-28 pt-10 sm:pb-10">
      {GITHUB_URL && (
        <div className="mx-auto mb-10 flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <p className="text-sm text-mist">¿Querés ver cómo trabajamos?</p>
          <CTAButton href={GITHUB_URL} variant="ghost" arrow={false}>
            <Github aria-hidden className="h-5 w-5" />
            Conocé nuestros proyectos
          </CTAButton>
        </div>
      )}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate2 sm:flex-row">
        <p className="flex items-center gap-2 font-semibold text-mist">
          <MapPin aria-hidden className="h-4 w-4 text-gold" />
          {brand.name}
        </p>
        <p>{brand.zone}</p>
        <p>© {new Date().getFullYear()} {brand.name}</p>
      </div>
    </footer>
  );
}
