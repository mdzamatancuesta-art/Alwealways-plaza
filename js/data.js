/* ============================================================
   Always Plaza — Datos de la interfaz
   Estructura de categorías, subcategorías, productos de ejemplo
   y mapa de códigos postales de La Habana → punto de recogida.
   ============================================================ */

// Iconos SVG reutilizables (line-art minimalista, marca blanca).
const ICONS = {
  bricolaje: '<path d="M14 3l7 7-3 3-7-7zM11 8l-8 8v3h3l8-8"/>',
  envases: '<path d="M6 3h12l-1 4H7zM7 7l1 13h8l1-13"/>',
  papeleria: '<path d="M5 3h10l4 4v14H5zM15 3v4h4"/><path d="M8 12h7M8 16h7"/>',
  hogar: '<path d="M4 11l8-6 8 6M6 10v9h12v-9"/>',
  servicios: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  suelos: '<path d="M3 6h18M3 12h18M3 18h18M9 6v12M15 6v12"/>',
  ventanas: '<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M12 4v16M4 12h16"/>',
  herramientas: '<path d="M14 7a4 4 0 0 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5l-2 2-2-2 2-2z"/>',
  cocina: '<path d="M6 3v7a3 3 0 0 0 6 0V3M9 3v18M17 3c-2 0-3 2-3 5s1 4 3 4v9"/>',
  bano: '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM7 12V6a2 2 0 0 1 4 0"/>',
  fontaneria: '<path d="M7 3v6h4V3M9 9v6a3 3 0 0 0 3 3h5"/>',
  electricidad: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  iluminacion: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
  pintura: '<path d="M4 4h13v5H4zM17 6h3v4h-8v3M11 13v3a2 2 0 0 0 4 0"/>',
  construccion: '<path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-5h4v5"/>',
  vaso: '<path d="M7 4h10l-1.5 16h-7z"/>',
  cuenco: '<path d="M4 10h16a8 8 0 0 1-16 0z"/>',
  plato: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
  bolsa: '<path d="M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2"/>',
  producto: '<path d="M6 7h12l-1 13H7zM9 7V5a3 3 0 0 1 6 0v2"/>',
};

/* ---------- Categorías + subcategorías (Mega Menú) ---------- */
const CATEGORIES = [
  {
    id: 'bricolaje',
    name: 'Bricolaje y construcción',
    icon: ICONS.bricolaje,
    accent: 'night',
    subs: [
      { name: 'Construcción', icon: ICONS.construccion },
      { name: 'Suelos y revestimientos', icon: ICONS.suelos },
      { name: 'Ventanas y puertas', icon: ICONS.ventanas },
      { name: 'Herramientas', icon: ICONS.herramientas },
      { name: 'Cocina', icon: ICONS.cocina },
      { name: 'Baño', icon: ICONS.bano },
      { name: 'Fontanería', icon: ICONS.fontaneria },
      { name: 'Electricidad', icon: ICONS.electricidad },
      { name: 'Iluminación', icon: ICONS.iluminacion },
      { name: 'Pintura', icon: ICONS.pintura },
    ],
  },
  {
    id: 'envases',
    name: 'Envases y embalajes',
    icon: ICONS.envases,
    accent: 'novedad',
    subs: [
      { name: 'Vasos', icon: ICONS.vaso },
      { name: 'Cuencos', icon: ICONS.cuenco },
      { name: 'Tarrinas', icon: ICONS.cuenco },
      { name: 'Envases take away', icon: ICONS.envases },
      { name: 'Platos', icon: ICONS.plato },
      { name: 'Bolsas de papel', icon: ICONS.bolsa },
      { name: 'Cubiertos de madera', icon: ICONS.herramientas },
      { name: 'Cañitas de papel', icon: ICONS.fontaneria },
    ],
  },
  { id: 'papeleria', name: 'Papelería y ofimática', icon: ICONS.papeleria, accent: 'b2b', subs: [] },
  { id: 'hogar', name: 'Hogar', icon: ICONS.hogar, accent: 'promo', subs: [] },
  {
    id: 'servicios',
    name: 'Servicios',
    icon: ICONS.servicios,
    accent: 'b2b',
    subs: [
      { name: 'Todos nuestros servicios', icon: ICONS.servicios },
      { name: 'Always Market', icon: ICONS.envases },
      { name: 'Always Sanguar', icon: ICONS.hogar },
    ],
  },
];

