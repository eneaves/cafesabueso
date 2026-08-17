export const CATEGORIES = ["Journaling", "Talleres de Arte", "Cine", "Encuadernación", "Música"];

export const CATEGORY_TONE = {
  Journaling: "tone-primary",
  "Talleres de Arte": "tone-bubblegum",
  Cine: "tone-sky",
  Encuadernación: "tone-tomato",
  Música: "tone-bubblegum",
};

const img = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  heroInterior: img("photo-1554118811-1e0d58224f24", 1000),
  cafeInterior: img("photo-1521017432531-fbd92d768814"),
  journalFlatlay: img("photo-1517971071642-34a2d3ecc9cd"),
  chessFigures: img("photo-1528819622765-d6bcf132f793"),
  bookbinding: img("photo-1544716278-ca5e3f4abd8c"),
  journalCoffee: img("photo-1495474472287-4d71bcdd2085"),
  clapperboard: img("photo-1485846234645-a62644f84728"),
  coldBrew: img("photo-1461023058943-07fcbe16d735"),
};

export const EVENTS = [
  {
    id: "journal-astros",
    title: "Tardes de Journal Creativo",
    category: "Journaling",
    image: PHOTOS.journalFlatlay,
    start: "2026-08-22T17:00:00-06:00",
    end: "2026-08-22T20:00:00-06:00",
    host: "Club de Journal Sabueso",
    spots: 5,
    price: "$280 MXN",
    short: "Edición Los Astros · Combo Creativo incluido",
    description:
      "Una tarde para escribir, recortar y pegar sin prisa. En esta edición Los Astros exploramos constelaciones, cartas al futuro y collage celeste. No necesitas experiencia: solo ganas de jugar con papel y tinta.",
    includes: [
      "Combo Creativo: bebida a elección + Kit de Journaling de temporada",
      "Stickers, washi tape y recortes de la edición Los Astros",
      "Mesa de materiales compartidos",
    ],
  },
  {
    id: "exvotos",
    title: "Exvotos y milagritos cotidianos",
    category: "Talleres de Arte",
    image: PHOTOS.chessFigures,
    start: "2026-08-29T18:00:00-06:00",
    end: "2026-08-29T21:00:00-06:00",
    host: "Xana Montes",
    spots: 8,
    price: "$450 MXN",
    short: "Pintura devocional y milagritos de barro",
    description:
      "Un taller para agradecer lo pequeño. Xana Montes comparte la tradición del exvoto mexicano y guía la creación de tu propia pieza: imagen, milagrito y texto de agradecimiento.",
    includes: ["Incluye todos los materiales", "Lámina preparada y pinturas", "1 bebida de la carta"],
  },
  {
    id: "encuadernacion",
    title: "Encuadernación Sewn Board",
    category: "Encuadernación",
    image: PHOTOS.bookbinding,
    start: "2026-09-05T16:00:00-06:00",
    end: "2026-09-05T20:00:00-06:00",
    host: "Taller Sabueso",
    spots: 6,
    price: "$520 MXN",
    short: "Arma tu libreta de tapa dura cosida a mano",
    description:
      "Aprende la técnica sewn board binding y llévate una libreta de tapa dura hecha por completo por ti: plegado, costura, forro y acabado.",
    includes: ["Papel, hilo encerado, cartón y telas", "Uso de herramientas del taller", "Café de filtro durante la sesión"],
  },
  {
    id: "camino-artista",
    title: "El Camino del Artista",
    category: "Talleres de Arte",
    image: PHOTOS.journalCoffee,
    start: "2026-09-10T19:00:00-06:00",
    end: "2026-09-10T21:00:00-06:00",
    host: "Colectivo Sabueso",
    spots: 12,
    price: "$200 MXN por sesión",
    short: "Club de desarrollo creativo · sesiones semanales",
    description:
      "Grupo de lectura y práctica basado en El Camino del Artista. Cada semana: páginas matutinas, ejercicio creativo y conversación honesta sobre bloqueos y procesos.",
    includes: ["Guía impresa de la sesión", "Espacio seguro y confidencial", "Descuento en bebidas durante la sesión"],
  },
  {
    id: "actuacion",
    title: "Herramientas para la Actuación Cinematográfica",
    category: "Cine",
    image: PHOTOS.clapperboard,
    start: "2026-09-19T17:00:00-06:00",
    end: "2026-09-19T21:00:00-06:00",
    host: "Foro Sabueso",
    spots: 10,
    price: "Gratis",
    short: "Intensivo de cámara, escena y presencia",
    description:
      "Intensivo práctico para actuar frente a cámara: lectura de guion, escucha activa, continuidad y trabajo con encuadres cerrados. Se graban escenas breves que puedes usar en tu reel.",
    includes: ["Escenas y guiones proporcionados", "Grabación de tus ejercicios", "Cupo con registro previo obligatorio"],
  },
];

