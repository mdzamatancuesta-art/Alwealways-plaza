/* ============================================================
   Always Plaza — Chrome compartido (topbar, header, mega menú,
   modal CP, drawer móvil y footer) inyectado en todas las páginas.
   Requiere: logo.js, data.js (cargados antes).
   ============================================================ */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const svg = (p, cls = 'h-6 w-6') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const OI = {"globe":{"vb":"0 0 24 24","inner":"<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M2 12H22\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22C14.2092 22 16 17.5229 16 12C16 6.47715 14.2092 2 12 2C9.79085 2 8 6.47715 8 12C8 17.5229 9.79085 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.92896 5.07104C6.7386 6.88069 9.2386 7.99999 12 7.99999C14.7615 7.99999 17.2615 6.88069 19.0711 5.07104\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M19.0711 18.9289C17.2615 17.1193 14.7615 16 12 16C9.2386 16 6.7386 17.1193 4.92896 18.9289\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"truck":{"vb":"0 0 68 68","inner":"<path d=\"M18.25 20H37.5C38.4665 20 39.25 20.7835 39.25 21.75V41C39.25 41.9665 38.4665 42.75 37.5 42.75H18.25C17.2835 42.75 16.5 41.9665 16.5 41V21.75C16.5 20.7835 17.2835 20 18.25 20Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M51.5 42.75H39.25V30.5H45.375L51.5 36.1538V42.75Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M39.25 44.5C39.25 46.433 40.817 48 42.75 48C44.683 48 46.25 46.433 46.25 44.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20 44.5C20 46.433 21.567 48 23.5 48C25.433 48 27 46.433 27 44.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"pin":{"vb":"0 0 24 24","inner":"<path d=\"M12 22C12 22 19.5 16 19.5 9.5C19.5 5.35785 16.1421 2 12 2C7.85785 2 4.5 5.35785 4.5 9.5C4.5 16 12 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M12 12.5C13.6568 12.5 15 11.1568 15 9.5C15 7.84315 13.6568 6.5 12 6.5C10.3432 6.5 9 7.84315 9 9.5C9 11.1568 10.3432 12.5 12 12.5Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/>"},"store":{"vb":"0 0 68 68","inner":"<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.875 25.25L51.5 34V51.5H27.875V25.25Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M27.875 25.25L16.5 34V51.5H27.875\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M43.625 51.5V41L35.75 38.375V51.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M51.5 51.5H27.875\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"menu":{"vb":"0 0 24 24","inner":"<path d=\"M21 4.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17 9.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M21 14.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17 19.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"user":{"vb":"0 0 24 24","inner":"<path d=\"M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M21 22C21 17.0294 16.9706 13 12 13C7.02945 13 3 17.0294 3 22\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"heart":{"vb":"0 0 44 44","inner":"<path d=\"M17.5 14C14.4624 14 12 16.4625 12 19.5C12 25 18.5 30 22 31.1631C25.5 30 32 25 32 19.5C32 16.4625 29.5375 14 26.5 14C24.6399 14 22.9954 14.9235 22 16.3369C21.0046 14.9235 19.3601 14 17.5 14Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"bag":{"vb":"0 0 24 24","inner":"<path d=\"M19 7H5C4.44772 7 4 7.44772 4 8V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V8C20 7.44772 19.5523 7 19 7Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8.5 9V5.5C8.5 3.56701 10.067 2 12 2C13.933 2 15.5 3.56701 15.5 5.5V9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"}};
  const oi = (name, cls = 'h-5 w-5') => { const o = OI[name]; return o ? `<svg class="${cls}" viewBox="${o.vb}" fill="none" aria-hidden="true">${o.inner}</svg>` : ''; };

  /* ---------- Idiomas (i18n) ---------- */
  let LANG = 'es';
  try { LANG = localStorage.getItem('ap_lang') || 'es'; } catch (e) {}
  const T = {
    es: {
      shipBanner: 'Envío a domicilio solo disponible en La Habana', addCp: 'Añadir CP', pickup: 'Punto recogida',
      searchPh: '¿Qué estás buscando?', login: 'Inicia sesión', favAria: 'Favoritos', cartAria: 'Cesta de la compra',
      cookieTitle: '🍪 Usamos cookies',
      cookieText: 'Utilizamos cookies propias y de terceros para el funcionamiento del sitio, analizar el tráfico y personalizar el contenido. Puedes aceptarlas todas, rechazarlas o configurarlas. Más información en nuestra ',
      cookiePolicy: 'Política de cookies', cReject: 'Rechazar', cConfig: 'Configurar', cAccept: 'Aceptar todas',
      cpTitle: 'Añade tu código postal',
      cpText1: 'Enviamos pedidos a domicilio en toda La Habana. Para pedidos fuera de La Habana disponemos de puntos de recogida <em>Always Points</em>.',
      cpText2: 'Al añadir tu código postal verás tu punto de recogida o tienda más cercana.',
      cpLabel: 'Introduce tu código postal (Ejemplo: 28012)', cpConfirm: 'Confirmar',
      fBuy: 'Comprar', fServices: 'Servicios', fArea: 'Área personal', fInfo: 'Información',
      fOffers: 'Ofertas', fReturns: 'Devoluciones', fShipping: 'Envíos', fPickup: 'Puntos de recogida', fFaq: 'Preguntas frecuentes',
      fContact: 'Contacta', fProfile: 'Mi perfil', fLists: 'Mis listas', fBilling: 'Pagos y facturas',
      fEmpresas: 'Servicios para empresas', fPlan: 'Planificación y asesoramiento', fReformas: 'Reformas y construcciones', fPersonaliz: 'Personalización de productos', fImprenta: 'Imprenta y reprografía',
      fTagline: 'Always Plaza pertenece a Grupo Empresarial Alzara. Always Plaza es el Marketplace para comprar desde cualquier parte del mundo con envíos a La Habana, especializado en productos y servicios de las marcas E&E y Alzan.',
      legalAviso: 'Aviso legal', legalPriv: 'Política de privacidad', legalCookies: 'Política de cookies', legalTerms: 'Condiciones de compra', legalReturns: 'Devoluciones', legalShip: 'Envíos', legalFaq: 'Preguntas frecuentes', cookieSettings: 'Configurar cookies',
      copyright: '© 2026 Always Plaza. Todos los derechos reservados.', currency: 'Moneda: Euro (€) · Idioma: Español',
      verTodo: 'Ver todo en',
      home_offers_title: 'Ofertas de<br />primavera', home_offers_text: 'Los imprescindibles para el último empujón del curso escolar al mejor precio.', home_see_offers: 'Ver ofertas',
      home_offers_badge: 'Hasta -30%', home_offers_text2: 'Renueva tu hogar, tu oficina y tus proyectos esta primavera con descuentos en miles de productos.',
      home_novedades: 'Novedades', home_novedades_card: '¡Descubre más de 20 artículos de la nueva colección de ofimática y papelería!',
      home_seguir: 'Seguir comprando', home_envases: 'Envases y embalajes', home_whitelabel: 'Marca blanca', home_vertodo: 'Ver todo',
      home_proyecto: 'Crea tu proyecto', home_alzan_title: 'Dale forma a tu gran proyecto con Alzan', home_alzan_text: '¿Pensando en renovar? Todavía más fácil con nuestros servicios personalizados para reformas y construcciones. Escríbenos a infoproyecto@always.com', home_presupuesto: 'Pide presupuesto gratis para cambiar suelos y paredes',
    },
    en: {
      shipBanner: 'Home delivery only available in Havana', addCp: 'Add ZIP', pickup: 'Pickup point',
      searchPh: 'What are you looking for?', login: 'Sign in', favAria: 'Favourites', cartAria: 'Shopping cart',
      cookieTitle: '🍪 We use cookies',
      cookieText: 'We use our own and third-party cookies to run the site, analyse traffic and personalise content. You can accept all, reject them or configure them. More information in our ',
      cookiePolicy: 'Cookie Policy', cReject: 'Reject', cConfig: 'Configure', cAccept: 'Accept all',
      cpTitle: 'Add your postal code',
      cpText1: 'We deliver to your door across Havana. For orders outside Havana we have <em>Always Points</em> pickup locations.',
      cpText2: 'When you add your postal code you will see your nearest pickup point or store.',
      cpLabel: 'Enter your postal code (Example: 28012)', cpConfirm: 'Confirm',
      fBuy: 'Shop', fServices: 'Services', fArea: 'My account', fInfo: 'Information',
      fOffers: 'Offers', fReturns: 'Returns', fShipping: 'Shipping', fPickup: 'Pickup points', fFaq: 'FAQ',
      fContact: 'Contact', fProfile: 'My profile', fLists: 'My lists', fBilling: 'Payments & invoices',
      fEmpresas: 'Business services', fPlan: 'Planning & consulting', fReformas: 'Renovations & construction', fPersonaliz: 'Product customisation', fImprenta: 'Printing & reprography',
      fTagline: 'Always Plaza is part of Grupo Empresarial Alzara. Always Plaza is the marketplace to shop from anywhere in the world with delivery to Havana, specialising in products and services from the E&E and Alzan brands.',
      legalAviso: 'Legal notice', legalPriv: 'Privacy policy', legalCookies: 'Cookie policy', legalTerms: 'Terms of purchase', legalReturns: 'Returns', legalShip: 'Shipping', legalFaq: 'FAQ', cookieSettings: 'Cookie settings',
      copyright: '© 2026 Always Plaza. All rights reserved.', currency: 'Currency: Euro (€) · Language: English',
      verTodo: 'See all in',
      home_offers_title: 'Spring<br />offers', home_offers_text: 'The essentials for the final stretch of the school year at the best price.', home_see_offers: 'See offers',
      home_offers_badge: 'Up to -30%', home_offers_text2: 'Refresh your home, office and projects this spring with discounts on thousands of products.',
      home_novedades: 'New arrivals', home_novedades_card: 'Discover more than 20 items from the new office & stationery collection!',
      home_seguir: 'Keep shopping', home_envases: 'Packaging', home_whitelabel: 'White label', home_vertodo: 'See all',
      home_proyecto: 'Create your project', home_alzan_title: 'Shape your big project with Alzan', home_alzan_text: 'Thinking of renovating? Even easier with our custom services for renovations and construction. Write to us at infoproyecto@always.com', home_presupuesto: 'Get a free quote to change floors and walls',
    },
  };
  const t = (k) => (T[LANG] && T[LANG][k] != null) ? T[LANG][k] : (T.es[k] != null ? T.es[k] : k);
  const CAT_EN = { brico: 'DIY & construction', envases: 'Packaging', papeleria: 'Stationery & office', fotografia: 'Photography', hogar: 'Home', servicios: 'Services' };
  const catName = (c) => (LANG === 'en' && CAT_EN[c.id]) ? CAT_EN[c.id] : c.name;
  // Icono de la cesta (bolsa line-art). El contador se superpone aparte.
  const BAG_ICON = (cls = 'h-7 w-7') => `<svg class="${cls}" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12.5 18.5H31.5L29.4 31.5H14.6L12.5 18.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.5 18.5C27.5 15.1863 25.0375 12.5 22 12.5C18.9625 12.5 16.5 15.1863 16.5 18.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  // Navegación: usa el router de la vista previa (artifact) si existe; si no, navega de verdad.
  const nav = (href) => { if (window.__apNav) window.__apNav(href); else window.location.href = href; };
  // Isotipo (marca de agua) reutilizable. pathLength=1 permite animar el trazado.
  const ISO_PATH = "M264.8,165.4c-.5-2.3-19.2-64.5-22.7-75.1-3.7-11-8.8-15.9-19-15.9s-18.9,7.3-57.9,57.9c-8.6,11.2-19.7,25.7-29,37-.7-9.9-1.2-21-1.5-29.3-1.9-45.1-2.9-67.7-25-67.7s-21.6,10.7-55.4,61c-5.2,7.7-11.4,17-17.5,25.8-.2-7.1-.4-15-.5-23.4V0H0v157.8c0,7.9.3,15.9,1,23.8.6,6.5,1.4,14,2.3,19.6,1.2,7,6.4,14,13,16.8,6.5,2.8,14.2,2.3,19.8-2,9.7-7.3,22-24.8,47.7-62.9,4.4-6.6,9.7-14.4,14.8-21.8.2,3.6.3,7,.5,10.2,2.1,49.4,3.4,79.3,28,79.3s23.4-10.9,66.3-66.7c6.9-8.9,15-19.5,22.1-28.4,1.4,4.6,8.6,25.5,15.9,47.9,1.9,5.7,4.9,15.3,9,23.7,7.4,15.3,24,18,34,7.4,5.7-6,10.6-12.8,15.7-19.2,11.8-14.9,23.3-30,34.9-45.1s3.2-6,3.2-9.4h0c0-14.3-17.8-20.9-27.1-10.1-15.3,17.9-28.4,35.6-36.3,44.5Z";
  const isoSVG = (svgCls, pathCls = '') => `<svg class="${svgCls}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.1 220.7" aria-hidden="true"><path class="${pathCls}" pathLength="1" d="${ISO_PATH}"/></svg>`;
  // Animación de carga: el isotipo se dibuja solo (trazado + relleno) en bucle.
  (function(){
    if (document.getElementById('ap-loader')) return;
    const l = document.createElement('div');
    l.id = 'ap-loader';
    l.innerHTML = '<div class="ap-loader-box">'+isoSVG('ap-iso','ap-iso-path')+'</div>';
    (document.body||document.documentElement).insertAdjacentElement('afterbegin', l);
    const MIN = 2600, t0 = (window.performance && performance.now()) || Date.now();
    const doHide = () => { l.classList.add('is-hidden'); setTimeout(()=>l.remove(), 500); };
    const hide = () => { const now = (window.performance && performance.now()) || Date.now(); setTimeout(doHide, Math.max(0, MIN - (now - t0))); };
    if (document.readyState === 'complete') hide(); else window.addEventListener('load', hide);
    setTimeout(doHide, 6000);
  })();
  const PAGE = document.body.dataset.page || '';

  /* ---------- Markup ---------- */
  const headerHTML = `
  <div id="topbar" class="fixed inset-x-0 top-0 z-50 h-[46px] bg-night text-white transition-transform duration-300">
    <div class="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-4 md:px-8">
      <div class="relative shrink-0">
        <button id="langBtn" class="flex items-center gap-2 py-1.5 text-[13px] transition-colors hover:text-white/70" aria-haspopup="true" aria-expanded="false">
          ${oi('globe','h-4 w-4')}
          <span id="langLabel">${LANG==='en'?'English':'Español'}</span>
        </button>
        <div id="langMenu" class="absolute left-0 top-full mt-2 hidden w-36 overflow-hidden rounded-xl bg-white text-night shadow-softlg">
          <button data-lang="es" class="flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-lowgrey">🇪🇸 Español</button>
          <button data-lang="en" class="flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-lowgrey">🇬🇧 English</button>
        </div>
      </div>
      <div class="hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex">
        ${oi('truck','h-4 w-4 shrink-0 text-white/70')}
        <p class="truncate text-[13px] text-white/90">${t('shipBanner')}</p>
      </div>
      <div class="flex shrink-0 items-center gap-4">
        <button id="cpBtn" class="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
          ${oi('pin','h-4 w-4 shrink-0')}
          <span id="cpLabel">${t('addCp')}</span>
        </button>
        <button id="pickupBtn" class="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
          ${oi('store','h-4 w-4 shrink-0')}
          <span id="pickupLabel" class="max-w-[160px] truncate">${t('pickup')}</span>
        </button>
      </div>
    </div>
  </div>

  <div class="h-[46px]" aria-hidden="true"></div>

  <header id="header" class="sticky top-0 z-40 bg-white transition-[top] duration-300" style="top:46px">
    <div class="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3.5 md:px-8">
      <button id="mobileMenuBtn" class="grid h-10 w-10 shrink-0 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey lg:hidden" aria-label="Abrir menú">
        ${oi('menu','h-6 w-6')}
      </button>
      <a href="index.html" class="logo logo--blue shrink-0" aria-label="Always Plaza — Inicio"></a>
      <form id="searchForm" class="relative mx-auto hidden w-full max-w-xl md:block">
        <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mediumgrey">${svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>', 'h-5 w-5')}</span>
        <input id="searchInput" type="search" placeholder="${t('searchPh')}" class="w-full rounded-full border border-nicegrey bg-white py-2.5 pl-12 pr-4 text-[15px] text-night placeholder:text-lowvis transition-shadow focus:border-b2b focus:shadow-soft focus:outline-none" aria-label="Buscar productos" />
      </form>
      <div class="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
        <button id="mobileSearchBtn" class="grid h-10 w-10 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey md:hidden" aria-label="Buscar">${svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>', 'h-5 w-5')}</button>
        <a href="login.html" class="flex items-center gap-2 text-[14px] font-medium text-night transition-colors hover:text-b2b">
          ${oi('user','h-5 w-5')}<span class="hidden lg:inline">${t('login')}</span>
        </a>
        <a href="favoritos.html" class="relative grid h-11 w-11 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey" aria-label="${t('favAria')}">${oi('heart','h-7 w-7')}</a>
        <a href="carrito.html" class="relative grid h-11 w-11 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey" aria-label="${t('cartAria')}">
          ${BAG_ICON('h-7 w-7')}
          <span class="js-cart-count absolute right-0.5 top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-night px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white">10</span>
        </a>
      </div>
    </div>
    <form id="mobileSearch" class="hidden px-4 pb-3 md:hidden">
      <div class="relative">
        <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mediumgrey">${svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>', 'h-5 w-5')}</span>
        <input type="search" placeholder="${t('searchPh')}" class="w-full rounded-full border border-nicegrey bg-white py-2.5 pl-12 pr-4 text-[15px] placeholder:text-lowvis focus:border-b2b focus:outline-none" aria-label="Buscar productos" />
      </div>
    </form>
    <nav class="hidden border-y border-lowgrey lg:block">
      <div class="mx-auto max-w-[1400px] px-8"><ul id="megaNav" class="flex items-center gap-7"></ul></div>
    </nav>
  </header>

  <div id="megaPanelWrap" class="pointer-events-none fixed inset-x-0 top-0 z-30 hidden">
    <div class="mx-auto max-w-[1400px]"><div id="megaPanel" class="pointer-events-auto origin-top border-b border-lowgrey bg-white shadow-softlg"></div></div>
  </div>
  <div id="megaBackdrop" class="fixed inset-0 z-20 hidden bg-night/20"></div>`;

  const overlaysHTML = `
  <div id="cpModal" class="fixed inset-0 z-[70] hidden">
    <div class="absolute inset-0 bg-night/40" data-cp-close></div>
    <aside id="cpPanel" class="absolute right-0 top-0 flex h-full w-[90%] max-w-md translate-x-full flex-col bg-white p-8 transition-transform duration-300 md:p-10">
      <button data-cp-close class="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-darkgrey hover:bg-lowgrey" aria-label="Cerrar">${svg('<path d="M6 6l12 12M18 6 6 18"/>', 'h-5 w-5')}</button>
      <h2 class="mt-6 text-2xl font-bold text-night">${t('cpTitle')}</h2>
      <p class="mt-4 text-[14px] text-darkgrey">${t('cpText1')}</p>
      <p class="mt-3 text-[14px] text-darkgrey">${t('cpText2')}</p>
      <label for="cpInput" class="mt-8 block text-[13px] text-mediumgrey">${t('cpLabel')}</label>
      <input id="cpInput" inputmode="numeric" maxlength="5" class="mt-3 w-full rounded-full bg-lowgrey px-5 py-3.5 text-[15px] text-night placeholder:text-lowvis focus:outline-none focus:ring-2 focus:ring-b2b" placeholder="28012" />
      <p id="cpResult" class="mt-4 hidden items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-[14px] font-medium text-night"></p>
      <button id="cpConfirm" class="mt-6 flex items-center justify-center gap-2 rounded-full bg-b2b py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0014cc]">${t('cpConfirm')}</button>
    </aside>
  </div>
  <div id="mobileDrawer" class="fixed inset-0 z-[60] hidden">
    <div class="absolute inset-0 bg-night/40" data-close></div>
    <div id="drawerPanel" class="absolute left-0 top-0 h-full w-[86%] max-w-sm -translate-x-full overflow-y-auto bg-white p-5 transition-transform duration-300">
      <div class="flex items-center justify-between">
        <span class="logo logo--blue"></span>
        <button data-close class="grid h-9 w-9 place-items-center rounded-full hover:bg-lowgrey" aria-label="Cerrar menú">${svg('<path d="M6 6l12 12M18 6 6 18"/>', 'h-5 w-5')}</button>
      </div>
      <ul id="mobileNav" class="mt-6 flex flex-col gap-1"></ul>
    </div>
  </div>

  <div id="cookieBanner" class="pointer-events-none fixed inset-x-0 bottom-0 z-[80] hidden">
    <div class="pointer-events-auto mx-auto m-3 max-w-3xl rounded-xl2 border border-lowgrey bg-white p-5 shadow-softlg md:m-4 md:p-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center">
        <div class="flex-1">
          <h3 class="text-[15px] font-bold text-night">${t('cookieTitle')}</h3>
          <p class="mt-1 text-[13px] text-mediumgrey">${t('cookieText')}<a href="cookies.html" class="text-b2b hover:underline">${t('cookiePolicy')}</a>.</p>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row md:shrink-0">
          <button data-cookie="reject" class="rounded-full border border-nicegrey px-5 py-2.5 text-[14px] font-semibold text-night transition-colors hover:bg-secondary">${t('cReject')}</button>
          <a href="cookies.html" class="rounded-full border border-nicegrey px-5 py-2.5 text-center text-[14px] font-semibold text-night transition-colors hover:bg-secondary">${t('cConfig')}</a>
          <button data-cookie="all" class="rounded-full bg-b2b px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#0014cc]">${t('cAccept')}</button>
        </div>
      </div>
    </div>
  </div>`;

  const footerHTML = `
  <footer class="border-t border-lowgrey bg-white">
    <div class="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
        <div class="lg:col-span-2">
          <span class="logo logo--blue"></span>
          <p class="mt-4 max-w-xs text-[15px] font-light text-mediumgrey">${t('fTagline')}</p>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-darkgrey">${t('fBuy')}</h3>
          <ul class="mt-4 space-y-2 text-[14px] text-mediumgrey">
            <li><a href="ofertas-primavera.html" class="transition-colors hover:text-night">${t('fOffers')}</a></li>
            <li><a href="categoria-brico.html" class="transition-colors hover:text-night">${LANG==='en'?CAT_EN.brico:'Bricolaje y construcción'}</a></li>
            <li><a href="categoria-envases.html" class="transition-colors hover:text-night">${LANG==='en'?CAT_EN.envases:'Envases y embalajes'}</a></li>
            <li><a href="categoria-papeleria.html" class="transition-colors hover:text-night">${LANG==='en'?CAT_EN.papeleria:'Papelería y ofimática'}</a></li>
            <li><a href="categoria-fotografia.html" class="transition-colors hover:text-night">${LANG==='en'?CAT_EN.fotografia:'Fotografía'}</a></li>
            <li><a href="categoria-hogar.html" class="transition-colors hover:text-night">${LANG==='en'?CAT_EN.hogar:'Hogar'}</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-darkgrey">${t('fServices')}</h3>
          <ul class="mt-4 space-y-2 text-[14px] text-mediumgrey">
            <li><a href="servicios.html#empresas" class="transition-colors hover:text-night">${t('fEmpresas')}</a></li>
            <li><a href="servicios.html#planificacion" class="transition-colors hover:text-night">${t('fPlan')}</a></li>
            <li><a href="servicios.html#reformas" class="transition-colors hover:text-night">${t('fReformas')}</a></li>
            <li><a href="personalizacion.html" class="transition-colors hover:text-night">${t('fPersonaliz')}</a></li>
            <li><a href="servicios.html#imprenta" class="transition-colors hover:text-night">${t('fImprenta')}</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-darkgrey">${t('fArea')}</h3>
          <ul class="mt-4 space-y-2 text-[14px] text-mediumgrey">
            <li><a href="perfil.html" class="transition-colors hover:text-night">${t('fProfile')}</a></li>
            <li><a href="favoritos.html" class="transition-colors hover:text-night">${t('fLists')}</a></li>
            <li><a href="perfil.html" class="transition-colors hover:text-night">${t('fBilling')}</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-darkgrey">${t('fInfo')}</h3>
          <ul class="mt-4 space-y-2 text-[14px] text-mediumgrey">
            <li><a href="contacta.html" class="transition-colors hover:text-night">${t('fContact')}</a></li>
            <li><a href="envios.html" class="transition-colors hover:text-night">${t('fShipping')}</a></li>
            <li><a href="puntos-recogida.html" class="transition-colors hover:text-night">${t('fPickup')}</a></li>
            <li><a href="faq.html" class="transition-colors hover:text-night">${t('fFaq')}</a></li>
          </ul>
        </div>
      </div>
      <nav class="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-lowgrey pt-6 text-[13px] text-mediumgrey">
        <a href="aviso-legal.html" class="transition-colors hover:text-night">${t('legalAviso')}</a>
        <a href="privacidad.html" class="transition-colors hover:text-night">${t('legalPriv')}</a>
        <a href="cookies.html" class="transition-colors hover:text-night">${t('legalCookies')}</a>
        <a href="terminos.html" class="transition-colors hover:text-night">${t('legalTerms')}</a>
        <a href="devoluciones.html" class="transition-colors hover:text-night">${t('legalReturns')}</a>
        <a href="envios.html" class="transition-colors hover:text-night">Envíos</a>
        <a href="faq.html" class="transition-colors hover:text-night">Preguntas frecuentes</a>
        <button id="cookieSettingsLink" class="transition-colors hover:text-night">${t('cookieSettings')}</button>
      </nav>
      <div class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-lowgrey pt-6 text-[13px] text-lowvis sm:flex-row">
        <p>${t('copyright')}</p>
        <p>${t('currency')}</p>
      </div>
    </div>
  </footer>`;

  /* ---------- Inyección ---------- */
  const headSlot = $('#site-header'); if (headSlot) headSlot.innerHTML = headerHTML;
  const footSlot = $('#site-footer'); if (footSlot) footSlot.innerHTML = footerHTML;
  document.body.insertAdjacentHTML('beforeend', overlaysHTML);
  $$('.logo').forEach((el) => { el.innerHTML = LOGO_SVG; });

  /* ---------- Topbar scroll ---------- */
  const topbar = $('#topbar'), header = $('#header');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) { topbar.style.transform = 'translateY(-100%)'; header.style.top = '0px'; }
    else { topbar.style.transform = 'translateY(0)'; header.style.top = '46px'; }
    lastY = y;
    if (openId) closeMega();
  }, { passive: true });

  /* ---------- Idioma ---------- */
  const langBtn = $('#langBtn'), langMenu = $('#langMenu'), langLabel = $('#langLabel');
  langBtn.addEventListener('click', (e) => { e.stopPropagation(); langMenu.classList.toggle('hidden'); });
  $$('#langMenu [data-lang]').forEach((b) => b.addEventListener('click', () => { try { localStorage.setItem('ap_lang', b.dataset.lang); } catch (e) {} location.reload(); }));
  document.addEventListener('click', () => langMenu.classList.add('hidden'));

  /* ---------- Modal CP ---------- */
  const cpModal = $('#cpModal'), cpPanel = $('#cpPanel'), cpInput = $('#cpInput'),
        cpResult = $('#cpResult'), cpLabel = $('#cpLabel'), pickupLabel = $('#pickupLabel');
  function openCp() { cpModal.classList.remove('hidden'); requestAnimationFrame(() => cpPanel.style.transform = 'translateX(0)'); setTimeout(() => cpInput.focus(), 250); }
  function closeCp() { cpPanel.style.transform = 'translateX(100%)'; setTimeout(() => cpModal.classList.add('hidden'), 300); }
  function evalCp() {
    const zip = cpInput.value.trim();
    if (!zip) { cpResult.classList.add('hidden'); return null; }
    const pickup = pickupForZip(zip);
    cpResult.classList.remove('hidden');
    if (pickup) {
      cpResult.className = 'mt-4 flex items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-[14px] font-medium text-night';
      cpResult.innerHTML = svg('<path d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>', 'h-4 w-4 shrink-0 text-b2b') + `Tu punto más cercano: <strong class="ml-1">${pickup}</strong>`;
    } else {
      // Alerta: código postal fuera de cobertura (no cubano / fuera de La Habana).
      cpResult.className = 'mt-4 flex items-center gap-2 rounded-xl bg-exito/10 px-4 py-3 text-[14px] font-medium text-exito';
      cpResult.innerHTML = svg('<path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>', 'h-4 w-4 shrink-0') + 'Este código postal no es de La Habana. Solo realizamos envíos dentro de Cuba (La Habana).';
    }
    return pickup;
  }
  $('#cpBtn').addEventListener('click', openCp);
  $('#pickupBtn').addEventListener('click', () => { nav('puntos-recogida.html'); });
  cpInput.addEventListener('input', () => { cpInput.value = cpInput.value.replace(/\D/g, '').slice(0, 5); evalCp(); });
  $('#cpConfirm').addEventListener('click', () => { const p = evalCp(); if (p) { cpLabel.textContent = 'CP ' + cpInput.value; pickupLabel.textContent = p; try { localStorage.setItem('ap_cp', cpInput.value); } catch (e) {} closeCp(); } });
  $$('#cpModal [data-cp-close]').forEach((el) => el.addEventListener('click', closeCp));

  /* ---------- Buscador móvil ---------- */
  const mobileSearch = $('#mobileSearch');
  $('#mobileSearchBtn')?.addEventListener('click', () => { mobileSearch.classList.toggle('hidden'); const i = $('input', mobileSearch); if (!mobileSearch.classList.contains('hidden') && i) i.focus(); });
  const goSearch = (q) => { nav('buscar.html' + (q ? ('?q=' + encodeURIComponent(q)) : '')); };
  $('#searchForm')?.addEventListener('submit', (e) => { e.preventDefault(); goSearch($('#searchInput').value.trim()); });
  mobileSearch?.addEventListener('submit', (e) => { e.preventDefault(); goSearch($('input', mobileSearch).value.trim()); });

  /* ---------- Nav + Mega menú ---------- */
  const catHref = (id) => id === 'servicios' ? 'servicios.html' : `categoria-${id}.html`;
  // Orden del menú (envases, papelería, bricolaje, hogar, fotografía, servicios).
  const NAV_ORDER = ['envases', 'papeleria', 'brico', 'hogar', 'fotografia', 'servicios'];
  const NAV_CATS = NAV_ORDER.map((id) => CATEGORIES.find((c) => c.id === id)).filter(Boolean)
    .concat(CATEGORIES.filter((c) => NAV_ORDER.indexOf(c.id) === -1));
  const megaNav = $('#megaNav'), wrap = $('#megaPanelWrap'), panel = $('#megaPanel'), backdrop = $('#megaBackdrop');
  let openId = null, closeTimer = null;

  megaNav.innerHTML = NAV_CATS.map((c) => `
    <li data-cat="${c.id}">
      <a href="${catHref(c.id)}" class="mega-tab flex items-center py-3.5 text-[15px] transition-colors hover:text-b2b ${PAGE === c.id ? 'font-semibold text-b2b' : 'text-night'}">${catName(c)}</a>
    </li>`).join('');

  function renderSubContent(sub, href) {
    if (sub.links) return `<ul class="flex flex-col gap-3">${sub.links.map((l) => { const lab = typeof l === 'string' ? l : l.label; const lh = typeof l === 'string' ? href : l.href; return `<li><a href="${lh}" class="text-[15px] text-night transition-colors hover:text-b2b">${lab}</a></li>`; }).join('')}</ul>`;
    const actions = sub.actions ? `<div class="flex flex-col gap-3 pr-8">${sub.actions.map((a) => `<a href="${a === 'Personalizar' ? 'personalizacion.html' : href}" class="text-[15px] font-bold text-night transition-colors hover:text-b2b">${a}</a>`).join('')}</div>` : '';
    const groups = sub.groups
      ? `<div class="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-3">${sub.groups.map((g) => `<div><h4 class="mb-2 text-[15px] font-semibold text-night">${g.title}</h4><ul class="flex flex-col gap-1.5">${g.items.map((i) => `<li><a href="${href}" class="text-[15px] text-darkgrey transition-colors hover:text-night">${i}</a></li>`).join('')}</ul></div>`).join('')}</div>`
      : `<div class="flex flex-1 items-start"><a href="${sub.name === 'Always Market' ? 'always-market.html' : sub.name === 'Always Sanguar' ? 'always-sanguar.html' : href}" class="text-[15px] font-bold text-night hover:text-b2b">${t('verTodo')} ${sub.name}</a></div>`;
    return `<div class="flex gap-4">${actions}${groups}</div>`;
  }
  function renderPanel(cat) {
    if (!cat.subs.length) return '';
    const href = catHref(cat.id);
    const a = Math.max(0, cat.subs.findIndex((s) => s.groups || s.links));
    return `<div class="mx-auto flex max-w-[1400px] gap-8 px-8 py-8">
      <ul class="w-64 shrink-0 border-r border-lowgrey pr-4" id="megaSubs">
        ${cat.subs.map((s, i) => `<li><button data-sub="${i}" class="mega-sub flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[15px] transition-colors ${i === a ? 'bg-secondary font-medium text-night' : 'text-darkgrey hover:bg-secondary'}">${s.name}${svg('<path d="m9 6 6 6-6 6"/>', 'h-4 w-4 text-lowvis')}</button></li>`).join('')}
      </ul>
      <div class="flex-1 pt-1" id="megaContent">${renderSubContent(cat.subs[a], href)}</div>
    </div>`;
  }
  function bindSubs(cat) {
    const subsEl = $('#megaSubs'), content = $('#megaContent'); if (!subsEl) return;
    const href = catHref(cat.id);
    $$('.mega-sub', subsEl).forEach((btn) => {
      const activate = () => {
        $$('.mega-sub', subsEl).forEach((b) => { b.classList.remove('bg-secondary', 'font-medium', 'text-night'); b.classList.add('text-darkgrey'); });
        btn.classList.add('bg-secondary', 'font-medium', 'text-night'); btn.classList.remove('text-darkgrey');
        content.innerHTML = renderSubContent(cat.subs[Number(btn.dataset.sub)], href);
      };
      btn.addEventListener('mouseenter', activate);
    });
  }
  function openMega(id) {
    const cat = CATEGORIES.find((c) => c.id === id);
    if (!cat || !cat.subs.length) { closeMega(); return; }
    clearTimeout(closeTimer); openId = id;
    wrap.style.top = header.getBoundingClientRect().bottom + 'px';
    panel.innerHTML = renderPanel(cat); bindSubs(cat);
    wrap.classList.remove('hidden'); backdrop.classList.remove('hidden');
    requestAnimationFrame(() => { panel.style.opacity = '1'; panel.style.transform = 'translateY(0)'; });
  }
  function closeMega() { openId = null; panel.style.opacity = '0'; panel.style.transform = 'translateY(-8px)'; wrap.classList.add('hidden'); backdrop.classList.add('hidden'); }
  panel.style.transition = 'opacity .18s ease, transform .18s ease'; panel.style.opacity = '0'; panel.style.transform = 'translateY(-8px)';
  $$('#megaNav [data-cat]').forEach((li) => {
    const id = li.dataset.cat;
    li.addEventListener('mouseenter', () => openMega(id));
  });
  megaNav.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeMega, 160); });
  wrap.addEventListener('mouseenter', () => clearTimeout(closeTimer));
  wrap.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeMega, 160); });
  backdrop.addEventListener('click', closeMega);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeMega(); closeCp(); } });

  /* ---------- Menú móvil ---------- */
  const drawer = $('#mobileDrawer'), drawerPanel = $('#drawerPanel');
  $('#mobileNav').innerHTML = NAV_CATS.map((c) => `
    <li>${c.subs.length ? `
      <details class="group rounded-xl">
        <summary class="flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-[16px] font-medium text-night hover:bg-secondary">${catName(c)}${svg('<path d="m6 9 6 6 6-6"/>', 'h-4 w-4 text-lowvis transition-transform group-open:rotate-180')}</summary>
        <ul class="ml-3 mt-1 flex flex-col gap-0.5 border-l border-lowgrey pl-3">${c.subs.map((s) => `<li><a href="${catHref(c.id)}" class="block rounded-lg px-3 py-2 text-[15px] text-darkgrey hover:bg-secondary hover:text-night">${s.name}</a></li>`).join('')}</ul>
      </details>` : `<a href="${catHref(c.id)}" class="flex items-center rounded-xl px-3 py-3 text-[16px] font-medium text-night hover:bg-secondary">${catName(c)}</a>`}</li>`).join('');
  $('#mobileMenuBtn').addEventListener('click', () => { drawer.classList.remove('hidden'); requestAnimationFrame(() => drawerPanel.style.transform = 'translateX(0)'); });
  $$('#mobileDrawer [data-close]').forEach((el) => el.addEventListener('click', () => { drawerPanel.style.transform = 'translateX(-100%)'; setTimeout(() => drawer.classList.add('hidden'), 300); }));

  /* ---------- Banner de cookies ---------- */
  const cookieBanner = $('#cookieBanner');
  function setCookieConsent(v) { try { localStorage.setItem('ap_cookies', v); } catch (e) {} cookieBanner.classList.add('hidden'); }
  let consent = null;
  try { consent = localStorage.getItem('ap_cookies'); } catch (e) {}
  if (!consent) cookieBanner.classList.remove('hidden');
  $$('#cookieBanner [data-cookie]').forEach((b) => b.addEventListener('click', () => setCookieConsent(b.dataset.cookie)));
  $('#cookieSettingsLink')?.addEventListener('click', () => { nav('cookies.html'); });

  /* ---------- Toast ---------- */
  const toastWrap = document.createElement('div');
  toastWrap.id = 'toastWrap';
  toastWrap.className = 'fixed bottom-5 left-1/2 z-[90] flex -translate-x-1/2 flex-col items-center gap-2';
  document.body.appendChild(toastWrap);
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'rounded-full bg-night px-5 py-2.5 text-[14px] font-medium text-white shadow-softlg';
    t.style.opacity = '0';
    t.style.transform = 'translateY(8px)';
    t.style.transition = 'opacity .2s ease, transform .2s ease';
    t.textContent = msg;
    toastWrap.appendChild(t);
    requestAnimationFrame(() => { t.style.opacity = '1'; t.style.transform = 'translateY(0)'; });
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; setTimeout(() => t.remove(), 250); }, 1900);
  }

  /* ---------- Cesta ---------- */
  let cartCount = 0;
  try { cartCount = parseInt(localStorage.getItem('ap_cart') || '10', 10) || 0; } catch (e) { cartCount = 10; }
  function paintCart() { $$('.js-cart-count').forEach((el) => { el.textContent = cartCount; el.style.display = cartCount > 0 ? '' : 'none'; }); }
  function addToCart(n = 1) { cartCount += n; try { localStorage.setItem('ap_cart', String(cartCount)); } catch (e) {} paintCart(); }
  paintCart();

  /* ---------- Delegación global de clics ---------- */
  document.addEventListener('click', (e) => {
    // Guardar el producto pulsado para que su ficha muestre ESE producto (no el de por defecto).
    const plink = e.target.closest('a[href$="producto.html"]');
    if (plink) {
      const art = plink.closest('[data-prod]');
      if (art) {
        try {
          const obj = JSON.parse(decodeURIComponent(art.getAttribute('data-prod')));
          const img = art.querySelector('img');
          if (img) obj.img = img.getAttribute('src');
          sessionStorage.setItem('ap_product', JSON.stringify(obj));
        } catch (err) {}
      }
    }
    const add = e.target.closest('[data-add]');
    if (add) { e.preventDefault(); addToCart(1); toast('✓ Añadido a la cesta'); return; }
    const demo = e.target.closest('[data-demo]');
    if (demo) { e.preventDefault(); toast(demo.dataset.demo || 'Función de demostración'); return; }
    const fav = e.target.closest('[data-fav]');
    if (fav) {
      e.preventDefault();
      const on = fav.classList.toggle('is-fav');
      // Estado activo: corazón negro (relleno).
      fav.classList.toggle('text-night', on);
      const path = fav.querySelector('svg path');
      if (path) path.setAttribute('fill', on ? 'currentColor' : 'none');
      toast(on ? '♥ Añadido a favoritos' : 'Quitado de favoritos');
      return;
    }
    // Enlaces de demostración (href="#"): evitar el salto al inicio
    const a = e.target.closest('a[href="#"]');
    if (a) { e.preventDefault(); return; }
    // Red de seguridad: ningún botón queda "muerto". Si un <button> no tiene
    // acción propia (no envía formulario, no está cableado por su página ni por
    // el chrome), se acusa el clic con un aviso para que siempre responda.
    const wired = '.opt,.thumb,.model-opt,.auth-tab,.clearFilter,.secCard,.mega-sub,.mega-tab,[data-add],[data-demo],[data-fav],[data-inc],[data-dec],[data-del],[data-cp-close],[data-close],[data-cookie],[data-lang],[data-sub],[data-cat],[data-i]';
    // Nota: un <button> sin atributo type reporta type="submit"; solo cuenta
    // como envío real si además está dentro de un <form>.
    const btn = e.target.closest('button');
    if (btn && !btn.disabled && !btn.id && !btn.closest('form') && !btn.matches(wired)
        && !btn.closest('#apChat, #megaPanelWrap, #mobileDrawer, #cpModal')) {
      e.preventDefault();
      toast('✓ ' + ((btn.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40) || 'Hecho'));
    }
  });

  /* ---------- Chatbot asistente (DESACTIVADO por petición) ---------- */
  const CHAT_ENABLED = false;
  if (CHAT_ENABLED) {
  const chatHTML = `
    <button id="apChatBtn" class="fixed bottom-5 right-5 z-[75] flex h-14 w-14 items-center justify-center rounded-full border border-lowgrey bg-white shadow-softlg transition-transform hover:scale-105" aria-label="Abrir asistente">
      ${isoSVG('ap-iso-chat', 'ap-iso-blue')}
    </button>
    <div id="apChat" class="fixed bottom-5 right-5 z-[76] hidden w-[92vw] max-w-[380px] origin-bottom-right flex-col overflow-hidden rounded-xl2 border border-lowgrey bg-white shadow-softlg">
      <div class="flex items-center justify-between bg-night px-5 py-4 text-white">
        <div class="flex items-center gap-3">
          <span class="grid h-9 w-9 place-items-center rounded-full bg-white/15">${isoSVG('h-5 w-5', 'ap-iso-white')}</span>
          <div><p class="text-[15px] font-bold leading-tight">Asistente Always</p><p class="flex items-center gap-1 text-[11px] text-white/70"><span class="h-1.5 w-1.5 rounded-full bg-[#4fd6a6]"></span>En línea</p></div>
        </div>
        <button id="apChatClose" class="grid h-8 w-8 place-items-center rounded-full text-white/80 hover:bg-white/10" aria-label="Cerrar">${svg('<path d="M6 6l12 12M18 6 6 18"/>', 'h-5 w-5')}</button>
      </div>
      <div id="apChatMsgs" class="flex h-80 flex-col gap-3 overflow-y-auto bg-secondary p-4"></div>
      <div id="apChatChips" class="flex flex-wrap gap-2 border-t border-lowgrey bg-white px-4 pt-3"></div>
      <form id="apChatForm" class="flex items-center gap-2 border-t border-lowgrey bg-white p-3">
        <input id="apChatInput" type="text" placeholder="Escribe tu mensaje…" class="flex-1 rounded-full border border-nicegrey px-4 py-2.5 text-[14px] focus:border-b2b focus:outline-none" />
        <button type="submit" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-b2b text-white hover:bg-[#0014cc]" aria-label="Enviar">${svg('<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>', 'h-5 w-5')}</button>
      </form>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', chatHTML);

  const chatBtn = $('#apChatBtn'), chatPanel = $('#apChat'), chatMsgs = $('#apChatMsgs'), chatChips = $('#apChatChips');
  const BOT = [
    { k: ['hola', 'buenas', 'saludos', 'hey', 'hi', 'hello', 'que tal', 'buenos dias', 'buenas tardes'], a: '¡Hola! 😊 Soy el asistente de Always Plaza. Puedo ayudarte con envíos, puntos de recogida, pagos, devoluciones, servicios, ofertas, tu cuenta o cualquier categoría. ¿Qué necesitas?' },
    { k: ['horario', 'hora', 'abierto', 'abren', 'cierran', 'que hora'], a: 'La tienda online está disponible 24/7. Nuestros Always Points abren de lunes a sábado (algunos también domingo). <a href="puntos-recogida.html" class="text-b2b underline">Ver horarios</a>.' },
    { k: ['envio', 'entrega', 'mandar', 'enviar', 'domicilio', 'cuba', 'habana', 'plazo', 'tarda', 'cuanto tarda', 'dias', 'demora', 'reparto'], a: 'Enviamos a domicilio en toda La Habana y ofrecemos recogida en nuestros Always Points. Plazo estimado: 7–15 días. <a href="envios.html" class="text-b2b underline">Ver envíos</a>.' },
    { k: ['recogida', 'punto', 'point', 'recoger', 'always point'], a: 'Tenemos 7 puntos de recogida (Always Points) en La Habana. Introduce tu código postal arriba para ver el más cercano. <a href="puntos-recogida.html" class="text-b2b underline">Ver puntos</a>.' },
    { k: ['codigo postal', 'cp', 'zona', 'cobertura', 'llega a'], a: 'Añade tu código postal desde el botón «Añadir CP» de la barra superior y te diremos si hacemos envío a domicilio o cuál es tu punto de recogida más cercano.' },
    { k: ['servicio', 'empresa', 'b2b', 'negocio', 'mayorista', 'reforma', 'planific'], a: 'Tenemos servicios para empresas: personalización de producto, reformas, planificación e imprenta. <a href="servicios.html" class="text-b2b underline">Ver servicios</a>.' },
    { k: ['personaliz', 'vaso', 'logo', 'imprimir', 'serigraf', 'diseno', 'diseño', 'marca propia'], a: 'Puedes personalizar productos (por ejemplo vasos) con tu logo y diseño. <a href="personalizacion.html" class="text-b2b underline">Personalizar ahora</a>.' },
    { k: ['imprenta', 'impresion', 'flyer', 'cartel', 'tarjeta de visita'], a: 'Nuestro servicio de imprenta cubre flyers, carteles, tarjetas y packaging. <a href="servicios.html" class="text-b2b underline">Ver imprenta</a>.' },
    { k: ['pago', 'pagar', 'tarjeta', 'paypal', 'visa', 'mastercard', 'financ'], a: 'Aceptamos tarjeta (Visa, MasterCard) y PayPal. El pago es 100% seguro. 🔒' },
    { k: ['precio', 'euro', 'moneda', 'coste', 'cuesta', 'iva', 'caro', 'barato'], a: 'Todos los precios están en euros (€) e incluyen IVA. Verás el total final antes de confirmar el pedido.' },
    { k: ['oferta', 'rebaja', 'descuento', 'promo', 'primavera', 'chollo'], a: '¡Tenemos las Ofertas de primavera con hasta -30%! <a href="ofertas-primavera.html" class="text-b2b underline">Ver ofertas</a>.' },
    { k: ['devol', 'cambio', 'reembolso', 'roto', 'defectuoso'], a: 'Dispones de 30 días para devolver. <a href="devoluciones.html" class="text-b2b underline">Política de devoluciones</a>.' },
    { k: ['garantia', 'garantía'], a: 'Todos los productos tienen garantía. Si algo llega defectuoso, gestionamos el cambio o reembolso sin coste. <a href="devoluciones.html" class="text-b2b underline">Más info</a>.' },
    { k: ['pedido', 'seguim', 'rastre', 'donde esta', 'estado', 'factura'], a: 'Puedes ver el estado y la factura de tu pedido en <a href="mis-pedidos.html" class="text-b2b underline">Mis pedidos</a>.' },
    { k: ['cuenta', 'registr', 'login', 'sesion', 'contrasena', 'contraseña', 'password', 'perfil'], a: 'Puedes <a href="login.html" class="text-b2b underline">iniciar sesión</a> o <a href="registro.html" class="text-b2b underline">crear una cuenta</a>. Desde tu <a href="perfil.html" class="text-b2b underline">perfil</a> gestionas pedidos, direcciones y devoluciones.' },
    { k: ['favorito', 'lista', 'guardar', 'corazon', 'corazón', 'deseos', 'wishlist'], a: 'Guarda productos en <a href="favoritos.html" class="text-b2b underline">Favoritos</a> pulsando el corazón de cada tarjeta.' },
    { k: ['carrito', 'cesta', 'comprar', 'anadir', 'añadir', 'checkout', 'finalizar', 'tramitar'], a: 'Añade productos con el botón de la cesta y finaliza en el <a href="carrito.html" class="text-b2b underline">carrito</a>. El proceso de <a href="checkout.html" class="text-b2b underline">pago</a> es rápido y seguro.' },
    { k: ['bricolaje', 'herramienta', 'taladro', 'construccion', 'construcción', 'pintura', 'obra'], a: 'En <a href="categoria-brico.html" class="text-b2b underline">Bricolaje y construcción</a> encontrarás herramientas, pintura y materiales.' },
    { k: ['papeleria', 'papelería', 'oficina', 'cuaderno', 'boligrafo', 'bolígrafo', 'folio', 'impresora', 'ofimatica', 'ofimática'], a: 'Mira nuestra <a href="categoria-papeleria.html" class="text-b2b underline">Papelería y ofimática</a>: cuadernos, escritura, material de oficina e impresión.' },
    { k: ['fotografia', 'fotografía', 'camara', 'cámara', 'objetivo', 'foto', 'tripode', 'trípode'], a: 'En <a href="categoria-fotografia.html" class="text-b2b underline">Fotografía</a> tienes cámaras, objetivos, iluminación y accesorios.' },
    { k: ['hogar', 'cocina', 'bano', 'baño', 'casa', 'decoracion', 'decoración', 'menaje'], a: 'Descubre <a href="categoria-hogar.html" class="text-b2b underline">Hogar</a>: cocina, baño, textil y organización.' },
    { k: ['envase', 'embalaje', 'caja', 'bolsa', 'take away', 'biodegradable', 'packaging'], a: 'En <a href="categoria-envases.html" class="text-b2b underline">Envases y embalajes</a> tenemos vasos, cajas, bolsas y menaje biodegradable de marca blanca.' },
    { k: ['contacto', 'ayuda', 'telefono', 'teléfono', 'email', 'correo', 'atencion', 'atención', 'whatsapp', 'llamar'], a: 'Escríbenos a atencion@alwaysmk.com o revisa las <a href="faq.html" class="text-b2b underline">preguntas frecuentes</a>. Un agente puede atenderte también por aquí.' },
    { k: ['cookie', 'privacidad', 'datos', 'rgpd', 'legal', 'aviso'], a: 'Consulta nuestras políticas: <a href="privacidad.html" class="text-b2b underline">Privacidad</a>, <a href="cookies.html" class="text-b2b underline">Cookies</a> y <a href="aviso-legal.html" class="text-b2b underline">Aviso legal</a>.' },
    { k: ['idioma', 'lengua', 'ingles', 'inglés', 'english', 'language'], a: 'Puedes cambiar el idioma desde el selector de la barra superior (Español / English).' },
    { k: ['gracias', 'genial', 'perfecto', 'adios', 'adiós', 'chao', 'hasta luego', 'vale'], a: '¡Un placer! 🙌 Si necesitas algo más, aquí estoy.' },
  ];
  const CHAT_FALLBACK = 'No estoy seguro de haber entendido 🤔. Puedo ayudarte con: <strong>envíos</strong>, <strong>puntos de recogida</strong>, <strong>pagos</strong>, <strong>devoluciones</strong>, <strong>ofertas</strong>, <strong>servicios</strong>, <strong>tu cuenta</strong> o cualquier <strong>categoría</strong>. También puedes escribir a atencion@alwaysmk.com o ver las <a href="faq.html" class="text-b2b underline">preguntas frecuentes</a>.';
  const chatNorm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  function pushMsg(text, who) {
    const el = document.createElement('div');
    el.className = (who === 'bot'
      ? 'max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-[14px] text-night shadow-soft'
      : 'max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-b2b px-4 py-2.5 text-[14px] text-white') + ' ap-msg-in';
    el.innerHTML = text;
    chatMsgs.appendChild(el);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
    return el;
  }
  function showTyping() {
    const el = document.createElement('div');
    el.className = 'max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-soft ap-msg-in';
    el.innerHTML = '<span class="ap-typing"><span></span><span></span><span></span></span>';
    chatMsgs.appendChild(el);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
    return el;
  }
  function botReply(q) {
    const low = chatNorm(q);
    const hit = BOT.find((b) => b.k.some((k) => low.includes(chatNorm(k))));
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      pushMsg(hit ? hit.a : CHAT_FALLBACK, 'bot');
    }, 600 + Math.random() * 400);
  }
  let chatInit = false;
  function openChat() {
    chatPanel.classList.remove('hidden'); chatPanel.classList.add('flex');
    requestAnimationFrame(() => chatPanel.classList.add('ap-chat-in'));
    chatBtn.style.opacity = '0'; chatBtn.style.transform = 'scale(.6)';
    setTimeout(() => chatBtn.classList.add('hidden'), 180);
    if (!chatInit) {
      chatInit = true;
      pushMsg('¡Hola! 👋 Soy el asistente de Always Plaza. ¿En qué puedo ayudarte?', 'bot');
      ['Envíos a Cuba', 'Puntos de recogida', 'Ofertas', 'Formas de pago', 'Servicios', 'Devoluciones'].forEach((t) => {
        const c = document.createElement('button');
        c.type = 'button';
        c.className = 'mb-3 rounded-full border border-nicegrey px-3 py-1.5 text-[13px] text-darkgrey transition-colors hover:border-b2b hover:text-b2b';
        c.textContent = t;
        c.addEventListener('click', () => { pushMsg(t, 'me'); botReply(t); });
        chatChips.appendChild(c);
      });
    }
    setTimeout(() => $('#apChatInput') && $('#apChatInput').focus(), 200);
  }
  function closeChat() {
    chatPanel.classList.remove('ap-chat-in');
    chatBtn.classList.remove('hidden');
    requestAnimationFrame(() => { chatBtn.style.opacity = '1'; chatBtn.style.transform = ''; });
    setTimeout(() => { chatPanel.classList.add('hidden'); chatPanel.classList.remove('flex'); }, 240);
  }
  chatBtn.addEventListener('click', openChat);
  $('#apChatClose').addEventListener('click', closeChat);
  $('#apChatForm').addEventListener('submit', (e) => { e.preventDefault(); const v = $('#apChatInput').value.trim(); if (!v) return; pushMsg(v, 'me'); $('#apChatInput').value = ''; botReply(v); });
  } /* fin CHAT_ENABLED */

  /* ---------- Animaciones sutiles de entrada (reveal al hacer scroll) ---------- */
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = (!reduce && 'IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('ap-in'); io.unobserve(en.target); } });
      }, { threshold: 0.06, rootMargin: '0px 0px -6% 0px' })
    : null;
  function reveal(root) {
    if (!io) return;
    const vh = window.innerHeight || 800;
    // Bloques de contenido de la vista actual (evita anidados ya marcados).
    $$('main > *, .ap-route > main > *', root || document).forEach((el) => {
      if (el.classList.contains('ap-reveal')) return;      // ya procesado
      const r = el.getBoundingClientRect();
      if (r.height === 0) return;                           // oculto (otra ruta): reintentar luego
      if (r.top < vh * 0.9) { el.classList.add('ap-reveal', 'ap-in'); return; } // ya visible: sin parpadeo
      const sib = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0;
      el.style.transitionDelay = Math.min(sib * 45, 180) + 'ms';
      el.classList.add('ap-reveal'); io.observe(el);
    });
  }
  window.__apReveal = reveal;
  reveal();

  /* ---------- Traducción de nodos marcados con data-i18n ---------- */
  $$('[data-i18n]').forEach((el) => { const k = el.getAttribute('data-i18n'); if (T[LANG] && T[LANG][k] != null) el.innerHTML = t(k); });
  if (LANG === 'en') document.documentElement.lang = 'en';

  /* Expose helpers for page scripts */
  window.AP = Object.assign(window.AP || {}, { svg, $, $$, toast, addToCart, t, lang: LANG });
})();
