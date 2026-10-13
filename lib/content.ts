export const brand = {
  name: "Presencia Digital",
  zone: "Operando en Córdoba y Buenos Aires",
};

export const hero = {
  titleStart: "Que te encuentren, te elijan y ",
  titleAccent: "vuelvan.",
  subtitle:
    "Digitalizamos tu negocio para que dejes de perder ventas frente a la competencia.",
  cta: "Quiero más clientes",
  secondaryCta: "Ver planes",
};

export const problem = {
  stat: "80%",
  question:
    "¿Sabías que el 80% de tus clientes te busca en Google antes de ir a tu local?",
  body: "Hoy no alcanza con tener un buen producto o levantar la persiana. Si tu perfil de Google Maps está desactualizado, no tenés reseñas positivas o tardás en responder por WhatsApp, el cliente elige al negocio de enfrente.",
};

export const solution = {
  title: "Tu ecosistema digital en piloto automático.",
  body: "Nosotros nos encargamos de que tu negocio se vea increíble en internet y atienda rápido, para que vos te dediques exclusivamente a lo que mejor sabés hacer: manejar tu local.",
};

export const pillars = [
  {
    key: "posicionamiento",
    title: "Posicionamiento",
    text: "Fichas de Google que atraen miradas.",
  },
  {
    key: "conversion",
    title: "Conversión",
    text: "Canales directos de WhatsApp para cerrar ventas.",
  },
  {
    key: "reputacion",
    title: "Reputación",
    text: "Stickers NFC para sumar reseñas de 5 estrellas sin esfuerzo.",
  },
] as const;

export const pricing = {
  title: "Ponemos tu negocio en el mapa (literalmente).",
  subtitle: "Planes de arranque. Pagás una sola vez.",
  footnote:
    "Precios en pesos argentinos. ¿Tu presupuesto es otro? Armamos el paquete a tu medida.",
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  ideal: string;
  includes: string[];
  badge?: string;
};

export const plans: Plan[] = [
  {
    id: "presencia",
    name: "Plan Presencia Digital",
    price: 250000,
    ideal: "Cualquier comercio, taller o profesional.",
    includes: [
      "Ficha de Google Maps optimizada al 100% (horarios, fotos, ubicación, rubro)",
      "Página web simple y atractiva con tu info",
      "Botón directo a WhatsApp",
    ],
  },
  {
    id: "carta",
    name: "Presencia + Carta Digital",
    price: 350000,
    ideal: "Bares, restaurantes y rotiserías.",
    badge: "Para gastronomía",
    includes: [
      "Todo el Plan Presencia Digital",
      "Carta digital con código QR para las mesas",
      "Botón de “Llamar al mozo”",
      "Panel autogestionable para cambiar tus precios sin depender de nadie",
    ],
  },
];

export const addon = {
  label: "Add-on estrella",
  name: "Sticker Inteligente NFC de Reseñas",
  price: 50000,
  text: "Un sticker físico para tu mostrador: el cliente acerca el celular y te deja 5 estrellas en segundos.",
  extra: "Suma el arranque profesional de tu Instagram.",
};

export const monthly = {
  title: "Delegá tus redes y tu atención al cliente.",
  intro:
    "Una vez que la casa está ordenada, te ayudamos a crecer mes a mes con planes adaptados a la agresividad comercial que busques.",
  note: "Cada nivel incluye el anterior.",
};

export type Tier = {
  level: number;
  name: string;
  price: number;
  text: string;
  highlight?: boolean;
};

export const tiers: Tier[] = [
  {
    level: 1,
    name: "Mantenimiento",
    price: 20000,
    text: "Actualizamos tus precios, fotos y horarios para que no te preocupes por nada.",
  },
  {
    level: 2,
    name: "Instagram",
    price: 70000,
    text: "Mantención de la red y creación de contenido fresco cada semana. Hacemos visitas presenciales a tu local para producir material real.",
  },
  {
    level: 3,
    name: "El Combo Viral",
    price: 90000,
    text: "Sumamos la creación de videos cortos en formato vertical para explotar el alcance en TikTok y Reels.",
  },
  {
    level: 4,
    name: "El Motor de Ventas",
    price: 150000,
    highlight: true,
    text: "Todo lo anterior + gestión completa de tus pedidos y reservas por WhatsApp. Atendemos a tus clientes y cerramos las ventas por vos.",
  },
];

export const finalCta = {
  title: "¿Listo para que tu celular no pare de sonar?",
  body: "Hablemos de tu negocio. Escribinos para una asesoría gratuita y vemos qué plan se adapta mejor a tu momento actual.",
  button: "Escribinos por WhatsApp",
};

export function formatARS(n: number): string {
  return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
