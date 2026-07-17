/* ============================================================
   Always Plaza — Componentes reutilizables (tarjeta de producto, precio…)
   ============================================================ */
(function () {
  'use strict';
  const svg = (p, cls = 'h-6 w-6') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

  // Precio "59,99" → 59<sup>,99</sup>€
  function fmtPrice(price) {
    const [ent, dec] = String(price).split(',');
    return dec ? `${ent}<sup class="text-[11px] font-bold">,${dec}</sup>€` : `${ent}€`;
  }

  function productCard(p) {
    const badge = p.tag
      ? `<span class="text-[12px] font-bold text-novedad">${p.tag}</span>`
      : p.badge
        ? `<span class="w-fit rounded bg-exito px-2 py-0.5 text-[11px] font-bold text-white">${p.badge}</span>`
        : '';
    const discount = p.discount ? `<span class="absolute right-3 top-3 z-10 rounded-md bg-night px-2 py-1 text-[11px] font-bold text-white">${p.discount}</span>` : '';
    const price = p.old
      ? `<div class="flex flex-col leading-tight"><span class="text-[12px] text-lowvis line-through">${p.old}€</span><span class="w-fit rounded bg-promo px-1.5 text-[18px] font-extrabold text-night">${fmtPrice(p.price)}</span></div>`
      : `<span class="text-[18px] font-extrabold text-night">${fmtPrice(p.price)}</span>`;
    // Imagen: ocupa todo el ancho y llega hasta arriba de la tarjeta (250px).
    const media = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy" class="h-full w-full object-cover" />`
      : `<div class="grid h-full w-full place-items-center bg-secondary text-nicegrey">${svg(p.icon || ICONS.producto, 'h-24 w-24')}</div>`;
    // Ficha del producto (sin imagen: se lee del <img> al hacer clic para no duplicar datos pesados).
    const meta = encodeURIComponent(JSON.stringify({
      name: p.name, desc: p.desc || '', price: p.price, old: p.old || '',
      discount: p.discount || '', tag: p.tag || '', badge: p.badge || '', icon: p.icon || '',
    }));
    return `
      <article data-prod="${meta}" class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-softlg">
        <a href="producto.html" class="relative block h-[250px] w-full">
          ${discount}
          ${media}
          <button type="button" data-fav class="absolute bottom-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-night shadow-soft backdrop-blur transition-colors hover:bg-white" aria-label="Añadir a favoritos" onclick="event.preventDefault()">${svg('<path d="M12 20s-7-4.6-9.2-9A5 5 0 0 1 12 6a5 5 0 0 1 9.2 5C19 15.4 12 20 12 20Z"/>', 'h-5 w-5')}</button>
        </a>
        <div class="flex flex-1 flex-col px-4 pb-4 pt-3">
          <a href="producto.html" class="text-[15px] font-bold leading-snug text-night transition-colors hover:text-b2b">${p.name}</a>
          <p class="mt-1 line-clamp-2 text-[13px] text-mediumgrey">${p.desc || ''}</p>
          <div class="mt-auto flex items-end justify-between pt-3">
            <div class="flex flex-col gap-1">${badge}${price}</div>
            <button type="button" data-add class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-night text-white transition-colors hover:bg-b2b" aria-label="Añadir a la cesta">${svg('<path d="M6 8h12l-1 10H7zM9 8V6a3 3 0 0 1 6 0v2M12 11v4M10 13h4"/>', 'h-6 w-6')}</button>
          </div>
        </div>
      </article>`;
  }

  window.AP = Object.assign(window.AP || {}, { productCard, fmtPrice });
})();
