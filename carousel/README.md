# Carousel Component

Componente de carousel de imágenes para Nanoshop. Microfrontend independiente construido con Next.js, React y Ant Design.

## Características

- ✅ Carousel de imágenes responsivo
- ✅ Navegación automática cada 5 segundos
- ✅ Puntos indicadores interactivos
- ✅ Pausar al hover
- ✅ Efectos de transición suaves
- ✅ Completamente responsive
- ✅ Construido con Ant Design

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor se ejecutará en http://localhost:3002

## Uso

```tsx
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Carousel />
    </div>
  );
}
```

## Estructura

```
carousel/
├── components/
│   ├── Carousel.tsx              # Componente principal
│   └── Carousel/
│       ├── carousel.constants.ts  # Constantes y configuración
│       └── carousel.styles.ts     # Estilos del carousel
├── pages/
│   ├── _app.tsx                  # Configuración de la app
│   └── index.tsx                 # Página principal
├── public/                       # Imágenes estáticas
├── styles/                       # Estilos globales
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Personalización

Puedes modificar las imágenes y configuración en `components/Carousel/carousel.constants.ts`.