export const MENU = [
  {
    id: "bebidas",
    label: "Bebidas & Cold Brew",
    items: [
      { name: "Hibis-Brew", desc: "Cold brew infusionado con jamaica y cítricos", price: "$75", tag: "El favorito de la casa" },
      { name: "Ruby Spark", desc: "Cold brew, frutos rojos y tónica", price: "$80", tag: "Edición Limitada" },
      { name: "Sandía Pink", desc: "Mocktail de sandía, limón y menta", price: "$70" },
      { name: "Latte Sabueso", desc: "Espresso doble, leche sedosa y piloncillo", price: "$65" },
      { name: "Espresso", desc: "Tueste de temporada, origen mexicano", price: "$40" },
      { name: "Mocktails refrescantes", desc: "Rotativos según la temporada", price: "$75" },
    ],
  },
  {
    id: "reposteria",
    label: "Repostería Artesanal",
    items: [
      { name: "Pastel de Zanahoria", desc: "Con queso crema y nuez", price: "$85", tag: "El favorito de la casa" },
      { name: "Pastel de Chocolate", desc: "Húmedo, con ganache oscuro", price: "$85" },
      { name: "Brownie", desc: "Denso, con sal de mar", price: "$55" },
      { name: "Brookie", desc: "Brownie + galleta en una sola pieza", price: "$65", tag: "Edición Limitada" },
    ],
  },
  {
    id: "combos",
    label: "Combos Especiales",
    items: [
      { name: "Combo Creativo", desc: "Bebida a elección + Kit de Journal de la temporada", price: "$180", tag: "El favorito de la casa" },
      { name: "Combo Lectura", desc: "Café de filtro + rebanada de pastel", price: "$130" },
      { name: "Combo Mesa", desc: "2 bebidas frías + juego de mesa por 2 horas", price: "$160" },
    ],
  },
];

export const GALLERY = [PHOTOS.cafeInterior, PHOTOS.journalFlatlay, PHOTOS.chessFigures, PHOTOS.bookbinding];

export const HOURS = "Lunes a Viernes de 1:00 p.m. a 9:00 p.m.";
export const ADDRESS = "C. Mariano Jiménez 3, Bolívar, Zona Centro, 31000 Chihuahua, Chih.";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=C.+Mariano+Jim%C3%A9nez+3,+Bol%C3%ADvar,+Zona+Centro,+31000+Chihuahua";
export const WHATSAPP_URL = "https://wa.me/526141234567";
export const INSTAGRAM_URL = "https://instagram.com/cafesabueso";

export function formatEventDate(iso) {
  return new Date(iso).toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long" });
}
export function formatEventTime(startIso, endIso) {
  const opts = { hour: "numeric", minute: "2-digit" };
  return `${new Date(startIso).toLocaleTimeString("es-MX", opts)} – ${new Date(endIso).toLocaleTimeString("es-MX", opts)}`;
}
export function googleCalendarUrl(e) {
  const fmt = (iso) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.title} · Café Sabueso`,
    dates: `${fmt(e.start)}/${fmt(e.end)}`,
    details: e.description,
    location: ADDRESS,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
