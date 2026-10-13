import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="safe-bottom-right fixed z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping2 motion-reduce:hidden"
      />
      <MessageCircle aria-hidden className="relative h-8 w-8" />
    </a>
  );
}
