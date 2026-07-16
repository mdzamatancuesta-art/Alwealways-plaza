/* ============================================================
   Always Plaza — Datos de la interfaz (replicando el diseño)
   ============================================================ */

// Iconos SVG (line-art minimalista, marca blanca) para placeholders de producto.
const ICONS = {
  printer: '<path d="M6 9V3h12v6M6 18H4v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6h-2M6 14h12v7H6z"/><path d="M9 14h6"/>',
  keyboard: '<rect x="2" y="7" width="20" height="11" rx="2"/><path d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01M8 15h8"/>',
  mouse: '<rect x="7" y="3" width="10" height="18" rx="5"/><path d="M12 7v3"/>',
  pen: '<path d="M12 3l3 3-8 8-4 1 1-4z"/><path d="M12 3l4 4"/><path d="M6 21h14"/>',
  notebook: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18M13 8h3M13 12h3"/>',
  bag: '<path d="M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2"/>',
  paint: '<path d="M4 4h13v5H4zM17 6h3v4h-8v3M11 13v3a2 2 0 0 0 4 0"/>',
  plate: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
  ballpen: '<path d="M9 3l6 0 0 4-3 3-3-3zM12 10v11"/>',
  hammer: '<path d="M14 7a4 4 0 0 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5l-2 2-2-2 2-2z"/>',
  cup: '<path d="M7 4h10l-1.5 16h-7z"/>',
  wrench: '<path d="M14 7a4 4 0 0 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5l-2 2-2-2 2-2z"/>',
  helmet: '<path d="M4 15a8 8 0 0 1 16 0M2 15h20v2H2z"/>',
};

/* ---------- Categorías del nav + mega menú (2 niveles) ----------
   Cada categoría tiene subcategorías (columna izquierda). Una subcategoría
   puede tener `actions` (enlaces destacados) y `groups` (columnas de enlaces)
   que se muestran en el panel derecho al pasar el ratón. */
const CATEGORIES = [
  {
    id: 'brico',
    name: 'Bricolaje y construcción',
    subs: [
      { name: 'Construcción' },
      { name: 'Suelos y revestimientos' },
      { name: 'Ventanas y puertas' },
      {
        name: 'Herramientas',
        actions: ['Ver todo', 'Los más vendidos', 'Productos en oferta'],
        groups: [
          { title: 'Eléctricas', items: ['Kit herramientas eléctricas', 'Taladrar', 'Demoler', 'Cortar y lijar', 'De especialidad'] },
          { title: 'Manuales', items: ['Martillos y mazas', 'Atornillar y apretar', 'Demolición manual', 'Construcción'] },
          { title: 'Medición', items: ['Flexómetros', 'Niveles', 'Detectores y cintas'] },
          { title: 'Accesorios de herramientas eléctricas', items: ['Baterías y cargadores', 'Accesorios maquinaria', 'Cableado'] },
          { title: 'Equipos de seguridad', items: ['Cascos', 'Ropa de trabajo', 'Botas de trabajo'] },
        ],
      },
      { name: 'Cocina' },
      { name: 'Baño' },
      { name: 'Fontanería' },
      { name: 'Electricidad' },
      { name: 'Iluminación' },
      { name: 'Pintura' },
    ],
  },
  {
    id: 'envases',
    name: 'Envases y embalajes',
    subs: [
      {
        name: 'Vasos',
        actions: ['Ver todo', 'Los más vendidos', 'Personalizar'],
        groups: [
          { title: 'Vasos papel blanco', items: ['Vaso sencillo blanco', 'Vaso sencillo E&E'] },
          { title: 'Vasos papel kraft', items: ['Vaso sencillo kraft', 'Vaso kraft de doble capa', 'Vaso kraft corrugado de doble capa'] },
        ],
      },
      { name: 'Cuencos' },
      { name: 'Tarrinas' },
      { name: 'Envases take away' },
      { name: 'Platos' },
      { name: 'Bolsas de papel' },
      { name: 'Cubiertos de madera' },
      { name: 'Cañitas de papel' },
    ],
  },
  { id: 'papeleria', name: 'Papelería y ofimática', subs: [] },
  { id: 'fotografia', name: 'Fotografía', subs: [] },
  { id: 'hogar', name: 'Hogar', subs: [] },
  {
    id: 'servicios',
    name: 'Servicios',
    subs: [
      {
        name: 'Todos nuestros servicios',
        links: ['Servicios para empresas', 'Planificación y asesoramiento', 'Reformas y construcciones', 'Personalización de productos', 'Envíos a domicilio y recogida'],
      },
      { name: 'Always Market' },
      { name: 'Always Sanguar' },
    ],
  },
];

/* ---------- Home · Novedades ---------- */
const NOVEDADES = [
  { name: 'Impresora Camon MX3 Serie 5000T', desc: 'Impresora de tinta inyectada multiformato A3 A4 A2 digital.', tag: 'Novedad', price: '59,99', icon: ICONS.printer },
  { name: 'Teclado gamer RX500 Power Plus', desc: 'Teclado mecánico inalámbrico.', tag: 'Novedad', price: '29,99', icon: ICONS.keyboard },
  { name: 'Raton Gamer HERO T480', desc: 'Ratón inalámbrico hergonómico 36000 DPI 8 botones.', tag: 'Novedad', price: '25,99', icon: ICONS.mouse },
  { name: 'Waco pen digital S80', desc: 'Lápiz digital profesional para diseño gráfico y animación 3D.', tag: 'Novedad', price: '15', icon: ICONS.pen },
];

/* ---------- Home · Seguir comprando ---------- */
const SEGUIR = [
  { name: 'Cuadernos de contabilidad año 2027', desc: '3 Unidades de 200 páginas por ud.', price: '19,99', old: '25,99', discount: '-20%', icon: ICONS.notebook },
  { name: 'Bolsas papel craft personalizables', desc: 'Desde 100 unidades. Diferentes tamaños y colores.', price: '29,99', old: '35,99', discount: '-20%', icon: ICONS.bag },
  { name: 'Pintura pared azul Klein P 286C', desc: 'Pintura anti-moho 500 ml.', price: '12,99', icon: ICONS.paint },
  { name: 'Pack platos y cubiertos biodegradables', desc: '25 unidades de cada por paquete: plato, tenedor, cuchillo y cuchara.', price: '9', icon: ICONS.plate },
  { name: 'Bolígrafos Mapet punta fina', desc: 'Tinta azul. Disponibles en variedad de colores.', price: '5', icon: ICONS.ballpen },
];

/* ---------- Códigos postales de La Habana → punto de recogida ---------- */
const HAVANA_PICKUPS = {
  '10100': 'Punto 1 · Habana Vieja',
  '10200': 'Punto 2 · Centro Habana',
  '10300': 'Punto 2 · Centro Habana',
  '10400': 'Punto 3 · Cerro',
  '10500': 'Punto 3 · Cerro',
  '10600': 'Punto 3 · Cerro',
  '10700': 'Punto 4 · Vedado',
  '10800': 'Punto 5 · Plaza de la Revolución',
  '11300': 'Punto 6 · Playa',
  '11900': 'Punto 7 · Diez de Octubre',
  '28012': 'Tienda Artex · C/ Alegría 9',
};

function pickupForZip(zip) {
  if (HAVANA_PICKUPS[zip]) return HAVANA_PICKUPS[zip];
  if (/^1[01]\d{3}$/.test(zip)) return 'Punto 1 · Centro Habana';
  return null;
}
