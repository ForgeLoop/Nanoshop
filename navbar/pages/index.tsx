import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>🧭 Navbar Microfrontend - NanoShop</h1>
        <p>Este es el microfrontend que contiene la barra de navegación.</p>
        <p>Se ejecuta independientemente y puede ser consumido por otras aplicaciones.</p>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: '#fff3cd', 
          borderRadius: '8px',
          border: '1px solid #ffc107'
        }}>
          <h3>📡 Estado del Microfrontend</h3>
          <ul style={{ marginTop: '1rem', lineHeight: '1.6' }}>
            <li><strong>Puerto:</strong> 3001</li>
            <li><strong>Tipo:</strong> Proveedor (Remote)</li>
            <li><strong>Framework:</strong> Next.js 14 + Pages Directory</li>
            <li><strong>Expone:</strong> ./Navbar componente</li>
            <li><strong>Consumido por:</strong> Shell en puerto 3000</li>
            <li><strong>Tecnologías:</strong> Module Federation + Single-SPA</li>
            <li><strong>Estado:</strong> ✅ Funcionando</li>
          </ul>
        </div>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: '#d4edda', 
          borderRadius: '8px',
          border: '1px solid #c3e6cb'
        }}>
          <h3>🔗 Enlaces de Verificación</h3>
          <ul style={{ marginTop: '1rem', lineHeight: '1.6' }}>
            <li><a href="/_next/static/chunks/remoteEntry.js" target="_blank">📄 remoteEntry.js</a></li>
            <li><a href="/_next/static/chunks/mf-manifest.json" target="_blank">📄 mf-manifest.json</a></li>
            <li><a href="http://localhost:3000" target="_blank">🏠 Shell Application</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
