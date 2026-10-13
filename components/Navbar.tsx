import { MapPin } from "lucide-react";
import { brand } from "@/lib/content";
import { whatsappLink } from "@/lib/config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-line/60 bg-ink/85 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <MapPin aria-hidden className="h-5 w-5 text-gold" />
          <span>{brand.name}</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-mist md:flex">
          <a href="#demo" className="transition hover:text-gold">Demo</a>
          <a href="#planes" className="transition hover:text-gold">Planes</a>
          <a href="#servicios" className="transition hover:text-gold">Servicios mensuales</a>
          <a href="#contacto" className="transition hover:text-gold">Contacto</a>
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-ink-deep transition hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Escribinos
        </a>
      </nav>
    </header>
  );
}
