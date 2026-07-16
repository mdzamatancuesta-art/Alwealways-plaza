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
    const discount = p.discount ? `<span class="absolute left-3 top-3 rounded-md bg-night px-2 py-1 text-[11px] font-bold text-white">${p.discount}</span>` : '';
    const price = p.old
      ? `<div class="flex flex-col leading-tight"><span class="text-[12px] text-lowvis line-through">${p.old}€</span><span class="w-fit rounded bg-promo px-1.5 text-[17px] font-extrabold text-night">${fmtPrice(p.price)}</span></div>`
      : `<span class="text-[17px] font-extrabold text-night">${fmtPrice(p.price)}</span>`;
    return `
      <article class="group flex flex-col">
        <a href="producto.html" class="relative block aspect-square overflow-hidden rounded-xl2 bg-secondary p-6">
          ${discount}
          <button class="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full text-darkgrey transition-colors hover:text-exito" aria-label="Añadir a favoritos" onclick="event.preventDefault()">${svg('<path d="M12 20s-7-4.6-9.2-9A5 5 0 0 1 12 6a5 5 0 0 1 9.2 5C19 15.4 12 20 12 20Z"/>', 'h-5 w-5')}</button>
          <div class="grid h-full w-full place-items-center text-nicegrey">${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy" class="h-full w-full object-contain" />` : svg(p.icon || ICONS.producto, 'h-20 w-20')}</div>
        </a>
        <div class="flex flex-1 flex-col px-1 pt-3">
          <a href="producto.html" class="text-[15px] font-semibold leading-snug text-night transition-colors hover:text-b2b">${p.name}</a>
          <p class="mt-1 line-clamp-2 text-[13px] text-mediumgrey">${p.desc || ''}</p>
          <div class="mt-auto flex items-end justify-between pt-3">
            <div class="flex flex-col gap-1">${badge}${price}</div>
            <button class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-night text-white transition-colors hover:bg-b2b" aria-label="Añadir a la cesta">${svg('<path d="M6 8h12l-1 10H7zM9 8V6a3 3 0 0 1 6 0v2M12 11v4M10 13h4"/>', 'h-4 w-4')}</button>
          </div>
        </div>
      </article>`;
  }

  window.AP = Object.assign(window.AP || {}, { productCard, fmtPrice });
})();
