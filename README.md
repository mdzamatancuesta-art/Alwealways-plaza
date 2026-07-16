# Always Plaza

Frontend responsive (Mobile-First, estilo web app) de **Always Plaza**, un
marketplace moderno y minimalista para comprar desde cualquier parte del mundo
y **enviar a La Habana (Cuba)**. Moneda: **Euro (€)** · Idioma: **Español**.

Inspiración visual: Ikea, Leroy Merlin y PcComponentes — limpio, elegante y
altamente usable, con bordes redondeados, mucho espacio en blanco y
transiciones suaves.

## Características

- **Topbar (65px, `#070218`)** que se oculta al hacer scroll hacia abajo, con:
  - Selector de idioma (Español / English)
  - Avisos generales centrales modificables
  - Selector de **código postal** que actualiza dinámicamente el **punto de
    recogida** más cercano de La Habana
- **Header** con logo (enlace a Home), buscador prominente, "Iniciar sesión",
  favoritos con contador y cesta con contador
- **Mega menú** desplegable (hover/click) con todas las categorías y
  subcategorías del descriptivo
- **Hero 30 / 70** en grid de 12 columnas con gutter de 20px, colapsable a 1
  columna en móvil, con banner rotativo
- Secciones de categorías destacadas, novedades (productos), banner B2B y footer
- **Menú móvil** (drawer) con categorías desplegables

## Paleta y tipografía

Definidas en [`tailwind.config.js`](tailwind.config.js) siguiendo el descriptivo:
colores (`main #FAFAFB`, `b2b #01A3F4`, `promo #FFC919`, `novedad #E3562B`,
`exito #D10037`, `night #070218`, grises auxiliares) y la fuente **Inter** con
la jerarquía H1/H2/H3 y cuerpos de texto indicada.

## Estructura

```
index.html            # Maquetación semántica (HTML5)
css/
├── input.css         # Fuente Tailwind + estilos propios
└── tailwind.css      # CSS compilado (se sirve en producción)
js/
├── data.js           # Categorías, subcategorías, productos y códigos postales
└── main.js           # Scroll de topbar, mega menú, buscador, CP→recogida, etc.
tailwind.config.js    # Paleta, tipografía y tokens de diseño
```

## Uso

El sitio es estático: abre `index.html` en el navegador o sírvelo con cualquier
servidor. `css/tailwind.css` ya viene compilado, así que **no requiere build**
para verse.

Si editas clases de Tailwind y quieres recompilar el CSS:

```bash
npm install         # instala tailwindcss (devDependency)
npm run build:css   # genera css/tailwind.css minificado
npm run watch:css   # recompila al vuelo mientras desarrollas
npm run serve       # sirve en http://localhost:4173
```

## Notas

- La fuente **Inter** se carga desde Google Fonts; si no hay conexión, se usa la
  fuente del sistema como respaldo.
- Las imágenes de producto son **placeholders SVG marca blanca** (line-art sobre
  fondo blanco). Se pueden sustituir por fotografías reales de producto (fondo
  blanco, sin logotipos) cuando estén disponibles.
