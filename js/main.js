/* ============================================================
   Always Plaza — Lógica de interfaz
   Scroll de topbar, mega menú, buscador, selector de idioma,
   código postal → punto de recogida, render de datos y menú móvil.
   ============================================================ */
(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const svg = (paths, cls = 'h-6 w-6') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

  /* -------------------------------------------------------
     1. TOPBAR: se oculta al hacer scroll hacia abajo
     ------------------------------------------------------- */
  const topbar = $('#topbar');
  const header = $('#header');
  let lastY = window.scrollY;

  function onScroll() {
    const y = window.scrollY;
    const goingDown = y > lastY && y > 80;
    if (goingDown) {
      topbar.style.transform = 'translateY(-100%)';
      header.style.top = '0px';
    } else {
      topbar.style.transform = 'translateY(0)';
      header.style.top = '65px';
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* -------------------------------------------------------
     2. SELECTOR DE IDIOMA
     ------------------------------------------------------- */
  const langBtn = $('#langBtn');
  const langMenu = $('#langMenu');
  const langLabel = $('#langLabel');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !langMenu.classList.contains('hidden');
    langMenu.classList.toggle('hidden');
    langBtn.setAttribute('aria-expanded', String(!open));
  });
  $$('#langMenu [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      langLabel.textContent = btn.dataset.lang === 'en' ? 'English' : 'Español';
      langMenu.classList.add('hidden');
      langBtn.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', () => langMenu.classList.add('hidden'));

  /* -------------------------------------------------------
     3. CÓDIGO POSTAL → PUNTO DE RECOGIDA
     ------------------------------------------------------- */
  const zipForm = $('#zipForm');
  const zipInput = $('#zipInput');
  const pickupLabel = $('#pickupLabel');
  const pickupBtn = $('#pickupBtn');

  function updatePickup() {
    const zip = zipInput.value.trim();
    if (!zip) {
      pickupLabel.textContent = 'Punto de recogida';
      pickupBtn.classList.remove('bg-promo', 'text-night');
      pickupBtn.classList.add('bg-white/10', 'text-white/90');
      return;
    }
    const pickup = pickupForZip(zip);
    if (pickup) {
      pickupLabel.textContent = pickup;
      pickupBtn.classList.add('bg-promo', 'text-night');
      pickupBtn.classList.remove('bg-white/10', 'text-white/90');
    } else {
      pickupLabel.textContent = 'Sin cobertura';
      pickupBtn.classList.remove('bg-promo', 'text-night');
      pickupBtn.classList.add('bg-white/10', 'text-white/90');
    }
  }
  zipInput.addEventListener('input', () => {
    zipInput.value = zipInput.value.replace(/\D/g, '').slice(0, 5);
    updatePickup();
  });
  zipForm.addEventListener('submit', (e) => { e.preventDefault(); updatePickup(); });

  /* -------------------------------------------------------
     4. BUSCADOR
     ------------------------------------------------------- */
  const searchForm = $('#searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = $('#searchInput').value.trim();
      if (q) console.log('Buscar:', q); // Placeholder: aquí iría la navegación a resultados.
    });
  }
  const mobileSearchBtn = $('#mobileSearchBtn');
  const mobileSearch = $('#mobileSearch');
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', () => {
      mobileSearch.classList.toggle('hidden');
      const input = $('input', mobileSearch);
      if (!mobileSearch.classList.contains('hidden') && input) input.focus();
    });
  }

  /* -------------------------------------------------------
     5. NAV + MEGA MENÚ (desktop)
     ------------------------------------------------------- */
  const megaNav = $('#megaNav');
  const wrap = $('#megaPanelWrap');
  const panel = $('#megaPanel');
  const backdrop = $('#megaBackdrop');
  let openId = null;
  let closeTimer = null;

  // Construye los items del nav.
  megaNav.innerHTML = CATEGORIES.map((c) => `
    <li data-cat="${c.id}">
      <button class="flex items-center gap-2 rounded-lg px-3 py-3.5 text-[15px] font-medium text-night transition-colors hover:text-b2b" aria-haspopup="true" aria-expanded="false">
        ${svg(c.icon, 'h-4.5 w-4.5 text-mediumgrey')}
        ${c.name}
        ${c.subs.length ? '<svg class="h-3.5 w-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>' : ''}
      </button>
    </li>`).join('');

  function positionPanel() {
    const rect = header.getBoundingClientRect();
    wrap.style.top = rect.bottom + 'px';
  }

  function renderPanel(cat) {
    if (!cat.subs.length) return '';
    return `
      <div class="grid gap-6 p-8 md:grid-cols-[1fr_320px]">
        <div>
          <h3 class="mb-4 text-xl font-medium text-night">${cat.name}</h3>
          <ul class="grid grid-cols-2 gap-x-6 gap-y-1 lg:grid-cols-3">
            ${cat.subs.map((s) => `
              <li>
                <a href="#" class="group flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-secondary">
                  <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-darkgrey transition-colors group-hover:bg-white group-hover:text-b2b">${svg(s.icon, 'h-5 w-5')}</span>
                  <span class="text-[15px] text-darkgrey transition-colors group-hover:text-night">${s.name}</span>
                </a>
              </li>`).join('')}
          </ul>
        </div>
        <a href="#" class="relative hidden overflow-hidden rounded-xl2 p-6 md:flex md:flex-col md:justify-end" style="background:linear-gradient(140deg,#F5F5F7,#ECEFF6)">
          <span class="inline-block w-fit rounded-full bg-${cat.accent} px-3 py-1 text-xs font-bold ${cat.accent === 'promo' ? 'text-night' : 'text-white'}">Destacado</span>
          <p class="mt-3 text-lg font-bold text-night">Lo mejor en ${cat.name.toLowerCase()}</p>
          <p class="mt-1 text-sm text-mediumgrey">Descubre las novedades y ofertas de la sección.</p>
        </a>
      </div>`;
  }

  function openMega(id) {
    const cat = CATEGORIES.find((c) => c.id === id);
    if (!cat || !cat.subs.length) { closeMega(); return; }
    clearTimeout(closeTimer);
    openId = id;
    positionPanel();
    panel.innerHTML = renderPanel(cat);
    wrap.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => { panel.style.opacity = '1'; panel.style.transform = 'translateY(0)'; });
    $$('#megaNav [data-cat] button').forEach((b) => b.setAttribute('aria-expanded', String(b.parentElement.dataset.cat === id)));
  }

  function closeMega() {
    openId = null;
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(-8px)';
    wrap.classList.add('hidden');
    backdrop.classList.add('hidden');
    $$('#megaNav [data-cat] button').forEach((b) => b.setAttribute('aria-expanded', 'false'));
  }

  panel.style.transition = 'opacity .18s ease, transform .18s ease';
  panel.style.opacity = '0';
  panel.style.transform = 'translateY(-8px)';

  $$('#megaNav [data-cat]').forEach((li) => {
    const id = li.dataset.cat;
    li.addEventListener('mouseenter', () => openMega(id));
    li.addEventListener('click', (e) => { e.preventDefault(); openId === id ? closeMega() : openMega(id); });
  });
  megaNav.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeMega, 160); });
  wrap.addEventListener('mouseenter', () => clearTimeout(closeTimer));
  wrap.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeMega, 160); });
  backdrop.addEventListener('click', closeMega);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMega(); });
  window.addEventListener('scroll', () => { if (openId) closeMega(); }, { passive: true });

  /* -------------------------------------------------------
     6. HERO — slider automático
     ------------------------------------------------------- */
  const slides = $$('.hero-slide');
  const dotsWrap = $('#heroDots');
  let current = 0;
  let heroTimer = null;

  dotsWrap.innerHTML = slides.map((_, i) =>
    `<button data-i="${i}" class="h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-white' : 'w-2 bg-white/50'}" aria-label="Ir a la diapositiva ${i + 1}"></button>`
  ).join('');
  const dots = $$('#heroDots button');

  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
    dots.forEach((d, idx) => {
      d.classList.toggle('w-6', idx === i);
      d.classList.toggle('bg-white', idx === i);
      d.classList.toggle('w-2', idx !== i);
      d.classList.toggle('bg-white/50', idx !== i);
    });
    current = i;
  }
  function nextSlide() { showSlide((current + 1) % slides.length); }
  function startHero() { heroTimer = setInterval(nextSlide, 5000); }
  function stopHero() { clearInterval(heroTimer); }

  dots.forEach((d) => d.addEventListener('click', () => { stopHero(); showSlide(Number(d.dataset.i)); startHero(); }));
  $('#heroSlider').addEventListener('mouseenter', stopHero);
  $('#heroSlider').addEventListener('mouseleave', startHero);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) startHero();

  /* -------------------------------------------------------
     7. RENDER — accesos rápidos del hero (30%)
     ------------------------------------------------------- */
  $('#heroCats').innerHTML = CATEGORIES.map((c) => `
    <li>
      <a href="#" class="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary">
        <span class="flex items-center gap-3">
          <span class="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-darkgrey transition-colors group-hover:text-b2b">${svg(c.icon, 'h-4.5 w-4.5')}</span>
          <span class="text-[15px] font-medium text-night">${c.name}</span>
        </span>
        <svg class="h-4 w-4 text-lowvis transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"/></svg>
      </a>
    </li>`).join('');

  /* -------------------------------------------------------
     8. RENDER — categorías destacadas
     ------------------------------------------------------- */
  $('#categoryGrid').innerHTML = FEATURED_CATEGORIES.map((c) => `
    <a href="#" class="group flex flex-col items-center gap-3 rounded-xl2 border border-lowgrey bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-softlg">
      <span class="grid h-16 w-16 place-items-center rounded-2xl ${c.bg} ${c.fg} transition-transform group-hover:scale-105">${svg(c.icon, 'h-8 w-8')}</span>
      <span class="text-[15px] font-semibold text-night">${c.name}</span>
      <span class="text-[13px] text-mediumgrey">${c.count}</span>
    </a>`).join('');

  /* -------------------------------------------------------
     9. RENDER — productos (Novedades)
     ------------------------------------------------------- */
  const tagClasses = {
    promo: 'bg-promo text-night',
    novedad: 'bg-novedad text-white',
    exito: 'bg-exito text-white',
  };
  $('#productGrid').innerHTML = PRODUCTS.map((p) => `
    <article class="group flex flex-col overflow-hidden rounded-xl2 border border-lowgrey bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-softlg">
      <div class="relative aspect-square bg-white p-6">
        ${p.tag ? `<span class="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold ${tagClasses[p.tagColor] || 'bg-lowgrey text-night'}">${p.tag}</span>` : ''}
        <button class="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/80 text-mediumgrey shadow-soft transition-colors hover:text-exito" aria-label="Añadir a favoritos">
          ${svg('<path d="M12 20s-7-4.6-9.2-9A5 5 0 0 1 12 6a5 5 0 0 1 9.2 5C19 15.4 12 20 12 20Z"/>', 'h-4 w-4')}
        </button>
        <div class="grid h-full w-full place-items-center text-nicegrey">
          ${svg(p.icon, 'h-20 w-20')}
        </div>
      </div>
      <div class="flex flex-1 flex-col border-t border-lowgrey p-4">
        <p class="text-[12px] font-medium uppercase tracking-wide text-lowvis">${p.cat}</p>
        <h3 class="mt-1 line-clamp-2 text-[15px] font-medium text-night">${p.name}</h3>
        <div class="mt-3 flex items-end justify-between">
          <div class="flex items-baseline gap-2">
            <span class="text-lg font-extrabold text-night">${p.price} €</span>
            ${p.old ? `<span class="text-[13px] text-lowvis line-through">${p.old} €</span>` : ''}
          </div>
          <button class="grid h-9 w-9 place-items-center rounded-full bg-night text-white transition-colors hover:bg-b2b" aria-label="Añadir a la cesta">
            ${svg('<path d="M12 5v14M5 12h14"/>', 'h-4 w-4')}
          </button>
        </div>
      </div>
    </article>`).join('');

  /* -------------------------------------------------------
     10. MENÚ MÓVIL (drawer)
     ------------------------------------------------------- */
  const drawer = $('#mobileDrawer');
  const drawerPanel = $('#drawerPanel');
  const mobileNav = $('#mobileNav');

  mobileNav.innerHTML = CATEGORIES.map((c) => `
    <li>
      ${c.subs.length ? `
        <details class="group rounded-xl">
          <summary class="flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-[16px] font-medium text-night marker:content-none hover:bg-secondary">
            <span class="flex items-center gap-3">${svg(c.icon, 'h-5 w-5 text-mediumgrey')} ${c.name}</span>
            <svg class="h-4 w-4 text-lowvis transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <ul class="ml-4 mt-1 flex flex-col gap-0.5 border-l border-lowgrey pl-3">
            ${c.subs.map((s) => `<li><a href="#" class="block rounded-lg px-3 py-2 text-[15px] text-darkgrey hover:bg-secondary hover:text-night">${s.name}</a></li>`).join('')}
          </ul>
        </details>` : `
        <a href="#" class="flex items-center gap-3 rounded-xl px-3 py-3 text-[16px] font-medium text-night hover:bg-secondary">${svg(c.icon, 'h-5 w-5 text-mediumgrey')} ${c.name}</a>`}
    </li>`).join('');

  function openDrawer() {
    drawer.classList.remove('hidden');
    requestAnimationFrame(() => { drawerPanel.style.transform = 'translateX(0)'; });
  }
  function closeDrawer() {
    drawerPanel.style.transform = 'translateX(-100%)';
    setTimeout(() => drawer.classList.add('hidden'), 300);
  }
  $('#mobileMenuBtn').addEventListener('click', openDrawer);
  $$('#mobileDrawer [data-close]').forEach((el) => el.addEventListener('click', closeDrawer));

  /* -------------------------------------------------------
     11. Contadores demo (favoritos / cesta)
     ------------------------------------------------------- */
  // Los contadores se muestran estáticos como demo visual (2 y 3).
  // La lógica real de carrito se integraría con el backend.
})();
