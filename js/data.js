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
        links: [
          { label: 'Servicios para empresas', href: 'servicios.html#empresas' },
          { label: 'Planificación y asesoramiento', href: 'servicios.html#planificacion' },
          { label: 'Reformas y construcciones', href: 'servicios.html#reformas' },
          { label: 'Personalización de productos', href: 'personalizacion.html' },
          { label: 'Envíos a domicilio y recogida', href: 'servicios.html#envios' },
        ],
      },
      { name: 'Always Market' },
      { name: 'Always Sanguar' },
    ],
  },
];

/* ---------- Home · Novedades ---------- */
const NOVEDADES = [
  { name: 'Impresora Camon MX3 Serie 5000T', desc: 'Impresora de tinta inyectada multiformato A3 A4 A2 digital.', tag: 'Novedad', price: '59,99', icon: ICONS.printer, img: 'assets/products/px4792283.jpg' },
  { name: 'Teclado gamer RX500 Power Plus', desc: 'Teclado mecánico inalámbrico.', tag: 'Novedad', price: '29,99', icon: ICONS.keyboard, img: 'assets/products/teclado.jpg' },
  { name: 'Raton Gamer HERO T480', desc: 'Ratón inalámbrico hergonómico 36000 DPI 8 botones.', tag: 'Novedad', price: '25,99', icon: ICONS.mouse, img: 'assets/products/px20510001.jpg' },
  { name: 'Waco pen digital S80', desc: 'Lápiz digital profesional para diseño gráfico y animación 3D.', tag: 'Novedad', price: '15', icon: ICONS.pen, img: 'assets/products/px7987849.jpg' },
];

