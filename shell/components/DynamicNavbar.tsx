import React from 'react';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const DynamicNavbar = dynamic(
  () => import('navbar/Navbar') as Promise<{ default: ComponentType<any> }>,
  {
    ssr: false,
    loading: () => (
      <div style={{ 
        backgroundColor: '#2563eb', 
        padding: '1rem 2rem', 
        color: 'white',
        textAlign: 'center'
      }}>
        🔄 Cargando navbar...
      </div>
    ),
  }
);

export default DynamicNavbar;
