const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// Configurar variable de entorno para Module Federation
process.env.NEXT_PRIVATE_LOCAL_WEBPACK = 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Desactivar strict mode para Module Federation
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'localhost'], // Dominios permitidos para imágenes
    unoptimized: true // Para desarrollo
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'carousel',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Carousel': './components/Carousel.tsx',
        },
        shared: {
          react: { 
            singleton: true, 
            eager: true,
            requiredVersion: false,
            strictVersion: false 
          },
          'react-dom': { 
            singleton: true, 
            eager: true,
            requiredVersion: false,
            strictVersion: false 
          },
          antd: {
            singleton: true,
            eager: false,
            requiredVersion: false,
            strictVersion: false
          }
        },
      })
    );
    return config;
  },
}

module.exports = nextConfig
