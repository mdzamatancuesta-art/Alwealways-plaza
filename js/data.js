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
  producto: '<path d="M6 7h12l-1 13H7zM9 7V5a3 3 0 0 1 6 0v2"/>',
  ruler: '<path d="M3 8h18v8H3zM7 8v3M11 8v4M15 8v3M19 8v4"/>',
  drill: '<path d="M3 8h9v5H3zM12 9h4l2 2M7 13v4M14 13l4 4"/>',
  vaso: '<path d="M7 4h10l-1.5 16h-7z"/>',
  cuenco: '<path d="M4 10h16a8 8 0 0 1-16 0z"/>',
  envases: '<path d="M6 3h12l-1 4H7zM7 7l1 13h8l1-13"/>',
  bolsa: '<path d="M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2"/>',
  papeleria: '<path d="M5 3h10l4 4v14H5zM15 3v4h4"/><path d="M8 12h7M8 16h7"/>',
  iluminacion: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
  cocina: '<path d="M6 3v7a3 3 0 0 0 6 0V3M9 3v18M17 3c-2 0-3 2-3 5s1 4 3 4v9"/>',
  bano: '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM7 12V6a2 2 0 0 1 4 0"/>',
  hogar: '<path d="M4 11l8-6 8 6M6 10v9h12v-9"/>',
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
  {
    id: 'papeleria',
    name: 'Papelería y ofimática',
    subs: [
      { name: 'Cuadernos y libretas' },
      { name: 'Escritura', groups: [
        { title: 'Bolígrafos y lápices', items: ['Bolígrafos', 'Lápices', 'Portaminas', 'Recambios'] },
        { title: 'Rotuladores', items: ['Marcadores', 'Fluorescentes', 'Punta fina'] },
      ] },
      { name: 'Papel y sobres' },
      { name: 'Archivo y organización' },
      { name: 'Material de oficina' },
      { name: 'Impresión y tinta' },
      { name: 'Manualidades' },
      { name: 'Material escolar' },
    ],
  },
  {
    id: 'fotografia',
    name: 'Fotografía',
    subs: [
      { name: 'Cámaras' },
      { name: 'Objetivos' },
      { name: 'Trípodes y soportes' },
      { name: 'Iluminación de estudio' },
      { name: 'Accesorios', groups: [
        { title: 'Almacenamiento', items: ['Tarjetas de memoria', 'Discos y fundas'] },
        { title: 'Energía', items: ['Baterías', 'Cargadores'] },
      ] },
      { name: 'Impresión fotográfica' },
      { name: 'Álbumes y marcos' },
    ],
  },
  {
    id: 'hogar',
    name: 'Hogar',
    subs: [
      { name: 'Cocina y menaje' },
      { name: 'Baño' },
      { name: 'Textil del hogar' },
      { name: 'Decoración' },
      { name: 'Organización y almacenaje' },
      { name: 'Limpieza' },
      { name: 'Iluminación' },
      { name: 'Mobiliario' },
    ],
  },
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
  { name: 'Teclado gamer RX500 Power Plus', desc: 'Teclado mecánico inalámbrico.', tag: 'Novedad', price: '29,99', icon: ICONS.keyboard, img: 'assets/products/teclado.jpg' },
  { name: 'Raton Gamer HERO T480', desc: 'Ratón inalámbrico hergonómico 36000 DPI 8 botones.', tag: 'Novedad', price: '25,99', icon: ICONS.mouse },
  { name: 'Waco pen digital S80', desc: 'Lápiz digital profesional para diseño gráfico y animación 3D.', tag: 'Novedad', price: '15', icon: ICONS.pen },
];

