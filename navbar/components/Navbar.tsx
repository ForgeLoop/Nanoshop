import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  // Props opcionales para configuración futura
}

// Solución temporal para Module Federation - Componente sin estado
const Navbar: React.FC<NavbarProps> = () => {
  const productCategories = [
    { name: 'Smartphones', description: 'Últimos modelos con tecnología avanzada' },
    { name: 'Laptops', description: 'Computadoras portátiles de alto rendimiento' },
    { name: 'Tablets', description: 'Dispositivos táctiles versátiles' },
    { name: 'Accesorios', description: 'Complementos y periféricos' },
    { name: 'Audio', description: 'Auriculares y sistemas de sonido' },
    { name: 'Gaming', description: 'Productos para gamers' },
  ];

  // Funciones de manejo del dropdown usando eventos DOM directos
  const handleMouseEnter = (event: React.MouseEvent) => {
    const dropdown = event.currentTarget.querySelector(`.${styles.dropdownMenu}`) as HTMLElement;
    if (dropdown) {
      dropdown.style.display = 'block';
      dropdown.classList.remove(styles.closing);
    }
  };

  const handleNavbarMouseLeave = (event: React.MouseEvent) => {
    // Solo cerrar si realmente salimos de toda la navbar
    const navbar = event.currentTarget;
    const dropdowns = navbar.querySelectorAll(`.${styles.dropdownMenu}`);
    
    dropdowns.forEach((dropdown) => {
      const dropdownElement = dropdown as HTMLElement;
      if (dropdownElement.style.display === 'block') {
        dropdownElement.classList.add(styles.closing);
        setTimeout(() => {
          dropdownElement.style.display = 'none';
          dropdownElement.classList.remove(styles.closing);
        }, 300);
      }
    });
  };

  return (
    <nav 
      className={styles.navbar}
      onMouseLeave={handleNavbarMouseLeave}
    >
      <div className={styles.container}>
        {/* Logo a la izquierda */}
        <div className={styles.brand}>
          <a href="/" className={styles.logoLink}>
            <img 
              src="/logoSinFondo.png" 
              alt="Logo" 
              width={80} 
              height={80}
              className={styles.logo}
            />
          </a>
        </div>
        
        {/* Contenido central */}
        <div className={styles.centerContent}>
          {/* Buscador centrado */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Buscar productos..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Navegación y enlaces en una sola línea */}
          <div className={styles.navAndLinks}>
            <ul className={styles.nav}>
              <li 
                className={styles.dropdown}
                onMouseEnter={handleMouseEnter}
              >
                <a href="/productos" className={styles.dropdownToggle}>
                  Productos
                </a>
                <div className={styles.dropdownMenu} style={{ display: 'none' }}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.categoriesGrid}>
                      {productCategories.map((category, index) => (
                        <div key={index} className={styles.categoryItem}>
                          <h3>{category.name}</h3>
                          <p>{category.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/about" className={styles.secondaryLink}>Acerca de</a>
              </li>
              <li>
                <a href="/contact" className={styles.secondaryLink}>Contacto</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Iconos a la derecha en línea horizontal */}
        <div className={styles.rightIcons}>
          {/* Carrito */}
          <a href="/cart" className={styles.iconLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </a>
          
          {/* Usuario */}
          <a href="/profile" className={styles.iconLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
          
          {/* WhatsApp */}
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
