# 🛍️ Nanoshop - Microfrontend E-commerce Platform

Un proyecto de e-commerce construido con **Module Federation** y **Single-SPA** que implementa una arquitectura de microfrontends escalable.

## 🏗️ Arquitectura

Este proyecto utiliza una arquitectura de microfrontends con:

- **Shell** (puerto 3000) - Aplicación principal que consume microfrontends
- **Navbar** (puerto 3001) - Microfrontend que contiene la barra de navegación

## 🚀 Tecnologías

- **Next.js 14.2.30** - Framework React
- **Module Federation** - Para compartir componentes entre aplicaciones
- **Single-SPA** - Orquestación de microfrontends
- **TypeScript** - Tipado estático
- **CSS Modules** - Estilos modulares

## 📦 Estructura del Proyecto

```
Nanoshop/
├── navbar/          # Microfrontend - Barra de navegación
│   ├── components/  # Componentes React
│   ├── pages/       # Páginas Next.js
│   ├── public/      # Archivos estáticos
│   └── styles/      # Estilos CSS
│
└── shell/           # Aplicación Shell principal
    ├── components/  # Componentes React
    ├── pages/       # Páginas Next.js
    ├── public/      # Archivos estáticos
    └── styles/      # Estilos CSS
```

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js 18+ 
- npm

### Pasos para ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ForgeLoop/Nanoshop.git
   cd Nanoshop
   ```

2. **Instalar dependencias del Navbar**
   ```bash
   cd navbar
   npm install
   ```

3. **Instalar dependencias del Shell**
   ```bash
   cd ../shell
   npm install
   ```

4. **Ejecutar el Navbar** (en una terminal)
   ```bash
   cd navbar
   npm run dev
   ```
   📍 Se ejecuta en: http://localhost:3001

5. **Ejecutar el Shell** (en otra terminal)
   ```bash
   cd shell
   npm run dev
   ```
   📍 Se ejecuta en: http://localhost:3000

## 🎯 Funcionalidades

### Navbar Microfrontend
- ✅ Logo de la empresa
- ✅ Barra de búsqueda
- ✅ Menú dropdown de productos con categorías
- ✅ Iconos de carrito, usuario y WhatsApp
- ✅ Diseño responsive
- ✅ Animaciones CSS

### Shell Principal
- ✅ Consumo dinámico del navbar via Module Federation
- ✅ Manejo de errores si el microfrontend no está disponible
- ✅ Interfaz principal de la aplicación

## 🔧 Configuración Module Federation

### Navbar (Remote)
```javascript
// next.config.js
exposes: {
  './Navbar': './components/Navbar',
}
```

### Shell (Host)
```javascript
// next.config.js
remotes: {
  navbar: 'navbar@http://localhost:3001/_next/static/chunks/remoteEntry.js',
}
```

## 🌟 Características Técnicas

- **Sin React Hooks** en el navbar para evitar conflictos SSR con Module Federation
- **DOM manipulation directa** para interacciones
- **Compatibilidad con Pages Directory** de Next.js (no App Directory)
- **Shared dependencies** configuradas para evitar duplicación
- **Error boundaries** para manejo robusto de fallos

## 🚀 Despliegue

Para production:

1. **Build del Navbar**
   ```bash
   cd navbar
   npm run build
   npm start
   ```

2. **Build del Shell**
   ```bash
   cd shell
   npm run build
   npm start
   ```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo

- **ForgeLoop** - Organización de desarrollo

---

⭐ Si este proyecto te ayuda, ¡dale una estrella en GitHub!
