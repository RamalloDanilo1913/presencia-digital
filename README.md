# Presencia Digital — Landing page

Landing page de un servicio de presencia digital para negocios locales: posicionamiento en Google Maps, web simple, WhatsApp directo, carta digital con QR y reseñas con NFC. Está pensada para convertir visitas en consultas por WhatsApp.

Operando en Córdoba y Buenos Aires.

## Qué incluye

- Hero con propuesta de valor y llamado a la acción.
- Problema y solución, con comparación antes / después.
- Planes y precios, con botón que abre WhatsApp con un mensaje ya armado según el plan elegido.
- Servicios mensuales por niveles.
- Contacto final y botón flotante de WhatsApp.
- Diseño mobile-first, animaciones suaves que respetan "reducir movimiento" y buena accesibilidad (foco visible, `aria-label`, contraste).

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React · Vercel

## Correrla localmente

```bash
git clone https://github.com/RamalloDanilo1913/presencia-digital.git
cd presencia-digital
npm install
cp .env.example .env.local
npm run dev
```

Queda en http://localhost:3000.

## Variables de entorno

Los datos de contacto no están en el código: se configuran por variables de entorno (ver `.env.example`).

| Variable | Obligatoria | Descripción |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Sí | Número en formato internacional, solo dígitos |
| `NEXT_PUBLIC_WHATSAPP_DISPLAY` | No | Cómo se muestra el número en la página |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Mail de contacto; si falta, no se muestra |
| `NEXT_PUBLIC_GITHUB_URL` | No | Perfil de GitHub; si falta, no se muestra el botón "Conocé nuestros proyectos" |

Son variables públicas: se incorporan a la página al compilar, así que después de cambiarlas hay que redesplegar.

## Deploy en Vercel

1. Importá el repositorio en [vercel.com](https://vercel.com) (detecta Next.js solo).
2. En **Environment Variables** cargá las variables de la tabla.
3. **Deploy**.

## Personalización

| Qué cambiar | Dónde |
|---|---|
| Textos, precios, planes y niveles mensuales | `lib/content.ts` |
| Contacto y links de WhatsApp | `lib/config.ts` y variables de entorno |
| Colores | `tailwind.config.ts` |
| Orden de secciones | `app/page.tsx` |

## Estructura

```
app/          Layout, página principal, estilos globales y favicon
components/   Secciones de la landing y componentes reutilizables
lib/          Contenido (content.ts) y configuración de contacto (config.ts)
```

## Seguridad

Sitio estático sin backend ni base de datos. Incluye headers de seguridad (HSTS, `nosniff`, bloqueo de iframes, `Referrer-Policy`), enlaces externos con `rel="noopener noreferrer"` y validación de las variables de entorno antes de usarlas.

## Autor

**Danilo Ramallo** — Estudiante de Ingeniería Electrónica · Desarrollo web y ciberseguridad

[LinkedIn](https://www.linkedin.com/in/danilo-ramallo-9877a6289)
