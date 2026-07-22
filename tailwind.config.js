/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        main: '#FAFAFB',      // Fondo principal (Dark White)
        secondary: '#F5F5F7', // Fondo secundario
        b2b: '#0019FF',       // Negocios / B2B
        promo: '#FFC919',     // Promociones
        novedad: '#E3562B',   // Novedades
        exito: '#D10037',     // Éxito / detalles importantes
        night: '#070218',     // Base oscuro principal
        darkgrey: '#363F56',
        mediumgrey: '#868795',
        nicegrey: '#D3D9E8',
        lowgrey: '#ECEFF6',
        lowvis: '#A6AFC0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(7,2,24,.04), 0 10px 30px rgba(7,2,24,.06)',
        softlg: '0 8px 40px rgba(7,2,24,.10)',
      },
      spacing: {
        4.5: '1.125rem',
      },
    },
  },
  // Clases construidas dinámicamente en JS (bg-${accent}) que el escáner no ve.
  safelist: [
    'bg-night', 'bg-novedad', 'bg-b2b', 'bg-promo', 'bg-exito',
    'text-white', 'text-night',
  ],
  plugins: [],
};
