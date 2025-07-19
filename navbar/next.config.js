const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// Configurar variable de entorno para Module Federation
process.env.NEXT_PRIVATE_LOCAL_WEBPACK = 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Desactivar strict mode para debugging
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'navbar',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Navbar': './components/Navbar',
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
