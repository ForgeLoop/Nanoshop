import React from 'react';
import dynamic from 'next/dynamic';

// Importar dinámicamente el carousel desde el microfrontend
const RemoteCarousel = dynamic(
  () =>
    // @ts-ignore
    import('carousel/Carousel').catch((err) => {
      console.error('Error loading carousel microfrontend:', err);
      return () => (
        <div style={{
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          color: '#666',
          fontSize: '16px',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <span>⚠️ Error cargando carousel</span>
          <small>Asegúrate de que el carousel esté ejecutándose en puerto 3002</small>
        </div>
      );
    }),
  {
    ssr: false,
    loading: () => (
      <div style={{
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        color: '#6c757d',
        fontSize: '16px'
      }}>
        🔄 Cargando carousel desde microfrontend...
      </div>
    )
  }
);

const DynamicCarousel: React.FC = () => {
  return (
    <div style={{ margin: 0, padding: 0, display: 'block' }}>
      <RemoteCarousel />
    </div>
  );
};

export default DynamicCarousel;