/* ---------- Home · Seguir comprando ---------- */
const SEGUIR = [
  { name: 'Cuadernos de contabilidad año 2027', desc: '3 Unidades de 200 páginas por ud.', price: '19,99', old: '25,99', discount: '-20%', icon: ICONS.notebook, img: 'assets/products/px8099385.jpg' },
  { name: 'Bolsas papel craft personalizables', desc: 'Desde 100 unidades. Diferentes tamaños y colores.', price: '29,99', old: '35,99', discount: '-20%', icon: ICONS.bag, img: 'assets/products/env3.jpg' },
  { name: 'Pintura pared azul Klein P 286C', desc: 'Pintura anti-moho 500 ml.', price: '12,99', icon: ICONS.paint, img: 'assets/products/px6764238.jpg' },
  { name: 'Pack platos y cubiertos biodegradables', desc: '25 unidades de cada por paquete: plato, tenedor, cuchillo y cuchara.', price: '9', icon: ICONS.plate, img: 'assets/products/env26.jpg' },
  { name: 'Bolígrafos Mapet punta fina', desc: 'Tinta azul. Disponibles en variedad de colores.', price: '5', icon: ICONS.ballpen, img: 'assets/products/px5706218.jpg' },
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

/* ---------- Always Points · puntos de recogida en La Habana ---------- */
const PICKUP_POINTS = [
  { n: 1, name: 'Habana Vieja', address: 'Calle Obispo 253, entre Cuba y Aguiar', cp: '10100', hours: 'Lun–Sáb 9:00–18:00', phone: '(+53) 7 861 0100' },
  { n: 2, name: 'Centro Habana', address: 'Av. Galiano 120, esq. Ánimas', cp: '10200 · 10300', hours: 'Lun–Sáb 9:00–19:00', phone: '(+53) 7 862 0200' },
  { n: 3, name: 'Cerro', address: 'Calzada del Cerro 1550', cp: '10400 · 10500 · 10600', hours: 'Lun–Sáb 9:00–18:00', phone: '(+53) 7 863 0300' },
  { n: 4, name: 'Vedado', address: 'Calle 23 nº 456, entre H e I', cp: '10700', hours: 'Lun–Dom 9:00–20:00', phone: '(+53) 7 830 0400' },
  { n: 5, name: 'Plaza de la Revolución', address: 'Av. Paseo nº 30', cp: '10800', hours: 'Lun–Sáb 9:00–18:00', phone: '(+53) 7 830 0500' },
  { n: 6, name: 'Playa', address: '5ta Avenida nº 8801, esq. 88', cp: '11300', hours: 'Lun–Dom 9:00–20:00', phone: '(+53) 7 204 0600' },
  { n: 7, name: 'Diez de Octubre', address: 'Calzada de 10 de Octubre nº 456', cp: '11900', hours: 'Lun–Sáb 9:00–18:00', phone: '(+53) 7 649 0700' },
];

/* ---------- Categoría · subcategorías destacadas (Herramientas) ---------- */
const SECTION_CARDS = [
  { name: 'Herramientas eléctricas', icon: ICONS.drill },
  { name: 'Herramientas manuales', icon: ICONS.hammer },
  { name: 'Herramientas de medición', icon: ICONS.ruler },
  { name: 'Equipos de seguridad', icon: ICONS.helmet },
];

/* ---------- Catálogo genérico para listados (estilo mockup) ---------- */
// Galería de fotos reales disponibles (marca blanca) para productos provisionales.
const PHOTO_POOL = [
  'assets/products/teclado.jpg', 'assets/products/dremel.jpg', 'assets/products/herramientas.jpg',
  'assets/products/llaves.jpg', 'assets/products/pintura.jpg', 'assets/products/env8.jpg',
  'assets/products/env40.jpg', 'assets/products/env26.jpg', 'assets/products/env18.jpg', 'assets/products/env3.jpg',
];

// Foto real (banco de imágenes) asignada por nombre exacto de producto.
const PRODUCT_PHOTOS = {
  'Impresora Camon MX3 Serie 5000T': 'assets/products/px4792283.jpg',
  'Raton Gamer HERO T480': 'assets/products/px20510001.jpg',
  'Waco pen digital S80': 'assets/products/px7987849.jpg',
  'Cuadernos de contabilidad año 2027': 'assets/products/px8099385.jpg',
  'Pintura pared azul Klein P 286C': 'assets/products/px6764238.jpg',
  'Bolígrafos Mapet punta fina': 'assets/products/px5706218.jpg',
  // Bricolaje
  'Pintura pared mate 4L': 'assets/products/px6764238.jpg',
  'Nivel láser autonivelante': 'assets/products/px6474311.jpg',
  'Cinta métrica 5 m': 'assets/products/px19658254.jpg',
  // Papelería
  'Cuaderno de contabilidad 2027': 'assets/products/px8099385.jpg',
  'Bolígrafos punta fina (pack 12)': 'assets/products/px5706218.jpg',
  'Pack de folios A4 500 h': 'assets/products/px4464918.jpg',
  'Rotuladores fluorescentes': 'assets/products/px5594285.jpg',
  'Grapadora metálica': 'assets/products/px227383.jpg',
  'Set de subrayadores pastel': 'assets/products/px6969285.jpg',
  'Archivador de palanca A4': 'assets/products/px8970658.jpg',
  'Tijeras de oficina': 'assets/products/px7280632.jpg',
  'Notas adhesivas de colores': 'assets/products/px6991389.jpg',
  'Portaminas 0.5 mm': 'assets/products/px983827.jpg',
  'Cinta adhesiva transparente': 'assets/products/px5691627.jpg',
  'Agenda anual 2027': 'assets/products/px5594267.jpg',
  'Sobres blancos (pack 50)': 'assets/products/px4722000.jpg',
};

// Pool de fotos reales por categoría (orden ~ productos de esa categoría).
const FOTO_POOL = [
  'assets/products/px17924459.jpg', 'assets/products/px13820811.jpg', 'assets/products/px25526511.jpg',
  'assets/products/px28772529.jpg', 'assets/products/px1738642.jpg', 'assets/products/px34642454.jpg',
  'assets/products/px10913160.jpg', 'assets/products/px3244608.jpg', 'assets/products/px15631397.jpg',
  'assets/products/px7772524.jpg', 'assets/products/px28772530.jpg', 'assets/products/px19486350.jpg',
  'assets/products/px10922591.jpg', 'assets/products/px30675879.jpg', 'assets/products/px2147080.jpg',
  'assets/products/px11294012.jpg',
];
const HOGAR_POOL = [
  'assets/products/px1194432.jpg', 'assets/products/px4107959.jpg', 'assets/products/px1552616.jpg',
  'assets/products/px18984533.jpg', 'assets/products/px17542995.jpg', 'assets/products/px31902663.jpg',
  'assets/products/px4397797.jpg', 'assets/products/px3962340.jpg', 'assets/products/px30353221.jpg',
  'assets/products/px4202503.jpg', 'assets/products/px6837423.jpg', 'assets/products/px34061950.jpg',
  'assets/products/px28146523.jpg', 'assets/products/px8259233.jpg', 'assets/products/px11889255.jpg',
  'assets/products/px6633445.jpg', 'assets/products/px3946250.jpg', 'assets/products/px269318.jpg',
];

function genProducts(n, opts = {}) {
  const icons = opts.icons || [ICONS.hammer, ICONS.wrench, ICONS.drill, ICONS.ruler, ICONS.producto, ICONS.helmet];
  const photos = opts.photos || PHOTO_POOL; // todos los productos llevan foto (galería de marca blanca)
  const out = [];
  for (let i = 0; i < n; i++) {
    const disc = opts.discounts && i % 3 === 0;
    const item = {
      name: opts.names ? opts.names[i % opts.names.length] : 'Producto estupendo que no te puedes perder',
      desc: 'Hay males peores que no saber cómo poner un texto.',
      price: disc ? '19,99' : '25,99',
      icon: icons[i % icons.length],
    };
    // Foto específica por nombre si existe; si no, la del pool.
    item.img = PRODUCT_PHOTOS[item.name] || (photos ? photos[i % photos.length] : undefined);
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
  // 15 productos provisionales por categoría, todos con foto de la galería.
  if (id === 'envases') return ENVASES_PRODUCTS.slice(0, 15);
  if (id === 'brico') return genProducts(15, {
    names: ['Taladro percutor 750W', 'Set de herramientas HomeMaster', 'Llave inglesa ajustable', 'Pintura pared mate 4L', 'Martillo de carpintero', 'Juego de destornilladores 6 pzas', 'Sierra de mano universal', 'Nivel láser autonivelante', 'Caja de tornillos surtidos', 'Guantes de trabajo reforzados', 'Cinta métrica 5 m', 'Taladro atornillador 18V', 'Alicate universal', 'Gafas de protección', 'Rodillo de pintura antigoteo'],
    icons: [ICONS.drill, ICONS.producto, ICONS.wrench, ICONS.paint, ICONS.hammer, ICONS.ruler, ICONS.helmet],
  });
  if (id === 'papeleria') return genProducts(15, {
    names: ['Cuaderno de contabilidad 2027', 'Bolígrafos punta fina (pack 12)', 'Pack de folios A4 500 h', 'Organizador de escritorio', 'Rotuladores fluorescentes', 'Grapadora metálica', 'Set de subrayadores pastel', 'Archivador de palanca A4', 'Tijeras de oficina', 'Calculadora científica', 'Notas adhesivas de colores', 'Portaminas 0.5 mm', 'Cinta adhesiva transparente', 'Agenda anual 2027', 'Sobres blancos (pack 50)'],
    icons: [ICONS.notebook, ICONS.ballpen, ICONS.papeleria, ICONS.printer],
  });
  if (id === 'fotografia') return genProducts(15, {
    names: ['Cámara compacta 20 MP', 'Objetivo 50 mm f/1.8', 'Trípode de aluminio', 'Foco LED de estudio', 'Tarjeta de memoria 128 GB', 'Flash externo speedlite', 'Bolsa acolchada para cámara', 'Filtro polarizador 58 mm', 'Estabilizador gimbal', 'Fondo fotográfico blanco', 'Reflector plegable 5 en 1', 'Batería recargable', 'Objetivo gran angular', 'Aro de luz LED', 'Kit de limpieza de lentes'],
    icons: [ICONS.producto, ICONS.iluminacion, ICONS.ruler], photos: FOTO_POOL,
  });
  if (id === 'hogar') return genProducts(15, {
    names: ['Set de sartenes antiadherentes', 'Juego de toallas (4 pzas)', 'Lámpara de mesa LED', 'Organizador de armario', 'Vajilla 12 piezas', 'Juego de sábanas', 'Set de cuchillos de cocina', 'Cesto de la colada plegable', 'Cortina de baño impermeable', 'Batidora de mano', 'Juego de tazas de café', 'Alfombra de baño', 'Perchas de terciopelo (pack)', 'Recipientes herméticos (set)', 'Manta de sofá'],
    icons: [ICONS.cocina, ICONS.hogar, ICONS.iluminacion, ICONS.bano], photos: HOGAR_POOL,
  });
  return genProducts(15, {});
}

/* ---------- Carrito ---------- */
const CART_ITEMS = [
  { name: 'Raton Gamer Hero T480', desc: 'Equipado con el sensor óptico PrecisionCore T3, el HERO T4…', seller: 'E&E', price: 25.99, qty: 10, icon: ICONS.mouse, img: 'assets/products/teclado.jpg' },
  { name: 'Martillo Multiusos HomeMaster', desc: 'La herramienta maravilla adecuada para el uso doméstico…', seller: 'Alzan', price: 13.99, qty: 1, icon: ICONS.hammer, img: 'assets/products/herramientas.jpg' },
  { name: 'Pack platos y cubiertos biodegradables', desc: '12 piezas de platos de cartón craft, tenedores, cuchillos y c…', seller: 'E&E', price: 5.99, qty: 1, icon: ICONS.plate, img: 'assets/products/env26.jpg' },
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
