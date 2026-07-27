/* ============================================================
   Always Plaza — Componentes reutilizables (tarjeta de producto, precio…)
   ============================================================ */
(function () {
  'use strict';
  const svg = (p, cls = 'h-6 w-6') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

  // Icono de "añadir a la cesta" (círculo oscuro + bolsa blanca con +), para el botón de todas las tarjetas.
  const CESTA_ICON = (cls = 'h-11 w-11') => `<svg class="${cls}" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#070218" d="M23,0h0c12.7,0,23,10.3,23,23h0c0,12.7-10.3,23-23,23h0C10.3,46,0,35.7,0,23h0C0,10.3,10.3,0,23,0Z"/><path fill="#fff" d="M30.4,33.3h-14.8c-.39,0-.73-.29-.79-.67l-2.1-13c-.04-.23.03-.47.18-.65.15-.18.38-.28.61-.28h19c.23,0,.46.1.61.28.15.18.22.42.18.65l-2.1,13c-.06.39-.4.67-.79.67ZM16.28,31.7h13.44l1.84-11.4H14.44l1.84,11.4Z"/><path fill="#fff" d="M28.5,20.3c-.44,0-.8-.36-.8-.8,0-2.87-2.11-5.2-4.7-5.2s-4.7,2.33-4.7,5.2c0,.44-.36.8-.8.8s-.8-.36-.8-.8c0-3.75,2.83-6.8,6.3-6.8s6.3,3.05,6.3,6.8c0,.44-.36.8-.8.8Z"/><path fill="#070218" d="M30.5,26h0c3.04,0,5.5,2.46,5.5,5.5h0c0,3.04-2.46,5.5-5.5,5.5h0c-3.04,0-5.5-2.46-5.5-5.5h0c0-3.04,2.46-5.5,5.5-5.5Z"/><path fill="#fff" d="M30.51,35.51h0c-.44,0-.8-.36-.8-.8v-6.42c0-.44.37-.8.81-.8h0c.44,0,.8.36.8.8v6.42c0,.44-.37.8-.81.8Z"/><path fill="#fff" d="M33.71,32.3h-6.42c-.44,0-.8-.36-.8-.8s.36-.8.8-.8h6.42c.44,0,.8.36.8.8s-.36.8-.8.8Z"/></svg>`;

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
      ? `<div class="flex flex-col gap-2 leading-none"><span class="text-[13px] text-lowvis line-through">${p.old}€</span><span class="w-fit rounded bg-promo px-1.5 py-0.5 text-[18px] font-extrabold text-night">${fmtPrice(p.price)}</span></div>`
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
            <button type="button" data-add class="shrink-0 rounded-full transition-transform hover:scale-105" aria-label="Añadir a la cesta">${CESTA_ICON('h-11 w-11')}</button>
          </div>
        </div>
      </article>`;
  }

  window.AP = Object.assign(window.AP || {}, { productCard, fmtPrice });
})();
