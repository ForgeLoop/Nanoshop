import React from 'react';
import dynamic from 'next/dynamic';

interface DynamicNavbarProps {
  title?: string;
}

// Carga dinámica del componente Navbar desde el microfrontend
const RemoteNavbar = dynamic(
  () => import('navbar/Navbar').catch(() => {
    // Fallback en caso de que el microfrontend no esté disponible
    return () => (
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f8f9fa', 
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        margin: '1rem 0'
      }}>
        <p style={{ margin: 0, color: '#6c757d' }}>
          ⚠️ Navbar microfrontend no disponible. Asegúrate de que esté ejecutándose en localhost:3001
        </p>
      </div>
    );
  }),
  { 
    ssr: false,
    loading: () => (
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        Cargando navbar...
      </div>
    )
  }
);

const DynamicNavbar: React.FC<DynamicNavbarProps> = ({ title }) => {
  return (
    <div>
      {title && (
        <div style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: '#e9ecef', 
          fontSize: '0.875rem',
          color: '#495057'
        }}>
          {title}
        </div>
      )}
      <RemoteNavbar />
    </div>
  );
};

export default DynamicNavbar;
