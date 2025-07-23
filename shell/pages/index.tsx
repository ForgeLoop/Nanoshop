import React from 'react';
import dynamic from 'next/dynamic';
import DynamicNavbar from '../components/DynamicNavbar';
import DynamicCarousel from '../components/DynamicCarousel';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, width: '100vw', overflow: 'hidden' }}>
      <DynamicNavbar />
      {/* Carousel integrado - sin márgenes ni padding, pegado a navbar */}
      <div style={{ margin: 0, padding: 0, width: '100%' }}>
        <DynamicCarousel />
      </div>
      
      <main style={{ margin: 0, padding: '2rem' }}>
        <h1>🎉 Shell Application - NanoShop</h1>
        <p>Esta es la aplicación principal (shell) que consume microfrontends usando <strong>Module Federation + Single-SPA</strong>.</p>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '2rem', 
          backgroundColor: '#f0f8ff', 
          borderRadius: '8px',
          border: '1px solid #007acc'
        }}>
          <h2>📊 Arquitectura del Microfrontend</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#d1ecf1', 
              borderRadius: '8px',
              border: '1px solid #bee5eb'
            }}>
              <h3>🏠 Shell App (Host)</h3>
              <ul style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                <li><strong>Puerto:</strong> 3000</li>
                <li><strong>Tipo:</strong> Consumidor</li>
                <li><strong>Framework:</strong> Next.js 14 + Pages Directory</li>
                <li><strong>Tecnologías:</strong> Module Federation + Single-SPA</li>
                <li><strong>Consume:</strong> navbar desde puerto 3001</li>
              </ul>
            </div>
            
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#fff3cd', 
              borderRadius: '8px',
              border: '1px solid #ffc107'
            }}>
              <h3>🧭 Navbar Microfrontend</h3>
              <ul style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                <li><strong>Puerto:</strong> 3001</li>
                <li><strong>Tipo:</strong> Proveedor (Remote)</li>
                <li><strong>Framework:</strong> Next.js 14 + Pages Directory</li>
                <li><strong>Expone:</strong> ./Navbar componente</li>
                <li><strong>Estado:</strong> Cargado dinámicamente arriba ⬆️</li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <h4>🔧 Diagnóstico Module Federation:</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              • <strong>remoteEntry.js:</strong> <a href="http://localhost:3001/_next/static/chunks/remoteEntry.js" target="_blank">http://localhost:3001/_next/static/chunks/remoteEntry.js</a><br/>
              • <strong>Manifest:</strong> <a href="http://localhost:3001/_next/static/chunks/mf-manifest.json" target="_blank">http://localhost:3001/_next/static/chunks/mf-manifest.json</a><br/>
              • <strong>Configuración:</strong> navbar/Navbar desde localhost:3001 ✅
            </p>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: '#d4edda', 
          borderRadius: '8px',
          border: '1px solid #c3e6cb'
        }}>
          <h3>✅ Estado del Sistema</h3>
          <ul style={{ marginTop: '1rem', lineHeight: '1.6' }}>
            <li>✅ <strong>Module Federation:</strong> Activo</li>
            <li>✅ <strong>Single-SPA:</strong> Configurado</li>
            <li>✅ <strong>Next.js 14:</strong> Versión estable</li>
            <li>✅ <strong>Pages Directory:</strong> Compatible con Module Federation</li>
            <li>✅ <strong>Webpack:</strong> Habilitado (sin Turbopack)</li>
            <li>✅ <strong>Microfrontend:</strong> Navbar cargado dinámicamente</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
