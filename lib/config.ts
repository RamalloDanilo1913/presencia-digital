const soloDigitos = (valor?: string) => (valor ?? "").replace(/\D/g, "");

export const WHATSAPP_NUMBER =
  soloDigitos(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) || "5490000000000";

export const DEFAULT_MESSAGE =
  "Hola! Vi la propuesta de Presencia Digital y quiero más clientes para mi negocio.";

export function whatsappLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const email = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim();
const github = (process.env.NEXT_PUBLIC_GITHUB_URL ?? "").trim();

export const GITHUB_URL = github.startsWith("https://github.com/") ? github : "";

export const CONTACT = {
  whatsappDisplay:
    process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY?.trim() || `+${WHATSAPP_NUMBER}`,
  instagram: "@presencia.digital.ok",
  instagramUrl: "https://instagram.com/presencia.digital.ok",
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "",
};
