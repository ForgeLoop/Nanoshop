import React from 'react';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div>
      <h1 style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        margin: 0,
        backgroundColor: '#f0f0f0',
        color: '#333'
      }}>
        Carousel Demo
      </h1>
      <Carousel />
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        backgroundColor: '#fff'
      }}>
        <h2>Contenido adicional</h2>
        <p>El carousel se encuentra arriba de este contenido.</p>
      </div>
    </div>
  );
}
