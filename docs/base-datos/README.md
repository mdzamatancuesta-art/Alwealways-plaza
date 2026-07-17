# Base de datos de productos — Always Plaza

Modelo de datos para el catálogo del marketplace. Rellena las plantillas CSV y
con ellas cargo los productos en la web. Moneda: **euro (€)**. Idioma: español.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `categorias.csv` | Árbol de categorías y subcategorías (referencia). |
| `plantilla-productos.csv` | **Tabla principal**: una fila por producto. |
| `plantilla-variantes.csv` | Opciones de un producto (Modelo, Tamaño, Color, Material). |
| `plantilla-precios-por-cantidad.csv` | Tramos de precio por cantidad (envases, personalización). |

## Tabla principal — campos (`plantilla-productos.csv`)

| Campo | Obligatorio | Tipo / formato | Ejemplo | Notas |
|---|---|---|---|---|
| `sku` | ✔ | texto único | `ENV-VAS-0001` | Identificador único. Sugerido: `CAT-SUB-nnnn`. |
| `nombre` | ✔ | texto | `Vaso de cartón kraft 50 ml` | |
| `categoria` | ✔ | de `categorias.csv` | `Envases y embalajes` | Debe coincidir exactamente. |
| `subcategoria` | ✔ | de `categorias.csv` | `Vasos` | |
| `descripcion_corta` | ✔ | texto (≤120) | `Vaso doble capa biodegradable` | Se ve en la tarjeta. |
| `descripcion_larga` | – | texto | … | Para la ficha de producto. |
| `marca_vendedor` | – | texto | `E&E`, `Alzan` | "Vendido por…". |
| `precio_eur` | ✔ | número (punto decimal) | `5.00` | Precio de venta con IVA incluido. |
| `precio_anterior_eur` | – | número | `25.99` | Si hay oferta (precio tachado). |
| `iva_pct` | – | número | `21` | Porcentaje de IVA. |
| `unidad_venta` | ✔ | `unidad` / `pack` / `caja` | `pack` | |
| `cantidad_minima` | – | entero | `50` | Mínimo por pedido. |
| `stock` | – | entero | `300` | Unidades disponibles. |
| `personalizable` | – | `si` / `no` | `si` | Si admite diseño/impresión propia. |
| `etiqueta` | – | `Novedad` / `Oferta` / `Más vendido` / (vacío) | `Más vendido` | Distintivo en la tarjeta. |
| `imagen_principal` | ✔ | ruta o URL | `assets/products/env40.jpg` | **Fondo blanco, sin logotipos** (marca blanca). |
| `imagenes_adicionales` | – | rutas separadas por `;` | `img2.jpg;img3.jpg` | Galería de la ficha. |
| `peso_g` | – | entero (gramos) | `450` | Para cálculo de envío. |
| `dimensiones_cm` | – | `alto x ancho x fondo` | `33x13x3` | Para envío/embalaje. |
| `activo` | ✔ | `si` / `no` | `si` | Publicado o borrador. |

## Variantes (`plantilla-variantes.csv`)

Para productos con opciones (el martillo tiene Modelo Madera/Metal; los vasos
tienen Tamaño y Modelo). Una fila por opción.

| Campo | Ejemplo | Notas |
|---|---|---|
| `sku` | `ENV-VAS-0001` | SKU del producto padre. |
| `tipo_variante` | `Tamaño` | `Modelo`, `Tamaño`, `Color`, `Material`… |
| `opcion` | `M 50 ml` | Valor concreto. |
| `precio_extra_eur` | `1.00` | Suplemento sobre el precio base (0 si no varía). |
| `sku_variante` | `ENV-VAS-0001-M` | Opcional, si controlas stock por variante. |

## Precios por cantidad (`plantilla-precios-por-cantidad.csv`)

Para envases y productos personalizables con descuento por volumen.

| Campo | Ejemplo |
|---|---|
| `sku` | `ENV-VAS-0001` |
| `cantidad_uds` | `100` |
| `precio_unitario_eur` | `0.24` |
| `precio_total_sin_iva_eur` | `24.00` |

## Atributos recomendados por categoría

Puedes añadirlos como columnas extra en `plantilla-productos.csv` o dímelos y
creo una hoja de atributos por categoría:

- **Bricolaje y construcción** → potencia (W), voltaje (V), material, medida,
  uso (profesional/doméstico), incluye_baterias.
- **Envases y embalajes** → capacidad (ml), material (kraft/blanco/caña),
  biodegradable (si/no), apto_calor (si/no), tapa_incluida.
- **Papelería y ofimática** → formato (A4/A3…), nº_páginas, color, compatibilidad.
- **Fotografía** → tipo (cámara/accesorio), resolución, conectividad.
- **Hogar** → material, medidas, color, capacidad.
- **Servicios** → tipo_servicio, ámbito (empresa/particular), presupuesto (si/no),
  canal (presencial/telemático).

## Reglas de las imágenes
- Fondo **blanco**, producto centrado, **sin logotipos ni marcas** (marca blanca).
- Formato JPG o PNG, cuadradas a ser posible (1:1), mínimo 800×800 px.
- Nómbralas por SKU para asociarlas fácil: `ENV-VAS-0001.jpg`.
