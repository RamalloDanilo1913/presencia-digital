import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Presencia Digital | Que te encuentren, te elijan y vuelvan",
  description:
    "Posicionamiento en Google Maps, web simple, WhatsApp directo, carta digital con QR y reseñas con NFC para tu negocio. Operando en Córdoba y Buenos Aires.",
  openGraph: {
    title: "Presencia Digital",
    description:
      "Digitalizamos tu negocio para que dejes de perder ventas frente a la competencia.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C2B39",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
