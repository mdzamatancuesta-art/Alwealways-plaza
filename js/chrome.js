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
  const OI = {"globe":{"vb":"0 0 24 24","inner":"<path d=\"M12 16C17.5229 16 22 14.2092 22 12C22 9.79085 17.5229 8 12 8C6.47715 8 2 9.79085 2 12C2 14.2092 6.47715 16 12 16Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M16 12C16 17.5229 14.2092 22 12 22C9.79085 22 8 17.5229 8 12C8 6.47715 9.79085 2 12 2C14.2092 2 16 6.47715 16 12Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/>"},"truck":{"vb":"0 0 24 24","inner":"<path d=\"M2 6.5C2 5.94772 2.44772 5.5 3 5.5H12.5C13.0523 5.5 13.5 5.94772 13.5 6.5V16.5H2V6.5Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M13.5 9.5H17L20.5 13V16.5H13.5V9.5Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M4 16.5C4 17.6046 4.89543 18.5 6 18.5C7.10457 18.5 8 17.6046 8 16.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M15 16.5C15 17.6046 15.8954 18.5 17 18.5C18.1046 18.5 19 17.6046 19 16.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"pin":{"vb":"0 0 24 24","inner":"<path d=\"M12 22C12 22 19.5 16 19.5 9.5C19.5 5.35785 16.1421 2 12 2C7.85785 2 4.5 5.35785 4.5 9.5C4.5 16 12 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M12 12.5C13.6568 12.5 15 11.1568 15 9.5C15 7.84315 13.6568 6.5 12 6.5C10.3432 6.5 9 7.84315 9 9.5C9 11.1568 10.3432 12.5 12 12.5Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/>"},"store":{"vb":"0 0 24 24","inner":"<path d=\"M20.0195 11V21H4.01953V11\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M2.92138 6.8883C2.1566 8.86885 3.63176 11 5.75482 11C7.41167 11 8.76402 9.65685 8.76402 8C8.76402 9.65685 10.1072 11 11.764 11H12.2732C13.9301 11 15.2732 9.65685 15.2732 8C15.2732 9.65685 16.6261 11 18.283 11C20.4072 11 21.8837 8.8676 21.1183 6.88615L19.6171 3H4.42284L2.92138 6.8883Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/>"},"menu":{"vb":"0 0 24 24","inner":"<path d=\"M21 4.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17 9.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M21 14.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17 19.5H3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"user":{"vb":"0 0 24 24","inner":"<path d=\"M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M21 22C21 17.0294 16.9706 13 12 13C7.02945 13 3 17.0294 3 22\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"heart":{"vb":"0 0 44 44","inner":"<path d=\"M17.5 14C14.4624 14 12 16.4625 12 19.5C12 25 18.5 30 22 31.1631C25.5 30 32 25 32 19.5C32 16.4625 29.5375 14 26.5 14C24.6399 14 22.9954 14.9235 22 16.3369C21.0046 14.9235 19.3601 14 17.5 14Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"},"bag":{"vb":"0 0 24 24","inner":"<path d=\"M19 7H5C4.44772 7 4 7.44772 4 8V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V8C20 7.44772 19.5523 7 19 7Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8.5 9V5.5C8.5 3.56701 10.067 2 12 2C13.933 2 15.5 3.56701 15.5 5.5V9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"}};
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
          ${oi('globe','h-5 w-5')}
          <span id="langLabel">${LANG==='en'?'English':'Español'}</span>
        </button>
        <div id="langMenu" class="absolute left-0 top-full mt-2 hidden w-36 overflow-hidden rounded-xl bg-white text-night shadow-softlg">
          <button data-lang="es" class="flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-lowgrey">🇪🇸 Español</button>
          <button data-lang="en" class="flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-lowgrey">🇬🇧 English</button>
        </div>
      </div>
      <div class="hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex">
        ${oi('truck','h-5 w-5 shrink-0 text-white/70')}
        <p class="truncate text-[13px] text-white/90">${t('shipBanner')}</p>
      </div>
      <div class="flex shrink-0 items-center gap-4">
        <button id="cpBtn" class="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
          ${oi('pin','h-5 w-5 shrink-0')}
          <span id="cpLabel">${t('addCp')}</span>
        </button>
        <button id="pickupBtn" class="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
          ${oi('store','h-5 w-5 shrink-0')}
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
    // Ordenar la cuadrícula de productos por precio (alterna ascendente/descendente).
    const ord = e.target.closest('.ordenar');
    if (ord) {
      e.preventDefault();
      const grid = (ord.closest('main') || document).querySelector('.grid2') || document.querySelector('.grid2');
      if (grid) {
        ord.dataset.dir = ord.dataset.dir === 'asc' ? 'desc' : 'asc';
        const dir = ord.dataset.dir === 'asc' ? 1 : -1;
        const price = (a) => { const el = a.querySelector('.font-extrabold'); const m = ((el ? el.textContent : a.textContent) || '').match(/(\d+)(?:,(\d+))?/); return m ? parseFloat(m[1] + '.' + (m[2] || '0')) : 0; };
        Array.from(grid.querySelectorAll('article')).sort((a, b) => (price(a) - price(b)) * dir).forEach((a) => grid.appendChild(a));
        toast(dir === 1 ? 'Ordenado: precio ↑' : 'Ordenado: precio ↓');
      }
      return;
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


  /* ---------- Diccionario ES→EN para traducir TODO el contenido estático ---------- */
  const DICT = {
    // Legal / privacidad / cookies / condiciones
    '— consentimiento, que puedes retirar en cualquier momento.': '— consent, which you can withdraw at any time.',
    '— ejecución del contrato de compraventa.': '— performance of the sales contract.',
    '— ejecución del contrato y consentimiento.': '— performance of the contract and consent.',
    '— obligación legal (fiscal, contable).': '— legal obligation (tax, accounting).',
    '1. ¿Qué son las cookies?': '1. What are cookies?',
    '1. Datos identificativos': '1. Identifying data',
    '1. Objeto y precios': '1. Scope and prices',
    '1. Plazo': '1. Timeframe',
    '1. Responsable del tratamiento': '1. Data controller',
    '1. Zonas de envío': '1. Shipping zones',
    '2. Condiciones': '2. Terms',
    '2. Datos que tratamos': '2. Data we process',
    '2. Objeto': '2. Scope',
    '2. Plazos estimados': '2. Estimated timeframes',
    '2. Proceso de compra': '2. Purchase process',
    '2. Tipos de cookies que utilizamos': '2. Types of cookies we use',
    '3. Cómo devolver': '3. How to return',
    '3. Condiciones de uso': '3. Terms of use',
    '3. Finalidad y legitimación': '3. Purpose and legal basis',
    '3. Gastos de envío': '3. Shipping costs',
    '3. Gestión de cookies': '3. Managing cookies',
    '3. Pago': '3. Payment',
    '4. Consentimiento': '4. Consent',
    '4. Conservación': '4. Data retention',
    '4. Envío y entrega': '4. Shipping and delivery',
    '4. Propiedad intelectual e industrial': '4. Intellectual and industrial property',
    '4. Reembolso': '4. Refund',
    '4. Seguimiento': '4. Tracking',
    '5. Desistimiento y devoluciones': '5. Withdrawal and returns',
    '5. Destinatarios': '5. Recipients',
    '5. Responsabilidad': '5. Liability',
    '6. Enlaces': '6. Links',
    '6. Garantías': '6. Warranties',
    '6. Tus derechos': '6. Your rights',
    '7. Atención al cliente': '7. Customer service',
    '7. Legislación aplicable': '7. Applicable law',
    '7. Seguridad': '7. Security',
    '[Domicilio social]': '[Registered office]',
    '[Identificación fiscal]': '[Tax ID]',
    '[Número de identificación fiscal]': '[Tax identification number]',
    '[Razón social del titular]': '[Legal name of the owner]',
    '[Razón social]': '[Legal name]',
    'Aplicamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida o alteración.': 'We apply technical and organisational measures to protect your data against unauthorised access, loss or alteration.',
    'Conservamos tus datos mientras exista una relación contractual o comercial y, posteriormente, durante los plazos legalmente exigidos.': 'We keep your data for as long as a contractual or commercial relationship exists and, afterwards, for the periods legally required.',
    'El consentimiento otorgado se conserva en tu navegador. Puedes retirarlo o modificarlo cuando quieras desde esta página o desde «Configurar cookies» en el pie.': 'The consent granted is stored in your browser. You can withdraw or change it whenever you want from this page or from “Cookie settings” in the footer.',
    'El Sitio puede contener enlaces a páginas de terceros. El titular no asume responsabilidad alguna sobre el contenido o la disponibilidad de dichos sitios.': 'The Site may contain links to third-party pages. The owner accepts no responsibility for the content or availability of such sites.',
    'En cumplimiento del deber de información, se hacen constar los siguientes datos del titular de este sitio web:': 'In compliance with the duty of information, the following details of the owner of this website are provided:',
    'Este aviso legal se rige por la legislación vigente aplicable. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.': 'This legal notice is governed by the applicable law in force. For any dispute, the parties submit to the courts and tribunals that apply under the law.',
    'La presente Política de privacidad describe cómo Always Plaza (en adelante, «el Responsable») trata los datos personales de los usuarios que utilizan este sitio web y realizan compras a través de él.': 'This Privacy Policy describes how Always Plaza (hereinafter, “the Controller”) processes the personal data of users who use this website and make purchases through it.',
    'Las cookies son pequeños archivos que se descargan en tu dispositivo al visitar una web y permiten recordar tus preferencias, analizar el uso del sitio y personalizar el contenido.': 'Cookies are small files that are downloaded to your device when you visit a website and allow us to remember your preferences, analyse site usage and personalise content.',
    'Las presentes Condiciones Generales de Compra regulan la relación entre Always Plaza y los usuarios que adquieren productos o servicios a través del sitio web.': 'These General Terms of Purchase govern the relationship between Always Plaza and users who purchase products or services through the website.',
    'Los datos entre corchetes deben completarse con la información registral real del titular antes de la publicación.': 'The data in brackets must be completed with the owner’s actual registration information before publication.',
    'Los gastos se calculan en función del pedido y del destino, y se muestran antes de confirmar la compra. La recogida en punto puede tener condiciones ventajosas.': 'Costs are calculated based on the order and destination, and are shown before you confirm the purchase. Pickup-point collection may have advantageous conditions.',
    'Los precios se muestran en euros (€) e incluyen los impuestos aplicables, salvo indicación contraria. Los gastos de envío se calculan y muestran antes de finalizar la compra.': 'Prices are shown in euros (€) and include applicable taxes, unless otherwise stated. Shipping costs are calculated and shown before you complete the purchase.',
    'Los productos cuentan con la garantía legal frente a faltas de conformidad. Para productos personalizados pueden aplicarse condiciones específicas.': 'Products carry the statutory warranty against lack of conformity. Specific conditions may apply to personalised products.',
    'Los productos personalizados (por ejemplo, envases con tu marca) no admiten devolución salvo defecto.': 'Personalised products (for example, packaging with your brand) cannot be returned unless defective.',
    'Puedes aceptar todas, rechazar las no esenciales o configurarlas mediante el banner de cookies. Además, puedes eliminar o bloquear las cookies desde la configuración de tu navegador.': 'You can accept all, reject non-essential ones or configure them via the cookie banner. You can also delete or block cookies from your browser settings.',
    'Queremos que compres con total tranquilidad. Si un producto no te convence, puedes devolverlo según las siguientes condiciones.': 'We want you to shop with complete peace of mind. If you’re not happy with a product, you can return it under the following conditions.',
    'Realizamos envíos a domicilio en toda La Habana y disponemos de puntos de recogida (Always Points). Los plazos y gastos se detallan en la página de': 'We deliver to your door throughout Havana and have pickup points (Always Points). Timeframes and costs are detailed on the',
    'Todos los precios están en euros (€) e incluyen impuestos, salvo indicación contraria.': 'All prices are in euros (€) and include taxes, unless otherwise stated.',
    'Una vez recibido y revisado el producto, tramitaremos el reembolso por el mismo medio de pago en un plazo máximo de 14 días.': 'Once the product is received and checked, we will process the refund via the same payment method within a maximum of 14 days.',
    'Última actualización: 17 de julio de 2026': 'Last updated: 17 July 2026',
    'Dispones de': 'You have',
    'desde la recepción del pedido para solicitar la devolución, salvo excepciones legales.': 'from receipt of the order to request the return, except for legal exceptions.',
    'Dispones de un plazo para desistir de tu compra conforme a la normativa aplicable. Consulta el procedimiento en la': 'You have a period to withdraw from your purchase under the applicable regulations. See the procedure in the',
    'Conserva el justificante o número de pedido.': 'Keep the receipt or order number.',
    'El producto debe estar sin usar y en su embalaje original.': 'The product must be unused and in its original packaging.',
    'Para cualquier incidencia, escríbenos a atencion@alwaysmk.com o consulta las': 'For any issue, write to us at atencion@alwaysmk.com or check the',
    'o escribiendo a devoluciones@alwaysmk.com. Te indicaremos si la recogida se realiza a domicilio o en un Always Point.': 'or by writing to devoluciones@alwaysmk.com. We will tell you whether collection is at your address or at an Always Point.',
    'Solicita la devolución desde «Mis pedidos» en tu': 'Request the return from “My orders” in your',
    'Gestiona la devolución o el cambio de un producto. Dispones de 30 días desde la recepción. Consulta la': 'Manage the return or exchange of a product. You have 30 days from receipt. See the',
    'Tienes 30 días para devolver. Consulta la': 'You have 30 days to return. See the',
    'Podrás consultar el estado de tu pedido desde «Mis pedidos» en tu': 'You can check the status of your order from “My orders” in your',
    'Aceptamos los métodos de pago indicados en el proceso de compra. El pago es seguro y se procesa mediante pasarelas certificadas.': 'We accept the payment methods indicated during checkout. Payment is secure and processed via certified gateways.',
    'Los gastos se calculan en función del pedido y del destino, y se muestran antes de confirmar la compra.': 'Costs are calculated based on the order and destination, and are shown before you confirm the purchase.',

    // FAQ
    '¿A dónde enviáis?': 'Where do you ship to?',
    '¿Cómo añado mi código postal?': 'How do I add my postal code?',
    '¿Cómo devuelvo un producto?': 'How do I return a product?',
    '¿Cómo os contacto?': 'How do I contact you?',
    '¿En qué moneda son los precios?': 'What currency are prices in?',
    '¿Puedo comprar como empresa?': 'Can I buy as a business?',
    '¿Se pueden desactivar?': 'Can they be disabled?',
    'Quizá tu respuesta ya está aquí. Consulta las dudas más habituales.': 'Your answer may already be here. Check the most common questions.',
    'El envío a domicilio está disponible únicamente en La Habana. Para el resto de Cuba, disponemos de puntos de recogida.': 'Home delivery is available only in Havana. For the rest of Cuba, we have pickup points.',
    'Pulsa «Añadir CP» en la barra superior e introduce tu código postal de La Habana; verás tu punto de recogida más cercano.': 'Tap “Add ZIP” in the top bar and enter your Havana postal code; you’ll see your nearest pickup point.',
    'Los precios se muestran en euros (€) e incluyen los impuestos aplicables, salvo indicación contraria.': 'Prices are shown in euros (€) and include applicable taxes, unless otherwise stated.',
    'Sí. Puedes registrarte como profesional y acceder a servicios y precios para empresas. Consulta': 'Yes. You can register as a professional and access business services and prices. See',
    'Escríbenos a atencion@alwaysmk.com. Estaremos encantados de ayudarte.': 'Write to us at atencion@alwaysmk.com. We’ll be glad to help.',

    // Contacta
    '¿Tienes una duda sobre un pedido, un envío o un producto? Escríbenos y nuestro equipo de atención al cliente te responderá lo antes posible.': 'Have a question about an order, a shipment or a product? Write to us and our customer service team will reply as soon as possible.',
    '✓ ¡Gracias! Hemos recibido tu mensaje. Te responderemos por correo lo antes posible.': '✓ Thank you! We’ve received your message. We’ll reply by email as soon as possible.',
    'Consulta sobre un pedido': 'Question about an order',
    'Venta mayorista': 'Wholesale',
    'Otra consulta': 'Other enquiry',
    'Asunto': 'Subject',
    'Mensaje': 'Message',
    'Enviar mensaje': 'Send message',
    'Atención al cliente': 'Customer service',
    'Horario': 'Opening hours',
    'Lun–Sáb · 9:00–18:00': 'Mon–Sat · 9:00–18:00',
    'Escríbenos y te ayudamos con cualquier consulta.': 'Write to us and we’ll help you with any question.',
    'Contacta con nosotros': 'Contact us',

    // Home / secciones
    'Ofertas de': 'Spring',
    'primavera': 'offers',
    'Ofertas de primavera': 'Spring offers',
    'Los imprescindibles para el último empujón del curso escolar al mejor precio.': 'The essentials for the final stretch of the school year at the best price.',
    'Hasta -30%': 'Up to -30%',
    'Novedades': 'New arrivals',
    '¡Descubre más de 20 artículos de la nueva colección de ofimática y papelería!': 'Discover more than 20 items from the new office & stationery collection!',
    'Seguir comprando': 'Keep shopping',
    'Envases y embalajes': 'Packaging',
    'Ver todo': 'See all',
    'Crea tu proyecto': 'Create your project',
    'Dale forma a tu gran proyecto con Alzan': 'Shape your big project with Alzan',
    '¿Pensando en renovar? Todavía más fácil con nuestros servicios personalizados para reformas y construcciones. Escríbenos a infoproyecto@always.com': 'Thinking of renovating? Even easier with our custom services for renovations and construction. Write to us at infoproyecto@always.com',
    'Pide presupuesto gratis para cambiar suelos y paredes': 'Get a free quote to change floors and walls',
    'Ver ofertas': 'See offers',

    // Categorías / listados
    'Todos los productos': 'All products',
    'Ordenar': 'Sort',
    'Filtrar': 'Filter',
    'Destacados': 'Featured',
    'Categoría': 'Category',
    'Precio': 'Price',
    'Bricolaje y construcción': 'DIY & construction',
    'Bricolaje, herramientas y pintura con descuentos especiales durante toda la temporada.': 'DIY, tools and paint with special discounts all season long.',
    'Potencia tus proyectos con nuestro catálogo especializado: herramientas eléctricas, manuales, de medición y equipos de seguridad. Calidad funcional y diseño para profesionales y aficionados exigentes.': 'Power up your projects with our specialised catalogue: power, hand and measuring tools and safety equipment. Functional quality and design for demanding professionals and enthusiasts.',
    'Selección de kits de herramientas': 'Selection of tool kits',
    'Construcción': 'Construction',
    'Suelos y revestimientos': 'Floors & coverings',
    'Ventanas y puertas': 'Windows & doors',
    'Herramientas': 'Tools',
    'Ver bricolaje': 'See DIY',
    'Gama completa para hogar y empresa.': 'Full range for home and business.',
    'Ofertas en Hogar': 'Home deals',
    'Ofertas en Papelería y ofimática': 'Stationery & office deals',
    'Ver productos de limpieza': 'See cleaning products',
    'Productos de higiene': 'Hygiene products',
    'Higiene y limpieza profesional': 'Professional hygiene & cleaning',
    'Packaging alimentario y no alimentario': 'Food and non-food packaging',
    'Vasos': 'Cups',
    'Vasos personalizables': 'Customisable cups',
    'Bolsas de papel kraft': 'Kraft paper bags',
    'Cartón kraft/blanco de doble capa, apto para bebidas calientes y frías. Capacidad según tamaño (20–75 ml).': 'Double-wall kraft/white cardboard, suitable for hot and cold drinks. Capacity by size (20–75 ml).',

    // Ofertas primavera
    'Renueva tu taller esta primavera': 'Refresh your workshop this spring',
    'Renueva tu negocio, tu taller y tu hogar con los imprescindibles de la temporada al mejor precio. Envíos a toda La Habana y recogida en Always Points.': 'Refresh your business, workshop and home with the season’s essentials at the best price. Delivery across Havana and collection at Always Points.',
    'Chollos de temporada': 'Seasonal bargains',
    'Las más rebajadas': 'Biggest reductions',
    'Las más rebajadas': 'Biggest reductions',
    'Ver todas las ofertas': 'See all offers',
    'Menos de 20€': 'Under €20',
    'Más de 50€': 'Over €50',
    'Nueva gama BUSC': 'New BUSC range',

    // Producto / personalización
    'Vendido por': 'Sold by',
    'Modelo': 'Model',
    'Madera': 'Wood',
    'Metal': 'Metal',
    'Unidades': 'Units',
    'Unidades por pack': 'Units per pack',
    'Total por pack': 'Total per pack',
    'Precio unitario': 'Unit price',
    'Cantidad': 'Quantity',
    'Añadir': 'Add',
    'IVA incl.': 'VAT incl.',
    'Dimensiones y material': 'Dimensions & material',
    'Más información': 'More information',
    'Cabezal de acero al carbono, mango de madera de fresno. Longitud 33 cm. Peso 450 g.': 'Carbon steel head, ash wood handle. Length 33 cm. Weight 450 g.',
    'Garantía de 2 años. Envío a domicilio en La Habana o recogida en punto Always Point.': '2-year warranty. Home delivery in Havana or collection at an Always Point.',
    'Comprar en pack': 'Buy as a pack',
    'Tu producto': 'Your product',
    'Añádelo junto a un complemento': 'Add it together with an add-on',
    'Llave inglesa con mango de silicona': 'Wrench with silicone handle',
    'Información sobre la llave inglesa maravillosa': 'Information about the wonderful wrench',
    'Ambos productos por:': 'Both products for:',
    'Ahorra asegurando tu stock': 'Save by securing your stock',
    'Suscribirme a este producto': 'Subscribe to this product',
    'Otros clientes también vieron': 'Other customers also viewed',
    'Productos relacionados': 'Related products',
    'Mostrar más': 'Show more',
    '100 unidades': '100 units',
    'Total': 'Total',
    'Total:': 'Total:',
    'Zona de personalización': 'Personalisation area',
    'Frontal': 'Front',
    'Envolvente': 'Wrap-around',
    'Color': 'Colour',
    'A todo color': 'Full colour',
    'Negro': 'Black',
    'Tamaño': 'Size',
    'Descargar archivos de apoyo:': 'Download support files:',
    'Plantilla para diseñar': 'Design template',
    'Guía para impresión': 'Printing guide',
    'Producto biodegradable y compostable. Personalización mediante impresión frontal o envolvente.': 'Biodegradable and compostable product. Personalisation via front or wrap-around printing.',
    'Vaso de cartón kraft': 'Kraft cardboard cup',
    'Vasos desechables biodegradables de la marca Envases & Embalajes.': 'Biodegradable disposable cups from the Envases & Embalajes brand.',
    'Doble capa': 'Double wall',
    'Corrugado': 'Corrugated',
    'Corrugado doble': 'Double corrugated',
    'Sencillo': 'Single',
    'Personalizables': 'Customisable',
    'Personalización': 'Personalisation',
    'Comprar ahora': 'Buy now',
    'Ver detalle': 'View details',

    // Servicios / business
    'Servicios': 'Services',
    'Nuestros servicios': 'Our services',
    'Servicios al alcance': 'Services within reach',
    'Servicios para empresas': 'Business services',
    'Planificación y asesoramiento': 'Planning & consulting',
    'Reformas y construcciones': 'Renovations & construction',
    'Imprenta y reprografía': 'Printing & reprography',
    'Personalización de productos': 'Product customisation',
    'Personalizar →': 'Customise →',
    'Personalizar ahora →': 'Customise now →',
    'Solicitar asesoría →': 'Request advice →',
    'Localizar tienda →': 'Find store →',
    'Contratar diseño por 60€': 'Book a design for €60',
    'Contactar →': 'Contact →',
    'Crear mi detalle →': 'Create my gift →',
    'Pedir presupuesto →': 'Request a quote →',
    'Programar pedido →': 'Schedule order →',
    'Ver envíos →': 'See shipping →',
    'Ver FAQ →': 'See FAQ →',
    'Potencia tus proyectos con nuestro servicio de impresión, reprografía y encuadernación. Localiza la tienda física más cercana para un acabado impecable.': 'Power up your projects with our printing, reprography and binding service. Find the nearest physical store for a flawless finish.',
    'Haz realidad tu proyecto con nuestros servicios y materiales de reforma y construcción. Solicita un presupuesto a medida y el equipo Alzan lo gestiona por ti.': 'Make your project happen with our renovation and construction services and materials. Request a custom quote and the Alzan team will handle it for you.',
    'Ya sea el diseño de tus envases, una reforma integral o un proyecto desde cero, te asesoramos de forma presencial o telemática.': 'Whether it’s the design of your packaging, a full renovation or a project from scratch, we advise you in person or remotely.',
    'Te ayudamos a elegir lo que necesitas.': 'We help you choose what you need.',
    'El marketplace para tu empresa': 'The marketplace for your business',
    'En Always para empresas tenemos servicios que te ayudan a personalizar tu negocio con ventajas adicionales para transformar el día a día de tu empresa.': 'At Always for business we have services that help you personalise your business with added benefits to transform your company’s day-to-day.',
    'Compra al por mayor': 'Buy wholesale',
    'Precios especiales por volumen para tu negocio.': 'Special volume pricing for your business.',
    'Suministro periódico': 'Recurring supply',
    'Programa la reposición de tu stock.': 'Schedule your stock replenishment.',
    'Facturación para empresas': 'Business invoicing',
    'Registra tu empresa y accede a ventajas exclusivas.': 'Register your company and access exclusive benefits.',
    'Soluciones para empresas que quieren crecer: personalización de marca, aprovisionamiento periódico, proyectos de reforma a medida y detalles para eventos. Descubre cómo ayudamos a otros negocios y empieza el tuyo.': 'Solutions for businesses that want to grow: brand personalisation, recurring supply, bespoke renovation projects and details for events. Discover how we help other businesses and start yours.',
    'Crear cuenta de empresa': 'Create a business account',
    'Personalización': 'Personalisation',
    'Tu marca en todas partes': 'Your brand everywhere',
    'Aprovisionamiento': 'Supply',
    'Always Stock': 'Always Stock',
    'Recibe de forma periódica los productos de nuestra web con opción a suscripción o contacta con nosotros para recibir periódicamente un producto en concreto. ¿Cómo funciona?': 'Receive our website’s products on a recurring basis with a subscription option, or contact us to regularly receive a specific product. How does it work?',
    'Indícanos qué productos necesitas y con qué frecuencia.': 'Tell us which products you need and how often.',
    'Te enviamos los productos de forma periódica, sin necesidad de realizar nuevos pedidos.': 'We send you the products on a recurring basis, with no need to place new orders.',
    'Modifica cantidades o frecuencias en cualquier momento según necesites.': 'Change quantities or frequencies at any time as you need.',
    'Proyectos a medida': 'Bespoke projects',
    'Proyectos a medida con Alzan': 'Bespoke projects with Alzan',
    'Eventos': 'Events',
    'Ocasiones memorables': 'Memorable occasions',
    '¿Hablamos de tu negocio?': 'Shall we talk about your business?',
    'Cuéntanos qué necesitas y un asesor de Always Business te preparará una propuesta a medida.': 'Tell us what you need and an Always Business advisor will prepare a tailored proposal.',
    'Contactar': 'Contact',
    'Asesoría': 'Consulting',
    'Diseño': 'Design',
    'Garantía de calidad': 'Quality guarantee',
    'Programa envíos periódicos de los productos que más usas y asegura tu stock.': 'Schedule recurring deliveries of the products you use most and secure your stock.',
    'Cuenta profesional': 'Professional account',
    'Cuenta verificada': 'Verified account',
    'Registrarse como profesional': 'Register as a professional',
    // service bullets
    'Envases y embalajes': 'Packaging',
    'Cajas para envíos y regalos': 'Boxes for shipping and gifts',
    'Bolsas de papel y tela': 'Paper and fabric bags',
    'Etiquetas y adhesivos': 'Labels and stickers',
    'Camisetas y uniformes': 'T-shirts and uniforms',
    'Camisetas y textiles de trabajo': 'T-shirts and workwear',
    'Material promocional y merchandising': 'Promotional material and merchandising',
    'Invitaciones y tarjetas': 'Invitations and cards',
    'Detalles y kits de bienvenida': 'Gifts and welcome kits',
    'Packaging de regalo': 'Gift packaging',
    'Detalles corporativos y merchandising': 'Corporate gifts and merchandising',
    'Adaptamos logotipos, mensajes y diseños para crear una imagen profesional para atraer clientes. Ya sea para lanzar una nueva marca o fortalecer tu presencia comercial, te ayudamos a comunicar tu marca con productos personalizables como:': 'We adapt logos, messages and designs to create a professional image to attract customers. Whether launching a new brand or strengthening your commercial presence, we help you communicate your brand with customisable products such as:',
    'Nuestro servicio te permite adaptar logotipos, mensajes y diseños para crear una imagen profesional para atraer clientes. Ya sea para lanzar una nueva marca o fortalecer tu presencia comercial, te ayudamos con el diseño, la aplicación del logo y selección de productos personalizables como:': 'Our service lets you adapt logos, messages and designs to create a professional image to attract customers. Whether launching a new brand or strengthening your commercial presence, we help you with the design, logo application and selection of customisable products such as:',
    'Te acompañamos en cada etapa de tu proyecto, ofreciéndote asesoramiento personalizado para encontrar las mejores soluciones en diseño y materiales Alzan. Proyectos de construcción, reforma y adecuación de espacios, colaborando con profesionales especializados Sanguaro para garantizar resultados de calidad. ¡Contacta ahora para solicitar presupuesto!': 'We support you at every stage of your project, offering personalised advice to find the best solutions in Alzan design and materials. Construction, renovation and space-fitting projects, working with specialised Sanguaro professionals to guarantee quality results. Contact us now to request a quote!',
    'Algunos de nuestros productos personalizados con la empresa colaboradora E&E:': 'Some of our personalised products with our partner company E&E:',
    'Productos personalizados': 'Personalised products',

    // Cuenta / perfil / pedidos / direcciones / listas
    '¡Bienvenid@! Esta es tu área personal. Gestiona tus pedidos y preferencias desde aquí.': 'Welcome! This is your personal area. Manage your orders and preferences from here.',
    'Mi perfil': 'My profile',
    'Mis pedidos': 'My orders',
    'Pedidos': 'Orders',
    'Gestión de pedidos y entregas': 'Order and delivery management',
    'Gestión de pedidos, facturas y seguimiento.': 'Order, invoice and tracking management.',
    'Gestión de tu cuenta y atención al cliente': 'Account management and customer service',
    'Configuración de mi cuenta': 'My account settings',
    'Direcciones': 'Addresses',
    'Dirección': 'Address',
    'Dirección de entrega': 'Delivery address',
    'Añadir dirección': 'Add address',
    'Predeterminada': 'Default',
    'Editar': 'Edit',
    'Cambiar': 'Change',
    'Gestionar': 'Manage',
    'Listas de favoritos': 'Wishlists',
    'Encuentra todas tus listas en un solo lugar. Clasifica tus favoritos en diferentes listas y guárdalas aquí.': 'Find all your lists in one place. Organise your favourites into different lists and save them here.',
    'Método de pago': 'Payment method',
    'Datos del pedido': 'Order details',
    'Resumen del pedido': 'Order summary',
    'Resumen': 'Summary',
    'Tu pedido': 'Your order',
    'En preparación': 'Being prepared',
    'Entregado': 'Delivered',
    'Ver detalle': 'View details',
    'Solicitar devolución': 'Request return',
    'Mis pedidos': 'My orders',
    '¿Qué quieres devolver?': 'What do you want to return?',
    'Selecciona los productos que quieres devolver.': 'Select the products you want to return.',
    'Nombre:': 'Name:',
    'Nombre': 'Name',
    'Nombre comercial:': 'Trade name:',
    'Apellidos:': 'Surname:',
    'Correo': 'Email',
    'Correo electrónico': 'Email',
    'Correo electrónico:': 'Email:',
    'Contraseña:': 'Password:',
    'Teléfono': 'Phone',
    'Titular:': 'Holder:',
    'NIF / CIF:': 'Tax ID:',
    'Razón social': 'Legal name',
    'Número de identificación de empresa': 'Company identification number',
    'Domicilio:': 'Address:',
    'Contacto:': 'Contact:',
    'Email:': 'Email:',
    'Tu código postal:': 'Your postal code:',
    'Usuario Fantástico': 'Fantastic User',

    // Carrito / checkout / confirmación
    'Carrito': 'Cart',
    'Tu producto': 'Your product',
    'Añadir código descuento': 'Add discount code',
    'Productos:': 'Products:',
    'Envío a domicilio:': 'Home delivery:',
    'Recogida en punto:': 'Pickup point:',
    'Gastos de envío:': 'Shipping costs:',
    'Se calculará en el siguiente paso': 'Calculated in the next step',
    'Comprobar disponibilidad de entrega': 'Check delivery availability',
    'Continuar': 'Continue',
    'Volver a la tienda': 'Back to shop',
    'Confirmación de compra': 'Purchase confirmation',
    '¡Gracias por comprar en Always!': 'Thank you for shopping at Always!',
    'se ha realizado correctamente.': 'was completed successfully.',
    'Tiempo estimado de entrega de 7 a 15 días': 'Estimated delivery time 7 to 15 days',
    'Pago seguro': 'Secure payment',

    // Login / registro
    'Iniciar sesión': 'Sign in',
    'Registrarse': 'Sign up',
    'Continuar con Google': 'Continue with Google',
    '¿Has olvidado tu contraseña?': 'Forgot your password?',
    '¡Nos alegramos de verte!': 'Great to see you!',
    'He leído y acepto la': 'I have read and accept the',
    'Entrar en tienda': 'Enter store',

    // Envíos / puntos recogida
    'Envíos': 'Shipping',
    'Envíos y entregas': 'Shipping and delivery',
    'Envíos y recogida': 'Shipping and collection',
    'Envíos y recogida en tienda': 'Shipping and in-store collection',
    'Envío a domicilio en La Habana': 'Home delivery in Havana',
    'Envío a toda La Habana': 'Delivery across Havana',
    'Recogida en Always Points': 'Collection at Always Points',
    'A domicilio en Cuba (7–12 días) o recogida en tienda (3–10 días).': 'Home delivery in Cuba (7–12 days) or in-store collection (3–10 days).',
    'de 4 a 10 días.': '4 to 10 days.',
    'de 7 a 15 días.': '7 to 15 days.',
    'Enviamos a domicilio en La Habana y ofrecemos recogida en puntos Always Point en Cuba. Consulta': 'We deliver to your door in Havana and offer collection at Always Point locations in Cuba. See',
    'Enviamos a domicilio en toda La Habana y ofrecemos recogida en nuestros puntos Always Point. Introduce tu código postal en la barra superior para ver tu punto de recogida más cercano.': 'We deliver to your door across Havana and offer collection at our Always Point locations. Enter your postal code in the top bar to see your nearest pickup point.',
    'Recoge tu pedido en el Always Point más cercano de La Habana. Introduce tu código postal para encontrar el punto que te corresponde.': 'Collect your order at the nearest Always Point in Havana. Enter your postal code to find the point that matches you.',
    'Punto de recogida': 'Pickup point',
    'Punto de recogida · Tienda Artex': 'Pickup point · Artex Store',
    'Puntos de recogida': 'Pickup points',
    'Tienda Artex': 'Artex Store',
    'Localizar tienda →': 'Find store →',

    // Devoluciones
    'Devoluciones': 'Returns',
    'Cambios y devoluciones': 'Exchanges and returns',
    'Política de devoluciones': 'Returns policy',
    'política de devoluciones': 'returns policy',
    'Devolución 30 días': '30-day returns',
    '30 días de devolución': '30-day returns',
    '30 días': '30 days',
    'Cómo devolver': 'How to return',

    // genéricos / navegación
    'Inicio': 'Home',
    'Catálogo': 'Catalogue',
    'Contacta': 'Contact',
    'Contacto': 'Contact',
    'Aviso legal': 'Legal notice',
    'Condiciones de compra': 'Terms of purchase',
    'Política de cookies': 'Cookie policy',
    'Política de privacidad': 'Privacy policy',
    'Preguntas frecuentes': 'FAQ',
    'Suscripciones': 'Subscriptions',
    'Cada 30 días · 200 uds': 'Every 30 days · 200 pcs',
    'Cada 45 días · 100 uds': 'Every 45 days · 100 pcs',
    'Activa': 'Active',
    'Pausada': 'Paused',
    'Producto': 'Product',
    'Tipo': 'Type',
    'Finalidad': 'Purpose',
    'Estado': 'Status',
    'Precios en euros (€)': 'Prices in euros (€)',
    '¿En qué moneda son los precios?': 'What currency are prices in?',
    'Consulta también nuestra': 'See also our',
    'Sugerencias para ti': 'Suggestions for you',
    'Lo más buscado': 'Most searched',
    'Te ayudamos a elegir lo que necesitas.': 'We help you choose what you need.',
    'Ninguna': 'None',
    'Sí.': 'Yes.',
    'No, son necesarias.': 'No, they are necessary.',
    'Técnicas (esenciales)': 'Technical (essential)',
    'Analíticas': 'Analytics',
    'Publicitarias': 'Advertising',
    'Comunicaciones comerciales': 'Marketing communications',
    'Funcionamiento del sitio, carrito, sesión e idioma.': 'Site operation, cart, session and language.',
    'Recordar preferencias como el código postal o el punto de recogida.': 'Remember preferences such as the postal code or the pickup point.',
    'Medir el uso del sitio de forma agregada para mejorarlo.': 'Measure site usage in aggregate to improve it.',
    'Mostrar contenido y ofertas relevantes.': 'Show relevant content and offers.',
    'Cumplimiento de obligaciones legales': 'Compliance with legal obligations',
    'Gestión de tu cuenta y atención al cliente': 'Account management and customer service',
    'Ver todas las ofertas': 'See all offers',
    'Compra al por mayor': 'Buy wholesale',

    // Suscripciones extra
    'Programa la reposición de tu stock.': 'Schedule your stock replenishment.',
    'Suministro periódico': 'Recurring supply',

    // varios botones
    'Contactar': 'Contact',
    'Contratar': 'Book',
    'Registrarse': 'Sign up',
    'Iniciar sesión': 'Sign in',
    'Continuar': 'Continue',
    'Cambiar': 'Change',
    'Gestionar': 'Manage',
    'Editar': 'Edit',
    'Mostrar más': 'Show more',
    // Extra (auditoría)
    '¿Dudas?': 'Questions?',
    'Aceptar todas': 'Accept all',
    'E-mail': 'Email',
    'Enviar archivo por email': 'Send file by email',
    'Rechazar no esenciales': 'Reject non-essential',
    'perfil': 'profile',
    'taladro': 'drill',
    'y las': 'and the',
    ', la': ', the',
    // Nombres de producto de ejemplo (cesta / pedidos / relacionados)
    'Kit de herramientas manuales y equipamiento eléctrico de corte en maletín transportable.': 'Manual tool kit and electric cutting equipment in a portable case.',
    'Martillo Multiusos · 1 ud': 'Multipurpose Hammer · 1 pc',
    'Martillo Multiusos HomeMaster': 'HomeMaster Multipurpose Hammer',
    'Pack platos biodegradables': 'Biodegradable plates pack',
    'Pack platos y cubiertos · 1 ud': 'Plates & cutlery pack · 1 pc',
    'Ratón Gamer · 10 uds': 'Gamer Mouse · 10 pcs',
    // Tarjetas de servicios (inline JS) y Always Business
    'Personaliza tu negocio: crea tu propio diseño para envases y embalajes con la marca de tu empresa — vasos, camisetas, bolsas, cajas y más.': 'Personalise your business: create your own design for packaging with your company’s brand — cups, t-shirts, bags, boxes and more.',
    'Programa tu siguiente pedido: recibe de forma periódica los envases y productos que necesitas para el día a día de tu empresa.': 'Schedule your next order: regularly receive the packaging and products you need for your company’s day-to-day.',
    'Asóciate para tu próxima reforma. Asesoramiento en diseño y materiales para tus proyectos de reforma y construcción.': 'Partner up for your next renovation. Advice on design and materials for your renovation and construction projects.',
    'Crea tus invitaciones y detalles únicos para que tu evento deje huella en todos tus invitados.': 'Create your unique invitations and gifts so your event leaves a mark on all your guests.',
    'Always stock': 'Always Stock',
    'Novedad': 'New',
    'Elegir este punto': 'Choose this point',
    'C.P.': 'ZIP',
    'Impresora Camon MX3 Serie 5000T': 'Camon MX3 Series 5000T printer',
    'Teclado gamer RX500 Power Plus': 'RX500 Power Plus gaming keyboard',
    'Raton Gamer HERO T480': 'HERO T480 Gaming Mouse',
    'Raton Gamer Hero T480': 'HERO T480 Gaming Mouse',
    'Waco pen digital S80': 'Waco S80 digital pen',
    'Cuenco kraft biodegradable': 'Biodegradable kraft bowl',
    'Cumple de Ana': 'Ana’s birthday',
    'Papelería y ofimática': 'Stationery & office',
    'Archivador de palanca A4': 'A4 lever arch file',
    'El presente aviso legal regula el uso del sitio web Always Plaza (en adelante, «el Sitio»), un marketplace que permite la compra de productos de bricolaje, envases y embalajes, papelería y ofimática, fotografía, hogar y servicios, con envío o recogida en La Habana (Cuba). La moneda de compra es el euro (€) y el idioma principal es el español.': 'This legal notice governs the use of the Always Plaza website (hereinafter, “the Site”), a marketplace for purchasing DIY, packaging, stationery & office, photography, home and services products, with shipping or collection in Havana (Cuba). The purchase currency is the euro (€) and the main language is Spanish.',
    'El acceso y uso del Sitio atribuye la condición de usuario e implica la aceptación plena de este aviso legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios y a no emplearlos para actividades ilícitas o contrarias a la buena fe.': 'Accessing and using the Site grants user status and implies full acceptance of this legal notice. The user undertakes to make appropriate use of the content and services and not to use them for unlawful activities or activities contrary to good faith.',
    'Todos los contenidos del Sitio (textos, fotografías, gráficos, imágenes, iconos, logotipos, software y diseño) son titularidad del titular o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.': 'All content on the Site (text, photographs, graphics, images, icons, logos, software and design) belongs to the owner or to third parties who have authorised its use. Its reproduction, distribution or transformation without express authorisation is prohibited.',
    'El titular no se hace responsable de los daños derivados del uso indebido del Sitio ni de las interrupciones, virus o fallos técnicos ajenos a su control. El titular podrá modificar sin previo aviso los contenidos, la configuración y la disponibilidad del Sitio.': 'The owner is not liable for damages arising from improper use of the Site, nor for interruptions, viruses or technical failures beyond its control. The owner may modify the content, configuration and availability of the Site without prior notice.',
    'Esta Política de cookies explica qué son las cookies, cuáles utiliza Always Plaza y cómo puedes gestionarlas. Al aceptar, consientes el uso de cookies según se describe a continuación; puedes cambiar tu elección en cualquier momento desde «Configurar cookies» en el pie de página.': 'This Cookie Policy explains what cookies are, which ones Always Plaza uses and how you can manage them. By accepting, you consent to the use of cookies as described below; you can change your choice at any time from “Cookie settings” in the footer.',
    'Tratamos los datos que nos facilitas al registrarte, comprar o contactar con nosotros: nombre y apellidos, correo electrónico, teléfono, dirección de entrega o punto de recogida, y datos de facturación y pago. También datos de navegación mediante cookies (ver': 'We process the data you provide when registering, purchasing or contacting us: first and last name, email, phone, delivery address or pickup point, and billing and payment data. Also browsing data via cookies (see',
    'Podemos ceder datos a proveedores de logística y transporte (para el envío a La Habana), pasarelas de pago y prestadores tecnológicos, siempre con las garantías adecuadas. No cedemos tus datos a terceros con fines comerciales sin tu consentimiento.': 'We may share data with logistics and transport providers (for delivery to Havana), payment gateways and technology providers, always with appropriate safeguards. We do not share your data with third parties for commercial purposes without your consent.',
    'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a privacidad@alwaysmk.com. Tienes derecho a presentar una reclamación ante la autoridad de control competente.': 'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to privacidad@alwaysmk.com. You have the right to lodge a complaint with the competent supervisory authority.',
    'Para comprar, añade los productos a la cesta, revisa el resumen del pedido, introduce tus datos de entrega (domicilio en La Habana o punto de recogida) y completa el pago. Recibirás una confirmación con el número de pedido.': 'To buy, add the products to the cart, review the order summary, enter your delivery details (address in Havana or pickup point) and complete the payment. You will receive a confirmation with the order number.',
    // ---- Catálogo: taxonomía / subcategorías ----
    'Accesorios de herramientas eléctricas': 'Power tool accessories',
    'Almacenamiento': 'Storage',
    'Archivo y organización': 'Filing & organisation',
    'Atornillar y apretar': 'Screwing & tightening',
    'Baterías': 'Batteries',
    'Baterías y cargadores': 'Batteries & chargers',
    'Baño': 'Bathroom',
    'Bolsas de papel': 'Paper bags',
    'Bolígrafos': 'Pens',
    'Bolígrafos y lápices': 'Pens & pencils',
    'Botas de trabajo': 'Work boots',
    'Cañitas de papel': 'Paper straws',
    'Cocina': 'Kitchen',
    'Cocina y menaje': 'Kitchen & tableware',
    'Construcción': 'Construction',
    'Cortar y lijar': 'Cutting & sanding',
    'Cuadernos y libretas': 'Notebooks',
    'Cuadernos de contabilidad año 2027': 'Accounting notebooks year 2027',
    'Cubiertos de madera': 'Wooden cutlery',
    'Cubiertos de madera desechables': 'Disposable wooden cutlery',
    'Cámaras': 'Cameras',
    'De especialidad': 'Specialty',
    'Decoración': 'Decoration',
    'Demolición manual': 'Manual demolition',
    'Detectores y cintas': 'Detectors & tapes',
    'Discos y fundas': 'Discs & cases',
    'Eléctricas': 'Power tools',
    'Energía': 'Power',
    'Envases take away': 'Takeaway containers',
    'Envase take away kraft': 'Kraft takeaway container',
    'Equipos de seguridad': 'Safety equipment',
    'Escritura': 'Writing',
    'Flexómetros': 'Tape measures',
    'Fontanería': 'Plumbing',
    'Fotografía': 'Photography',
    'Herramientas de medición': 'Measuring tools',
    'Herramientas eléctricas': 'Power tools',
    'Herramientas manuales': 'Hand tools',
    'Hogar': 'Home',
    'Iluminación': 'Lighting',
    'Iluminación de estudio': 'Studio lighting',
    'Impresión fotográfica': 'Photo printing',
    'Impresión y tinta': 'Printing & ink',
    'Kit herramientas eléctricas': 'Power tool kit',
    'Lápices': 'Pencils',
    'Martillos y mazas': 'Hammers & mallets',
    'Material de oficina': 'Office supplies',
    'Medición': 'Measuring',
    'Organización y almacenaje': 'Organisation & storage',
    'Papel y sobres': 'Paper & envelopes',
    'Pintura': 'Paint',
    'Reforma de casa': 'Home renovation',
    'Ropa de trabajo': 'Workwear',
    'Suelos y revestimientos': 'Floors & coverings',
    'Tarjetas de memoria': 'Memory cards',
    'Textil del hogar': 'Home textiles',
    'Trípodes y soportes': 'Tripods & mounts',
    'Vasos papel blanco': 'White paper cups',
    'Vasos papel kraft': 'Kraft paper cups',
    'Ventanas y puertas': 'Windows & doors',
    'Álbumes y marcos': 'Albums & frames',
    'Cocina, baño, textil, decoración y organización para tu casa.': 'Kitchen, bathroom, textiles, decoration and organisation for your home.',
    'Cuadernos, escritura, material de oficina e impresión para el día a día y tu empresa.': 'Notebooks, writing, office supplies and printing for everyday life and your business.',
    'Cámaras, objetivos, iluminación y accesorios para profesionales y aficionados.': 'Cameras, lenses, lighting and accessories for professionals and enthusiasts.',
    'Envases biodegradables y de marca blanca: vasos, cajas take away, cuencos, platos, bolsas y más.': 'Biodegradable and white-label packaging: cups, takeaway boxes, bowls, plates, bags and more.',
    'Herramientas, materiales y todo lo necesario para tus proyectos de construcción y reforma.': 'Tools, materials and everything you need for your construction and renovation projects.',
    // ---- Catálogo: nombres de producto ----
    'Taladro percutor 750W': 'Hammer drill 750W',
    'Set de herramientas HomeMaster': 'HomeMaster tool set',
    'Llave inglesa ajustable': 'Adjustable wrench',
    'Pintura pared mate 4L': 'Matte wall paint 4L',
    'Martillo de carpintero': 'Claw hammer',
    'Juego de destornilladores 6 pzas': 'Screwdriver set 6 pcs',
    'Sierra de mano universal': 'Universal hand saw',
    'Nivel láser autonivelante': 'Self-levelling laser level',
    'Caja de tornillos surtidos': 'Assorted screws box',
    'Guantes de trabajo reforzados': 'Reinforced work gloves',
    'Cinta métrica 5 m': 'Tape measure 5 m',
    'Gafas de protección': 'Safety glasses',
    'Rodillo de pintura antigoteo': 'Drip-free paint roller',
    'Cuaderno de contabilidad 2027': 'Accounting notebook 2027',
    'Bolígrafos punta fina (pack 12)': 'Fine-tip pens (pack of 12)',
    'Bolígrafos Mapet punta fina': 'Mapet fine-tip pens',
    'Pack de folios A4 500 h': 'A4 paper pack 500 sheets',
    'Organizador de escritorio': 'Desk organiser',
    'Notas adhesivas de colores': 'Coloured sticky notes',
    'Grapadora metálica': 'Metal stapler',
    'Set de subrayadores pastel': 'Pastel highlighter set',
    'Tijeras de oficina': 'Office scissors',
    'Calculadora científica': 'Scientific calculator',
    'Sobres blancos (pack 50)': 'White envelopes (pack of 50)',
    'Cámara compacta 20 MP': 'Compact camera 20 MP',
    'Bolsa acolchada para cámara': 'Padded camera bag',
    'Foco LED de estudio': 'Studio LED light',
    'Fondo fotográfico blanco': 'White photo backdrop',
    'Tarjeta de memoria 128 GB': 'Memory card 128 GB',
    'Batería recargable': 'Rechargeable battery',
    'Aro de luz LED': 'LED ring light',
    'Kit de limpieza de lentes': 'Lens cleaning kit',
    'Trípode de aluminio': 'Aluminium tripod',
    'Set de sartenes antiadherentes': 'Non-stick pan set',
    'Juego de toallas (4 pzas)': 'Towel set (4 pcs)',
    'Lámpara de mesa LED': 'LED table lamp',
    'Organizador de armario': 'Wardrobe organiser',
    'Juego de sábanas': 'Sheet set',
    'Set de cuchillos de cocina': 'Kitchen knife set',
    'Cesto de la colada plegable': 'Foldable laundry basket',
    'Cortina de baño impermeable': 'Waterproof shower curtain',
    'Batidora de mano': 'Hand blender',
    'Juego de tazas de café': 'Coffee mug set',
    'Alfombra de baño': 'Bath mat',
    'Perchas de terciopelo (pack)': 'Velvet hangers (pack)',
    'Recipientes herméticos (set)': 'Airtight containers (set)',
    'Manta de sofá': 'Sofa blanket',
    // ---- Envases ----
    'Vaso de cartón kraft': 'Kraft cardboard cup',
    'Vaso de papel blanco': 'White paper cup',
    'Vaso sencillo blanco': 'Single white cup',
    'Vaso sencillo kraft': 'Single kraft cup',
    'Vaso sencillo E&E': 'Single E&E cup',
    'Vaso kraft de doble capa': 'Double-wall kraft cup',
    'Vaso kraft corrugado de doble capa': 'Double-wall corrugated kraft cup',
    'Vaso corrugado kraft con tapa': 'Corrugated kraft cup with lid',
    'Cuenco blanco con tapa': 'White bowl with lid',
    'Porta-vasos de fibra moldeada': 'Moulded fibre cup holder',
    'Bolsa de papel blanca': 'White paper bag',
    'Bolsa de papel kraft con asa plana': 'Kraft paper bag with flat handle',
    'Bolsa de papel kraft con asa rizada': 'Kraft paper bag with twisted handle',
    'Bolsas papel craft personalizables': 'Customisable kraft paper bags',
    'Caja de pizza kraft': 'Kraft pizza box',
    'Cañitas de papel de colores': 'Coloured paper straws',
    'Plato blanco de cartón (24 uds)': 'White cardboard plate (24 pcs)',
    'Plato de caña kraft (24 uds)': 'Kraft cane plate (24 pcs)',
    'Pack platos y cubiertos biodegradables': 'Biodegradable plates & cutlery pack',
    'Pintura anti-moho 500 ml.': 'Anti-mould paint 500 ml.',
    'Pintura pared azul Klein P 286C': 'Klein blue wall paint P 286C',
    'Cuadernos de contabilidad 2027': 'Accounting notebooks 2027',
    // ---- Descripciones de producto ----
    'Producto estupendo que no te puedes perder': 'A great product you can’t miss',
    'Hay males peores que no saber cómo poner un texto.': 'There are worse things than not knowing what text to put.',
    'Biodegradable y compostable.': 'Biodegradable and compostable.',
    'Con cierre. Apto para alimentos calientes.': 'With closure. Suitable for hot food.',
    'Desde 100 uds. Ideal para take away.': 'From 100 pcs. Ideal for takeaway.',
    'Desde 100 uds. Resistente y reutilizable.': 'From 100 pcs. Sturdy and reusable.',
    'Desde 100 uds. Varios tamaños. Biodegradable.': 'From 100 pcs. Various sizes. Biodegradable.',
    'Desde 100 unidades. Diferentes tamaños y colores.': 'From 100 units. Different sizes and colours.',
    'Desde 50 uds. 500 ml. Para sopas y ensaladas.': 'From 50 pcs. 500 ml. For soups and salads.',
    'Desde 50 uds. Cartón corrugado resistente.': 'From 50 pcs. Sturdy corrugated cardboard.',
    'Desde 50 uds. Cierre hermético.': 'From 50 pcs. Airtight closure.',
    'Para 4 vasos. Transporte seguro.': 'For 4 cups. Safe transport.',
    'Resistente y ligero.': 'Sturdy and lightweight.',
    'Tenedor, cuchara y cuchillo. Desde 50 packs.': 'Fork, spoon and knife. From 50 packs.',
    'Tinta azul. Disponibles en variedad de colores.': 'Blue ink. Available in a variety of colours.',
    '3 Unidades de 200 páginas por ud.': '3 units of 200 pages each.',
    'Kit completo para bricolaje y reparaciones del hogar.': 'Complete kit for DIY and home repairs.',
    'La herramienta maravilla adecuada para el uso doméstico…': 'The wonder tool suited for home use…',
    'Equipado con el sensor óptico PrecisionCore T3, el HERO T4…': 'Equipped with the PrecisionCore T3 optical sensor, the HERO T4…',
    'Ratón inalámbrico hergonómico 36000 DPI 8 botones.': 'Ergonomic wireless mouse 36000 DPI 8 buttons.',
    'Teclado mecánico inalámbrico.': 'Wireless mechanical keyboard.',
    'Teclado mecánico inalámbrico retroiluminado.': 'Backlit wireless mechanical keyboard.',
    'Lápiz digital profesional para diseño gráfico y animación 3D.': 'Professional digital pen for graphic design and 3D animation.',
    'Impresora de tinta inyectada multiformato A3 A4 A2 digital.': 'Multi-format A3 A4 A2 digital inkjet printer.',
    'Rotativa apta para uso profesional. Corte, lijado y grabado de precisión.': 'Rotary tool for professional use. Precision cutting, sanding and engraving.',
    '12 piezas de platos de cartón craft, tenedores, cuchillos y c…': '12 pieces of kraft cardboard plates, forks, knives and s…',
    '25 unidades de cada por paquete: plato, tenedor, cuchillo y cuchara.': '25 units of each per pack: plate, fork, knife and spoon.',
    // ---- Puntos de recogida / varios ----
    'Los más vendidos': 'Best sellers',
    'Más vendido': 'Best seller',
    'Envíos a domicilio y recogida': 'Home delivery and collection',
    'Lun–Sáb 9:00–18:00': 'Mon–Sat 9:00–18:00',
    'Lun–Sáb 9:00–19:00': 'Mon–Sat 9:00–19:00',
  };
  const DICT_PH = {
    'Cuéntanos en qué podemos ayudarte…': 'Tell us how we can help…',
    'Ej. 10200': 'e.g. 10200',
    'Empresa S.L.': 'Company Ltd.',
    'Tu nombre': 'Your name',
    'Usuario@alwaysmk.com': 'user@alwaysmk.com',
    'tucorreo@ejemplo.com': 'youremail@example.com',
    'Usuario': 'Username',
  };
  const DRULES = [
    [/^(\d+) productos? encontrados$/i, (m) => `${m[1]} product${m[1] === '1' ? '' : 's'} found`],
    [/^(\d+) art[íi]culos?$/i, (m) => `${m[1]} item${m[1] === '1' ? '' : 's'}`],
    [/^(\d+) uds?$/i, (m) => `${m[1]} pcs`],
    [/^(\d+) unidades?$/i, (m) => `${m[1]} unit${m[1] === '1' ? '' : 's'}`],
    [/^Pedido (#\S+)$/i, (m) => `Order ${m[1]}`],
    [/^Punto (\d+)(.*)$/i, (m) => `Point ${m[1]}${m[2]}`],
    [/^Vendido por (.+)$/i, (m) => `Sold by ${m[1]}`],
    [/^Resultados para/i, () => 'Results for'],
  ];
  function trES(s) {
    if (s == null) return null;
    const key = String(s).replace(/\s+/g, ' ').trim();
    if (!key) return null;
    if (DICT[key] != null) return DICT[key];
    for (const [re, fn] of DRULES) { const m = key.match(re); if (m) return fn(m); }
    return null;
  }
  function translatePage() {
    if (LANG !== 'en' || !document.body) return;
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = []; let node;
    while ((node = walk.nextNode())) nodes.push(node);
    nodes.forEach((n) => {
      const par = n.parentElement; if (!par) return;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(par.tagName)) return;
      if (par.closest('#ap-loader')) return;
      const raw = n.nodeValue;
      const trimmed = raw.replace(/\s+/g, ' ').trim();
      if (!trimmed) return;
      const tr = trES(trimmed);
      if (tr != null && tr !== trimmed) {
        const lead = (raw.match(/^\s*/) || [''])[0];
        const tail = (raw.match(/\s*$/) || [''])[0];
        n.nodeValue = lead + tr + tail;
      }
    });
    document.querySelectorAll('[placeholder]').forEach((el) => {
      const cur = el.getAttribute('placeholder');
      const tr = DICT_PH[cur.trim()] != null ? DICT_PH[cur.trim()] : trES(cur);
      if (tr != null) el.setAttribute('placeholder', tr);
    });
    const tt = trES(document.title); if (tt != null) document.title = tt;
  }
  window.__apTranslate = translatePage;

  /* ---------- Traducción: data-i18n + diccionario global ES→EN ---------- */
  function runI18n() {
    $$('[data-i18n]').forEach((el) => { const k = el.getAttribute('data-i18n'); if (T[LANG] && T[LANG][k] != null) el.innerHTML = t(k); });
    translatePage();
  }
  if (LANG === 'en') document.documentElement.lang = 'en';
  runI18n();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', runI18n);
  window.addEventListener('load', runI18n);
  setTimeout(runI18n, 500);

  /* Expose helpers for page scripts */
  window.AP = Object.assign(window.AP || {}, { svg, $, $$, toast, addToCart, t, lang: LANG });
})();
