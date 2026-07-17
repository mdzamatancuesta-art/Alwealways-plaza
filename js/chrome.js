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
  const PAGE = document.body.dataset.page || '';

  /* ---------- Markup ---------- */
  const headerHTML = `
  <div id="topbar" class="fixed inset-x-0 top-0 z-50 h-[65px] bg-night text-white transition-transform duration-300">
    <div class="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-4 md:px-8">
      <div class="relative shrink-0">
        <button id="langBtn" class="flex items-center gap-2 py-1.5 text-[13px] transition-colors hover:text-white/70" aria-haspopup="true" aria-expanded="false">
          ${oi('globe','h-4 w-4')}
          <span id="langLabel">Español</span>
        </button>
        <div id="langMenu" class="absolute left-0 top-full mt-2 hidden w-36 overflow-hidden rounded-xl bg-white text-night shadow-softlg">
          <button data-lang="es" class="flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-lowgrey">🇪🇸 Español</button>
          <button data-lang="en" class="flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-lowgrey">🇬🇧 English</button>
        </div>
      </div>
      <div class="hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex">
        ${oi('truck','h-4 w-4 shrink-0 text-white/70')}
        <p class="truncate text-[13px] text-white/90">Envío a domicilio solo disponible en La Habana</p>
      </div>
      <div class="flex shrink-0 items-center gap-4">
        <button id="cpBtn" class="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
          ${oi('pin','h-4 w-4 shrink-0')}
          <span id="cpLabel">Añadir CP</span>
        </button>
        <button id="pickupBtn" class="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
          ${oi('store','h-4 w-4 shrink-0')}
          <span id="pickupLabel" class="max-w-[160px] truncate">Punto recogida</span>
        </button>
      </div>
    </div>
  </div>

  <div class="h-[65px]" aria-hidden="true"></div>

  <header id="header" class="sticky top-0 z-40 bg-white transition-[top] duration-300" style="top:65px">
    <div class="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3.5 md:px-8">
      <button id="mobileMenuBtn" class="grid h-10 w-10 shrink-0 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey lg:hidden" aria-label="Abrir menú">
        ${oi('menu','h-6 w-6')}
      </button>
      <a href="index.html" class="logo logo--blue shrink-0" aria-label="Always Plaza — Inicio"></a>
      <form id="searchForm" class="relative mx-auto hidden w-full max-w-xl md:block">
        <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mediumgrey">${svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>', 'h-5 w-5')}</span>
        <input id="searchInput" type="search" placeholder="¿Qué estás buscando?" class="w-full rounded-full border border-nicegrey bg-white py-2.5 pl-12 pr-4 text-[15px] text-night placeholder:text-lowvis transition-shadow focus:border-b2b focus:shadow-soft focus:outline-none" aria-label="Buscar productos" />
      </form>
      <div class="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
        <button id="mobileSearchBtn" class="grid h-10 w-10 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey md:hidden" aria-label="Buscar">${svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>', 'h-5 w-5')}</button>
        <a href="login.html" class="flex items-center gap-2 text-[14px] font-medium text-night transition-colors hover:text-b2b">
          ${oi('user','h-5 w-5')}<span class="hidden lg:inline">Inicia sesión</span>
        </a>
        <a href="favoritos.html" class="relative grid h-10 w-10 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey" aria-label="Favoritos">${oi('heart','h-5 w-5')}</a>
        <a href="carrito.html" class="relative grid h-10 w-10 place-items-center rounded-full text-night transition-colors hover:bg-lowgrey" aria-label="Cesta de la compra">
          ${oi('bag','h-5 w-5')}
          <span class="js-cart-count absolute -right-1 -top-1 grid h-5 min-w-[20px] place-items-center rounded-full bg-night px-1 text-[11px] font-bold leading-none text-white">10</span>
        </a>
      </div>
    </div>
    <form id="mobileSearch" class="hidden px-4 pb-3 md:hidden">
      <div class="relative">
        <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mediumgrey">${svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>', 'h-5 w-5')}</span>
        <input type="search" placeholder="¿Qué estás buscando?" class="w-full rounded-full border border-nicegrey bg-white py-2.5 pl-12 pr-4 text-[15px] placeholder:text-lowvis focus:border-b2b focus:outline-none" aria-label="Buscar productos" />
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
      <h2 class="mt-6 text-2xl font-bold text-night">Añade tu código postal</h2>
      <p class="mt-4 text-[14px] text-darkgrey">Enviamos pedidos a domicilio en toda La Habana. Para pedidos fuera de La Habana disponemos de puntos de recogida <em>Always Points</em>.</p>
      <p class="mt-3 text-[14px] text-darkgrey">Al añadir tu código postal verás tu punto de recogida o tienda más cercana.</p>
      <label for="cpInput" class="mt-8 block text-[13px] text-mediumgrey">Introduce tu código postal (Ejemplo: 28012)</label>
      <input id="cpInput" inputmode="numeric" maxlength="5" class="mt-3 w-full rounded-full bg-lowgrey px-5 py-3.5 text-[15px] text-night placeholder:text-lowvis focus:outline-none focus:ring-2 focus:ring-b2b" placeholder="28012" />
      <p id="cpResult" class="mt-4 hidden items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-[14px] font-medium text-night"></p>
      <button id="cpConfirm" class="mt-6 flex items-center justify-center gap-2 rounded-full bg-b2b py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0089d1]">Confirmar</button>
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

  <div id="cookieBanner" class="fixed inset-x-0 bottom-0 z-[80] hidden">
    <div class="mx-auto m-3 max-w-3xl rounded-xl2 border border-lowgrey bg-white p-5 shadow-softlg md:m-4 md:p-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center">
        <div class="flex-1">
          <h3 class="text-[15px] font-bold text-night">🍪 Usamos cookies</h3>
          <p class="mt-1 text-[13px] text-mediumgrey">Utilizamos cookies propias y de terceros para el funcionamiento del sitio, analizar el tráfico y personalizar el contenido. Puedes aceptarlas todas, rechazarlas o configurarlas. Más información en nuestra <a href="cookies.html" class="text-b2b hover:underline">Política de cookies</a>.</p>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row md:shrink-0">
          <button data-cookie="reject" class="rounded-full border border-nicegrey px-5 py-2.5 text-[14px] font-semibold text-night transition-colors hover:bg-secondary">Rechazar</button>
          <a href="cookies.html" class="rounded-full border border-nicegrey px-5 py-2.5 text-center text-[14px] font-semibold text-night transition-colors hover:bg-secondary">Configurar</a>
          <button data-cookie="all" class="rounded-full bg-b2b px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#0089d1]">Aceptar todas</button>
        </div>
      </div>
    </div>
  </div>`;

  const footerHTML = `
  <footer class="border-t border-lowgrey bg-white">
    <div class="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div class="lg:col-span-2">
          <span class="logo logo--blue"></span>
          <p class="mt-4 max-w-xs text-[15px] font-light text-mediumgrey">Marketplace para comprar desde cualquier parte del mundo y enviar a La Habana. Precios en euros (€).</p>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-darkgrey">Comprar</h3>
          <ul class="mt-4 space-y-2 text-[14px] text-mediumgrey">
            <li><a href="categoria-brico.html" class="transition-colors hover:text-night">Bricolaje y construcción</a></li>
            <li><a href="categoria-envases.html" class="transition-colors hover:text-night">Envases y embalajes</a></li>
            <li><a href="categoria-papeleria.html" class="transition-colors hover:text-night">Papelería y ofimática</a></li>
            <li><a href="categoria-fotografia.html" class="transition-colors hover:text-night">Fotografía</a></li>
            <li><a href="categoria-hogar.html" class="transition-colors hover:text-night">Hogar</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-darkgrey">Servicios</h3>
          <ul class="mt-4 space-y-2 text-[14px] text-mediumgrey">
            <li><a href="servicios.html" class="transition-colors hover:text-night">Todos nuestros servicios</a></li>
            <li><a href="always-market.html" class="transition-colors hover:text-night">Always Market</a></li>
            <li><a href="always-sanguar.html" class="transition-colors hover:text-night">Always Sanguar</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-darkgrey">Ayuda</h3>
          <ul class="mt-4 space-y-2 text-[14px] text-mediumgrey">
            <li><a href="#" class="transition-colors hover:text-night">Puntos de recogida</a></li>
            <li><a href="#" class="transition-colors hover:text-night">Envíos a Cuba</a></li>
            <li><a href="perfil.html" class="transition-colors hover:text-night">Mi perfil</a></li>
          </ul>
        </div>
      </div>
      <nav class="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-lowgrey pt-6 text-[13px] text-mediumgrey">
        <a href="aviso-legal.html" class="transition-colors hover:text-night">Aviso legal</a>
        <a href="privacidad.html" class="transition-colors hover:text-night">Política de privacidad</a>
        <a href="cookies.html" class="transition-colors hover:text-night">Política de cookies</a>
        <a href="terminos.html" class="transition-colors hover:text-night">Condiciones de compra</a>
        <a href="devoluciones.html" class="transition-colors hover:text-night">Devoluciones</a>
        <a href="envios.html" class="transition-colors hover:text-night">Envíos</a>
        <a href="faq.html" class="transition-colors hover:text-night">Preguntas frecuentes</a>
        <button id="cookieSettingsLink" class="transition-colors hover:text-night">Configurar cookies</button>
      </nav>
      <div class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-lowgrey pt-6 text-[13px] text-lowvis sm:flex-row">
        <p>© 2026 Always Plaza. Todos los derechos reservados.</p>
        <p>Moneda: Euro (€) · Idioma: Español</p>
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
    else { topbar.style.transform = 'translateY(0)'; header.style.top = '65px'; }
    lastY = y;
    if (openId) closeMega();
  }, { passive: true });

  /* ---------- Idioma ---------- */
  const langBtn = $('#langBtn'), langMenu = $('#langMenu'), langLabel = $('#langLabel');
  langBtn.addEventListener('click', (e) => { e.stopPropagation(); langMenu.classList.toggle('hidden'); });
  $$('#langMenu [data-lang]').forEach((b) => b.addEventListener('click', () => { langLabel.textContent = b.dataset.lang === 'en' ? 'English' : 'Español'; langMenu.classList.add('hidden'); }));
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
    cpResult.classList.remove('hidden'); cpResult.classList.add('flex');
    cpResult.innerHTML = pickup
      ? svg('<path d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>', 'h-4 w-4 text-b2b') + `Tu punto más cercano: <strong>${pickup}</strong>`
      : svg('<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>', 'h-4 w-4 text-exito') + 'Aún no cubrimos ese código postal.';
    return pickup;
  }
  $('#cpBtn').addEventListener('click', openCp);
  cpInput.addEventListener('input', () => { cpInput.value = cpInput.value.replace(/\D/g, '').slice(0, 5); evalCp(); });
  $('#cpConfirm').addEventListener('click', () => { const p = evalCp(); if (p) { cpLabel.textContent = 'CP ' + cpInput.value; pickupLabel.textContent = p; closeCp(); } });
  $$('#cpModal [data-cp-close]').forEach((el) => el.addEventListener('click', closeCp));

  /* ---------- Buscador móvil ---------- */
  const mobileSearch = $('#mobileSearch');
  $('#mobileSearchBtn')?.addEventListener('click', () => { mobileSearch.classList.toggle('hidden'); const i = $('input', mobileSearch); if (!mobileSearch.classList.contains('hidden') && i) i.focus(); });
  const goSearch = (q) => { window.location.href = 'buscar.html' + (q ? ('?q=' + encodeURIComponent(q)) : ''); };
  $('#searchForm')?.addEventListener('submit', (e) => { e.preventDefault(); goSearch($('#searchInput').value.trim()); });
  mobileSearch?.addEventListener('submit', (e) => { e.preventDefault(); goSearch($('input', mobileSearch).value.trim()); });

  /* ---------- Nav + Mega menú ---------- */
  const catHref = (id) => id === 'servicios' ? 'servicios.html' : `categoria-${id}.html`;
  const megaNav = $('#megaNav'), wrap = $('#megaPanelWrap'), panel = $('#megaPanel'), backdrop = $('#megaBackdrop');
  let openId = null, closeTimer = null;

  megaNav.innerHTML = CATEGORIES.map((c) => `
    <li data-cat="${c.id}">
      <a href="${catHref(c.id)}" class="mega-tab flex items-center py-3.5 text-[15px] transition-colors hover:text-b2b ${PAGE === c.id ? 'font-semibold text-b2b' : 'text-night'}">${c.name}</a>
    </li>`).join('');

  function renderSubContent(sub, href) {
    if (sub.links) return `<ul class="flex flex-col gap-3">${sub.links.map((l) => `<li><a href="${href}" class="text-[15px] text-night transition-colors hover:text-b2b">${l}</a></li>`).join('')}</ul>`;
    const actions = sub.actions ? `<div class="flex flex-col gap-3 pr-8">${sub.actions.map((a) => `<a href="${a === 'Personalizar' ? 'personalizacion.html' : href}" class="text-[15px] font-bold text-night transition-colors hover:text-b2b">${a}</a>`).join('')}</div>` : '';
    const groups = sub.groups
      ? `<div class="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-3">${sub.groups.map((g) => `<div><h4 class="mb-2 text-[15px] font-medium text-night">${g.title}</h4><ul class="flex flex-col gap-1.5">${g.items.map((i) => `<li><a href="${href}" class="text-[13px] text-mediumgrey transition-colors hover:text-night">${i}</a></li>`).join('')}</ul></div>`).join('')}</div>`
      : `<div class="flex flex-1 items-start"><a href="${sub.name === 'Always Market' ? 'always-market.html' : sub.name === 'Always Sanguar' ? 'always-sanguar.html' : href}" class="text-[15px] font-bold text-night hover:text-b2b">Ver todo en ${sub.name}</a></div>`;
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
  $('#mobileNav').innerHTML = CATEGORIES.map((c) => `
    <li>${c.subs.length ? `
      <details class="group rounded-xl">
        <summary class="flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-[16px] font-medium text-night hover:bg-secondary">${c.name}${svg('<path d="m6 9 6 6 6-6"/>', 'h-4 w-4 text-lowvis transition-transform group-open:rotate-180')}</summary>
        <ul class="ml-3 mt-1 flex flex-col gap-0.5 border-l border-lowgrey pl-3">${c.subs.map((s) => `<li><a href="${catHref(c.id)}" class="block rounded-lg px-3 py-2 text-[15px] text-darkgrey hover:bg-secondary hover:text-night">${s.name}</a></li>`).join('')}</ul>
      </details>` : `<a href="${catHref(c.id)}" class="flex items-center rounded-xl px-3 py-3 text-[16px] font-medium text-night hover:bg-secondary">${c.name}</a>`}</li>`).join('');
  $('#mobileMenuBtn').addEventListener('click', () => { drawer.classList.remove('hidden'); requestAnimationFrame(() => drawerPanel.style.transform = 'translateX(0)'); });
  $$('#mobileDrawer [data-close]').forEach((el) => el.addEventListener('click', () => { drawerPanel.style.transform = 'translateX(-100%)'; setTimeout(() => drawer.classList.add('hidden'), 300); }));

  /* ---------- Banner de cookies ---------- */
  const cookieBanner = $('#cookieBanner');
  function setCookieConsent(v) { try { localStorage.setItem('ap_cookies', v); } catch (e) {} cookieBanner.classList.add('hidden'); }
  let consent = null;
  try { consent = localStorage.getItem('ap_cookies'); } catch (e) {}
  if (!consent) cookieBanner.classList.remove('hidden');
  $$('#cookieBanner [data-cookie]').forEach((b) => b.addEventListener('click', () => setCookieConsent(b.dataset.cookie)));
  $('#cookieSettingsLink')?.addEventListener('click', () => { window.location.href = 'cookies.html'; });

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
    const add = e.target.closest('[data-add]');
    if (add) { e.preventDefault(); addToCart(1); toast('✓ Añadido a la cesta'); return; }
    const demo = e.target.closest('[data-demo]');
    if (demo) { e.preventDefault(); toast(demo.dataset.demo || 'Función de demostración'); return; }
    const fav = e.target.closest('[data-fav]');
    if (fav) {
      e.preventDefault();
      const on = fav.classList.toggle('is-fav');
      fav.classList.toggle('text-exito', on);
      const path = fav.querySelector('svg path');
      if (path) path.setAttribute('fill', on ? 'currentColor' : 'none');
      toast(on ? '♥ Añadido a favoritos' : 'Quitado de favoritos');
      return;
    }
    // Enlaces de demostración (href="#"): evitar el salto al inicio
    const a = e.target.closest('a[href="#"]');
    if (a) { e.preventDefault(); }
  });

  /* Expose helpers for page scripts */
  window.AP = Object.assign(window.AP || {}, { svg, $, $$, toast, addToCart });
})();