/* ---------- Categorías destacadas (grid home) ---------- */
const FEATURED_CATEGORIES = [
  { name: 'Bricolaje y construcción', icon: ICONS.bricolaje, count: '1.240 productos', bg: 'bg-lowgrey', fg: 'text-night' },
  { name: 'Envases y embalajes', icon: ICONS.envases, count: '860 productos', bg: 'bg-novedad/10', fg: 'text-novedad' },
  { name: 'Papelería y ofimática', icon: ICONS.papeleria, count: '540 productos', bg: 'bg-b2b/10', fg: 'text-b2b' },
  { name: 'Hogar', icon: ICONS.hogar, count: '980 productos', bg: 'bg-promo/15', fg: 'text-night' },
  { name: 'Herramientas', icon: ICONS.herramientas, count: '420 productos', bg: 'bg-lowgrey', fg: 'text-darkgrey' },
  { name: 'Iluminación', icon: ICONS.iluminacion, count: '310 productos', bg: 'bg-promo/15', fg: 'text-night' },
  { name: 'Pintura', icon: ICONS.pintura, count: '260 productos', bg: 'bg-lowgrey', fg: 'text-darkgrey' },
  { name: 'Servicios para empresas', icon: ICONS.servicios, count: 'B2B', bg: 'bg-b2b/10', fg: 'text-b2b' },
];

/* ---------- Productos de ejemplo (Novedades) ---------- */
const PRODUCTS = [
  { name: 'Taladro percutor 750W', cat: 'Herramientas', price: '49,90', old: '64,90', tag: 'Oferta', tagColor: 'promo', icon: ICONS.herramientas },
  { name: 'Vasos take away 350ml (50u)', cat: 'Envases', price: '8,50', tag: 'Nuevo', tagColor: 'novedad', icon: ICONS.vaso },
  { name: 'Set de pintura mate 4L', cat: 'Pintura', price: '29,90', icon: ICONS.pintura },
  { name: 'Lámpara LED colgante', cat: 'Iluminación', price: '34,90', old: '44,90', tag: 'Oferta', tagColor: 'promo', icon: ICONS.iluminacion },
  { name: 'Bolsas de papel kraft (100u)', cat: 'Envases', price: '12,00', tag: 'Nuevo', tagColor: 'novedad', icon: ICONS.bolsa },
  { name: 'Juego de destornilladores', cat: 'Herramientas', price: '19,90', icon: ICONS.herramientas },
  { name: 'Grifo monomando cocina', cat: 'Fontanería', price: '42,00', icon: ICONS.fontaneria },
  { name: 'Platos de caña (24u)', cat: 'Envases', price: '9,90', tag: 'Nuevo', tagColor: 'novedad', icon: ICONS.plato },
  { name: 'Rollo de vinilo suelo 2m', cat: 'Suelos', price: '15,50', icon: ICONS.suelos },
  { name: 'Organizador de escritorio', cat: 'Papelería', price: '11,90', old: '16,90', tag: 'Oferta', tagColor: 'promo', icon: ICONS.papeleria },
];

/* ---------- Códigos postales de La Habana → punto de recogida ---------- */
const HAVANA_PICKUPS = {
  '10100': 'Punto de recogida 1 · Habana Vieja',
  '10200': 'Punto de recogida 2 · Centro Habana',
  '10300': 'Punto de recogida 2 · Centro Habana',
  '10400': 'Punto de recogida 3 · Cerro',
  '10500': 'Punto de recogida 3 · Cerro',
  '10600': 'Punto de recogida 3 · Cerro',
  '10700': 'Punto de recogida 4 · Vedado',
  '10800': 'Punto de recogida 5 · Plaza de la Revolución',
  '11300': 'Punto de recogida 6 · Playa',
  '11900': 'Punto de recogida 7 · Diez de Octubre',
};

// Devuelve el punto de recogida para un código postal de La Habana.
function pickupForZip(zip) {
  if (HAVANA_PICKUPS[zip]) return HAVANA_PICKUPS[zip];
  // La Habana usa el rango 10xxx–11xxx: asignamos el punto central por defecto.
  if (/^1[01]\d{3}$/.test(zip)) return 'Punto de recogida 1 · Centro Habana';
  return null;
}
