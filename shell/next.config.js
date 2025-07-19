const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// Configurar variable de entorno para Module Federation
process.env.NEXT_PRIVATE_LOCAL_WEBPACK = 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Desactivar strict mode para debugging
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          navbar: 'navbar@http://localhost:3001/_next/static/chunks/remoteEntry.js',
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
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