/* ---------- Home · Seguir comprando ---------- */
const SEGUIR = [
  { name: 'Cuadernos de contabilidad año 2027', desc: '3 Unidades de 200 páginas por ud.', price: '19,99', old: '25,99', discount: '-20%', icon: ICONS.notebook },
  { name: 'Bolsas papel craft personalizables', desc: 'Desde 100 unidades. Diferentes tamaños y colores.', price: '29,99', old: '35,99', discount: '-20%', icon: ICONS.bag, img: 'assets/products/env3.jpg' },
  { name: 'Pintura pared azul Klein P 286C', desc: 'Pintura anti-moho 500 ml.', price: '12,99', icon: ICONS.paint, img: 'assets/products/pintura.jpg' },
  { name: 'Pack platos y cubiertos biodegradables', desc: '25 unidades de cada por paquete: plato, tenedor, cuchillo y cuchara.', price: '9', icon: ICONS.plate, img: 'assets/products/env26.jpg' },
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

/* ---------- Categoría · subcategorías destacadas (Herramientas) ---------- */
const SECTION_CARDS = [
  { name: 'Herramientas eléctricas', icon: ICONS.drill },
  { name: 'Herramientas manuales', icon: ICONS.hammer },
  { name: 'Herramientas de medición', icon: ICONS.ruler },
  { name: 'Equipos de seguridad', icon: ICONS.helmet },
];

/* ---------- Catálogo genérico para listados (estilo mockup) ---------- */
function genProducts(n, opts = {}) {
  const icons = opts.icons || [ICONS.hammer, ICONS.wrench, ICONS.drill, ICONS.ruler, ICONS.producto, ICONS.helmet];
  const out = [];
  for (let i = 0; i < n; i++) {
    const disc = opts.discounts && i % 3 === 0;
    const item = {
      name: opts.names ? opts.names[i % opts.names.length] : 'Producto estupendo que no te puedes perder',
      desc: 'Hay males peores que no saber cómo poner un texto.',
      price: disc ? '19,99' : '25,99',
      icon: icons[i % icons.length],
    };
    if (disc) { item.old = '25,99'; item.discount = '-20%'; }
    else if (i % 4 === 1) item.tag = 'Novedad';
    else if (i % 4 === 2) item.badge = 'Más vendido';
    out.push(item);
  }
  return out;
}

const DESTACADOS = [
  { name: 'Multiherramienta Ultra Power 3000', desc: 'Rotativa apta para uso profesional. Corte, lijado y grabado de precisión.', price: '25,99', tag: 'Novedad', icon: ICONS.drill, img: 'assets/products/dremel.jpg' },
  { name: 'Set de herramientas HomeMaster', desc: 'Kit completo para bricolaje y reparaciones del hogar.', price: '25,99', tag: 'Novedad', icon: ICONS.producto, img: 'assets/products/herramientas.jpg' },
  { name: 'Teclado gamer RX500 Power Plus', desc: 'Teclado mecánico inalámbrico retroiluminado.', price: '25,99', tag: 'Novedad', icon: ICONS.keyboard, img: 'assets/products/teclado.jpg' },
];

/* ---------- Info y datos por página de categoría ---------- */
const CATEGORY_INFO = {
  brico: { name: 'Bricolaje y construcción', desc: 'Herramientas, materiales y todo lo necesario para tus proyectos de construcción y reforma.' },
  envases: { name: 'Envases y embalajes', desc: 'Envases biodegradables y de marca blanca: vasos, cajas take away, cuencos, platos, bolsas y más.' },
  papeleria: { name: 'Papelería y ofimática', desc: 'Cuadernos, escritura, material de oficina e impresión para el día a día y tu empresa.' },
  fotografia: { name: 'Fotografía', desc: 'Cámaras, objetivos, iluminación y accesorios para profesionales y aficionados.' },
  hogar: { name: 'Hogar', desc: 'Cocina, baño, textil, decoración y organización para tu casa.' },
};

// Iconos para las tarjetas de subcategoría de cada categoría.
const SUB_ICONS = {
  brico: [ICONS.drill, ICONS.hammer, ICONS.ruler, ICONS.helmet],
  envases: [ICONS.vaso, ICONS.cuenco, ICONS.envases, ICONS.bolsa],
  papeleria: [ICONS.notebook, ICONS.ballpen, ICONS.papeleria, ICONS.printer],
  fotografia: [ICONS.producto, ICONS.producto, ICONS.iluminacion, ICONS.producto],
  hogar: [ICONS.cocina, ICONS.bano, ICONS.hogar, ICONS.iluminacion],
};

function sectionCardsFor(id) {
  const cat = CATEGORIES.find((c) => c.id === id);
  const icons = SUB_ICONS[id] || [];
  return (cat ? cat.subs.slice(0, 4) : []).map((s, i) => ({ name: s.name, icon: icons[i] || ICONS.producto }));
}

function productsForCategory(id) {
  if (id === 'envases') return ENVASES_PRODUCTS;
  if (id === 'brico') return DESTACADOS.concat(genProducts(7));
  if (id === 'papeleria') return genProducts(10, {
    names: ['Cuaderno de contabilidad 2027', 'Bolígrafos punta fina (pack)', 'Pack de folios A4 500 h', 'Organizador de escritorio', 'Rotuladores fluorescentes', 'Tinta para impresora', 'Grapadora metálica', 'Set de manualidades', 'Archivador de anillas', 'Lápices de colores'],
    icons: [ICONS.notebook, ICONS.ballpen, ICONS.papeleria, ICONS.printer],
  });
  if (id === 'fotografia') return genProducts(10, {
    names: ['Cámara compacta 20 MP', 'Objetivo 50 mm f/1.8', 'Trípode de aluminio', 'Foco LED de estudio', 'Tarjeta de memoria 128 GB', 'Batería recargable', 'Álbum de fotos 200', 'Marco de madera A4', 'Flash externo', 'Fondo fotográfico'],
    icons: [ICONS.producto, ICONS.iluminacion, ICONS.ruler],
  });
  if (id === 'hogar') return genProducts(10, {
    names: ['Set de sartenes antiadherentes', 'Juego de toallas', 'Lámpara de mesa LED', 'Organizador de armario', 'Vajilla 12 piezas', 'Cortina de baño', 'Cojín decorativo', 'Estantería modular', 'Set de limpieza', 'Cubo con tapa'],
    icons: [ICONS.cocina, ICONS.hogar, ICONS.iluminacion, ICONS.bano],
  });
  return genProducts(10);
}

/* ---------- Carrito ---------- */
const CART_ITEMS = [
  { name: 'Raton Gamer Hero T480', desc: 'Equipado con el sensor óptico PrecisionCore T3, el HERO T4…', seller: 'E&E', price: 25.99, qty: 10, icon: ICONS.mouse },
  { name: 'Martillo Multiusos HomeMaster', desc: 'La herramienta maravilla adecuada para el uso doméstico…', seller: 'Alzan', price: 13.99, qty: 1, icon: ICONS.hammer },
  { name: 'Pack platos y cubiertos biodegradables', desc: '12 piezas de platos de cartón craft, tenedores, cuchillos y c…', seller: 'E&E', price: 5.99, qty: 1, icon: ICONS.plate },
];

/* ---------- Envases y embalajes (fotos reales, marca blanca) ---------- */
const ENVASES_PRODUCTS = [
  { name: 'Bolsa de papel kraft con asa plana', desc: 'Desde 100 uds. Varios tamaños. Biodegradable.', price: '12,99', tag: 'Novedad', img: 'assets/products/env3.jpg' },
  { name: 'Bolsa de papel kraft con asa rizada', desc: 'Desde 100 uds. Resistente y reutilizable.', price: '14,50', img: 'assets/products/env4.jpg' },
  { name: 'Bolsa de papel blanca', desc: 'Desde 100 uds. Ideal para take away.', price: '11,99', img: 'assets/products/env5.jpg' },
  { name: 'Caja de pizza kraft', desc: 'Desde 50 uds. Cartón corrugado resistente.', price: '19,90', badge: 'Más vendido', img: 'assets/products/env8.jpg' },
  { name: 'Envase take away kraft', desc: 'Con cierre. Apto para alimentos calientes.', price: '9,90', old: '12,90', discount: '-20%', img: 'assets/products/env21.jpg' },
  { name: 'Cuenco kraft biodegradable', desc: 'Desde 50 uds. 500 ml. Para sopas y ensaladas.', price: '8,50', img: 'assets/products/env19.jpg' },
  { name: 'Cuenco blanco con tapa', desc: 'Desde 50 uds. Cierre hermético.', price: '10,00', img: 'assets/products/env18.jpg' },
  { name: 'Plato de caña kraft (24 uds)', desc: 'Biodegradable y compostable.', price: '9,90', tag: 'Novedad', img: 'assets/products/env26.jpg' },
  { name: 'Plato blanco de cartón (24 uds)', desc: 'Resistente y ligero.', price: '7,50', img: 'assets/products/env27.jpg' },
  { name: 'Vaso de cartón kraft', desc: 'Desde 50 uds. 50 ml. Doble capa.', price: '5,00', badge: 'Más vendido', img: 'assets/products/env40.jpg' },
  { name: 'Vaso corrugado kraft con tapa', desc: 'Desde 100 uds. Bebida caliente 35 ml.', price: '19,90', img: 'assets/products/env39.jpg' },
  { name: 'Vaso de papel blanco', desc: 'Desde 50 uds. 25 ml. Personalizable.', price: '12,00', tag: 'Novedad', img: 'assets/products/env38.jpg' },
  { name: 'Cubiertos de madera desechables', desc: 'Tenedor, cuchara y cuchillo. Desde 50 packs.', price: '7,90', img: 'assets/products/env14.jpg' },
  { name: 'Cañitas de papel de colores', desc: 'Desde 100 uds. Biodegradables.', price: '4,50', img: 'assets/products/env12.jpg' },
  { name: 'Porta-vasos de fibra moldeada', desc: 'Para 4 vasos. Transporte seguro.', price: '6,90', img: 'assets/products/env23.jpg' },
];

/* ---------- Favoritos ---------- */
const FAV_LISTS = [
  { name: 'Reforma de casa', count: 8 },
  { name: 'Cumple de Ana', count: 5 },
];
