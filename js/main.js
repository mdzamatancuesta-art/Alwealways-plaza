/* ============================================================
   Always Plaza — Lógica de interfaz (diseño replicado)
   ============================================================ */
(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const svg = (paths, cls = 'h-6 w-6') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

  /* ---------- 1. TOPBAR: ocultar al hacer scroll ---------- */
  const topbar = $('#topbar');
  const header = $('#header');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) {
      topbar.style.transform = 'translateY(-100%)';
      header.style.top = '0px';
    } else {
      topbar.style.transform = 'translateY(0)';
      header.style.top = '65px';
    }
    lastY = y;
    if (openId) closeMega();
  }, { passive: true });

  /* ---------- 2. Idioma ---------- */
  const langBtn = $('#langBtn'), langMenu = $('#langMenu'), langLabel = $('#langLabel');
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !langMenu.classList.contains('hidden');
    langMenu.classList.toggle('hidden');
    langBtn.setAttribute('aria-expanded', String(!open));
  });
  $$('#langMenu [data-lang]').forEach((b) => b.addEventListener('click', () => {
    langLabel.textContent = b.dataset.lang === 'en' ? 'English' : 'Español';
    langMenu.classList.add('hidden');
  }));
  document.addEventListener('click', () => langMenu.classList.add('hidden'));

  /* ---------- 3. Modal Código Postal ---------- */
  const cpModal = $('#cpModal'), cpPanel = $('#cpPanel'), cpInput = $('#cpInput');
  const cpResult = $('#cpResult'), cpLabel = $('#cpLabel'), pickupLabel = $('#pickupLabel');

  function openCp() {
    cpModal.classList.remove('hidden');
    requestAnimationFrame(() => { cpPanel.style.transform = 'translateX(0)'; });
    setTimeout(() => cpInput.focus(), 250);
  }
  function closeCp() {
    cpPanel.style.transform = 'translateX(100%)';
    setTimeout(() => cpModal.classList.add('hidden'), 300);
  }
  function evalCp() {
    const zip = cpInput.value.trim();
    if (!zip) { cpResult.classList.add('hidden'); return null; }
    const pickup = pickupForZip(zip);
    cpResult.classList.remove('hidden');
    cpResult.classList.add('flex');
    if (pickup) {
      cpResult.innerHTML = svg('<path d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>', 'h-4 w-4 text-b2b') + `Tu punto más cercano: <strong>${pickup}</strong>`;
    } else {
      cpResult.innerHTML = svg('<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>', 'h-4 w-4 text-exito') + 'Aún no cubrimos ese código postal.';
    }
    return pickup;
  }
  $('#cpBtn').addEventListener('click', openCp);
  cpInput.addEventListener('input', () => { cpInput.value = cpInput.value.replace(/\D/g, '').slice(0, 5); evalCp(); });
  $('#cpConfirm').addEventListener('click', () => {
    const pickup = evalCp();
    if (pickup) {
      cpLabel.textContent = 'CP ' + cpInput.value;
      pickupLabel.textContent = pickup;
      closeCp();
    }
  });
  $$('#cpModal [data-cp-close]').forEach((el) => el.addEventListener('click', closeCp));

  /* ---------- 4. Buscador móvil ---------- */
  const mobileSearch = $('#mobileSearch');
  $('#mobileSearchBtn')?.addEventListener('click', () => {
    mobileSearch.classList.toggle('hidden');
    const i = $('input', mobileSearch);
    if (!mobileSearch.classList.contains('hidden') && i) i.focus();
  });
  $('#searchForm')?.addEventListener('submit', (e) => e.preventDefault());

  /* ---------- 5. Nav + Mega menú (2 niveles) ---------- */
  const megaNav = $('#megaNav');
  const wrap = $('#megaPanelWrap'), panel = $('#megaPanel'), backdrop = $('#megaBackdrop');
  let openId = null, closeTimer = null;

  megaNav.innerHTML = CATEGORIES.map((c) => `
    <li data-cat="${c.id}">
      <button class="mega-tab flex items-center py-3.5 text-[15px] text-night transition-colors hover:text-b2b" aria-haspopup="${c.subs.length > 0}">${c.name}</button>
    </li>`).join('');

  // Panel derecho para una subcategoría.
  function renderSubContent(sub) {
    if (sub.links) {
      return `<ul class="flex flex-col gap-3">${sub.links.map((l) => `<li><a href="#" class="text-[15px] text-night transition-colors hover:text-b2b">${l}</a></li>`).join('')}</ul>`;
    }
    const actions = sub.actions
      ? `<div class="flex flex-col gap-3 pr-8">${sub.actions.map((a) => `<a href="#" class="text-[15px] font-bold text-night transition-colors hover:text-b2b">${a}</a>`).join('')}</div>`
      : '';
    const groups = sub.groups
      ? `<div class="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-3">${sub.groups.map((g) => `
          <div>
            <h4 class="mb-2 text-[15px] font-medium text-night">${g.title}</h4>
            <ul class="flex flex-col gap-1.5">${g.items.map((i) => `<li><a href="#" class="text-[13px] text-mediumgrey transition-colors hover:text-night">${i}</a></li>`).join('')}</ul>
          </div>`).join('')}</div>`
      : `<div class="flex flex-1 items-start"><a href="#" class="text-[15px] font-bold text-night hover:text-b2b">Ver todo en ${sub.name}</a></div>`;
    return `<div class="flex gap-4">${actions}${groups}</div>`;
  }

  function renderPanel(cat) {
    if (!cat.subs.length) return '';
    const firstIdx = cat.subs.findIndex((s) => s.groups || s.links);
    const activeIdx = firstIdx >= 0 ? firstIdx : 0;
    return `
      <div class="mx-auto flex max-w-[1400px] gap-8 px-8 py-8">
        <ul class="w-64 shrink-0 border-r border-lowgrey pr-4" id="megaSubs">
          ${cat.subs.map((s, i) => `
            <li>
              <button data-sub="${i}" class="mega-sub flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[15px] transition-colors ${i === activeIdx ? 'bg-secondary font-medium text-night' : 'text-darkgrey hover:bg-secondary'}">
                ${s.name}
                <svg class="h-4 w-4 text-lowvis" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"/></svg>
              </button>
            </li>`).join('')}
        </ul>
        <div class="flex-1 pt-1" id="megaContent">${renderSubContent(cat.subs[activeIdx])}</div>
      </div>`;
  }

  function bindSubs(cat) {
    const subsEl = $('#megaSubs'), content = $('#megaContent');
    if (!subsEl) return;
    $$('.mega-sub', subsEl).forEach((btn) => {
      const activate = () => {
        $$('.mega-sub', subsEl).forEach((b) => b.classList.remove('bg-secondary', 'font-medium', 'text-night'));
        $$('.mega-sub', subsEl).forEach((b) => b.classList.add('text-darkgrey'));
        btn.classList.add('bg-secondary', 'font-medium', 'text-night');
        btn.classList.remove('text-darkgrey');
        content.innerHTML = renderSubContent(cat.subs[Number(btn.dataset.sub)]);
      };
      btn.addEventListener('mouseenter', activate);
      btn.addEventListener('click', (e) => { e.preventDefault(); activate(); });
    });
  }

  function openMega(id) {
    const cat = CATEGORIES.find((c) => c.id === id);
    if (!cat || !cat.subs.length) { closeMega(); return; }
    clearTimeout(closeTimer);
    openId = id;
    wrap.style.top = header.getBoundingClientRect().bottom + 'px';
    panel.innerHTML = renderPanel(cat);
    bindSubs(cat);
    wrap.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => { panel.style.opacity = '1'; panel.style.transform = 'translateY(0)'; });
    $$('#megaNav .mega-tab').forEach((b) => b.classList.toggle('text-b2b', b.closest('[data-cat]').dataset.cat === id));
  }
  function closeMega() {
    openId = null;
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(-8px)';
    wrap.classList.add('hidden');
    backdrop.classList.add('hidden');
    $$('#megaNav .mega-tab').forEach((b) => b.classList.remove('text-b2b'));
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
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeMega(); closeCp(); } });

  /* ---------- 6. Tarjeta de producto ---------- */
  function productCard(p) {
    const badge = p.tag
      ? `<span class="text-[12px] font-bold text-novedad">${p.tag}</span>`
      : p.badge
        ? `<span class="w-fit rounded bg-exito px-2 py-0.5 text-[11px] font-bold text-white">${p.badge}</span>`
        : '';
    const discount = p.discount
      ? `<span class="absolute left-3 top-3 rounded-md bg-night px-2 py-1 text-[11px] font-bold text-white">${p.discount}</span>`
      : '';
    const price = p.old
      ? `<div class="flex flex-col leading-tight">
           <span class="text-[12px] text-lowvis line-through">${p.old}€</span>
           <span class="w-fit rounded bg-promo px-1.5 text-[17px] font-extrabold text-night">${fmt(p.price)}</span>
         </div>`
      : `<span class="text-[17px] font-extrabold text-night">${fmt(p.price)}</span>`;
    return `
      <article class="group flex flex-col">
        <div class="relative aspect-square overflow-hidden rounded-xl2 bg-secondary p-6">
          ${discount}
          <button class="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full text-darkgrey transition-colors hover:text-exito" aria-label="Añadir a favoritos">
            ${svg('<path d="M12 20s-7-4.6-9.2-9A5 5 0 0 1 12 6a5 5 0 0 1 9.2 5C19 15.4 12 20 12 20Z"/>', 'h-5 w-5')}
          </button>
          <div class="grid h-full w-full place-items-center text-nicegrey">${svg(p.icon, 'h-20 w-20')}</div>
        </div>
        <div class="flex flex-1 flex-col px-1 pt-3">
          <h3 class="text-[15px] font-semibold leading-snug text-night">${p.name}</h3>
          <p class="mt-1 line-clamp-2 text-[13px] text-mediumgrey">${p.desc}</p>
          <div class="mt-auto flex items-end justify-between pt-3">
            <div class="flex flex-col gap-1">${badge}${price}</div>
            <button class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-night text-white transition-colors hover:bg-b2b" aria-label="Añadir a la cesta">
              ${svg('<path d="M6 8h12l-1 10H7zM9 8V6a3 3 0 0 1 6 0v2M12 11v4M10 13h4" fill="none"/>', 'h-4 w-4')}
            </button>
          </div>
        </div>
      </article>`;
  }
  // Formatea "59,99" como 59<sup>,99</sup>€ para replicar el estilo de precio.
  function fmt(price) {
    const [ent, dec] = String(price).split(',');
    return dec ? `${ent}<sup class="text-[11px] font-bold">,${dec}</sup>€` : `${ent}€`;
  }

  $('#novedadesGrid').innerHTML = NOVEDADES.map(productCard).join('');
  $('#seguirGrid').innerHTML = SEGUIR.map(productCard).join('');

  /* ---------- 7. Menú móvil ---------- */
  const drawer = $('#mobileDrawer'), drawerPanel = $('#drawerPanel');
  $('#mobileNav').innerHTML = CATEGORIES.map((c) => `
    <li>
      ${c.subs.length ? `
        <details class="group rounded-xl">
          <summary class="flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-[16px] font-medium text-night hover:bg-secondary">
            ${c.name}
            <svg class="h-4 w-4 text-lowvis transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <ul class="ml-3 mt-1 flex flex-col gap-0.5 border-l border-lowgrey pl-3">
            ${c.subs.map((s) => `<li><a href="#" class="block rounded-lg px-3 py-2 text-[15px] text-darkgrey hover:bg-secondary hover:text-night">${s.name}</a></li>`).join('')}
          </ul>
        </details>` : `
        <a href="#" class="flex items-center rounded-xl px-3 py-3 text-[16px] font-medium text-night hover:bg-secondary">${c.name}</a>`}
    </li>`).join('');

  $('#mobileMenuBtn').addEventListener('click', () => {
    drawer.classList.remove('hidden');
    requestAnimationFrame(() => { drawerPanel.style.transform = 'translateX(0)'; });
  });
  $$('#mobileDrawer [data-close]').forEach((el) => el.addEventListener('click', () => {
    drawerPanel.style.transform = 'translateX(-100%)';
    setTimeout(() => drawer.classList.add('hidden'), 300);
  }));
})();
