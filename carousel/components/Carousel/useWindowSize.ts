import { useState, useEffect } from 'react';

// Hook para detectar si estamos en mobile
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Verificar al cargar
    checkIsMobile();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
};
