import React from 'react';
import dynamic from 'next/dynamic';
import { Carousel as AntdCarousel, ConfigProvider } from 'antd';
import { 
  CAROUSEL_IMAGES, 
  CAROUSEL_CONFIG, 
  type CarouselProps,
} from './Carousel/carousel.constants';
import { carouselStyles, getResponsiveHeight } from './Carousel/carousel.styles';
import { useIsMobile } from './Carousel/useWindowSize';

// ==================== COMPONENT ====================

const Carousel: React.FC<CarouselProps> = ({ 
  images = CAROUSEL_IMAGES,
  autoplaySpeed = CAROUSEL_CONFIG.autoplaySpeed,
  height = 'auto'
}) => {
  const isMobile = useIsMobile();
  
  // FUNCIONALIDAD DE HOVER/CLICK COMENTADA PARA USO FUTURO
  // const [hoveredSlide, setHoveredSlide] = React.useState<string | null>(null);
  // const handleSlideClick = (image: CarouselImage) => {
  //   if (image.link) {
  //     navigateTo(image.link);
  //   }
  // };

  const carouselHeight = height === 'auto' ? getResponsiveHeight(isMobile) : height;

  // Configuración de tokens para los dots
  const carouselTokens = {
    components: {
      Carousel: {
        dotWidth: isMobile ? 10 : 12,        // Ancho del dot
        dotHeight: isMobile ? 10 : 12,       // Alto del dot  
        dotActiveWidth: isMobile ? 10 : 12,  // Ancho del dot activo
        dotGap: isMobile ? 4 : 6,            // Espacio entre dots
        dotOffset: 5,                        // Distancia del borde
        colorBgContainer: '#333',
        colorPrimary: '#333', 
      },
    },
  };

  return (
    <ConfigProvider theme={carouselTokens}>
      <div style={carouselStyles.carouselContainer}>
        <AntdCarousel
          {...CAROUSEL_CONFIG}
          dots={true}
          autoplaySpeed={autoplaySpeed}
          style={{ 
            ...carouselStyles.carouselWrapper,
            height: carouselHeight 
          }}
        >
          {images.map((image) => (
            <div key={image.id}>
              <div
                style={{
                  ...carouselStyles.carouselWrapper,
                  height: carouselHeight,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={carouselStyles.carouselImage}
                />
              </div>
            </div>
          ))}
        </AntdCarousel>
      </div>
    </ConfigProvider>
  );
};

// CÓDIGO DE OVERLAY COMENTADO PARA USO FUTURO:
/*
FUNCIONALIDAD DE HOVER/CLICK PARA ACTIVAR MÁS ADELANTE:

1. Descomentar imports:
   - navigateTo
   - type CarouselImage

2. Descomentar estado y funciones:
   const [hoveredSlide, setHoveredSlide] = React.useState<string | null>(null);
   const handleSlideClick = (image: CarouselImage) => {
     if (image.link) {
       navigateTo(image.link);
     }
   };

3. Agregar eventos al div contenedor de imagen:
   cursor: image.link ? 'pointer' : 'default',
   onClick={() => handleSlideClick(image)}
   onMouseEnter={() => setHoveredSlide(image.id)}
   onMouseLeave={() => setHoveredSlide(null)}

4. Agregar overlay después de la imagen:
   {(image.title || image.description) && (
     <div
       style={{
         ...carouselStyles.imageOverlay,
         ...(hoveredSlide === image.id ? carouselStyles.imageOverlayVisible : {}),
       }}
     >
       {image.title && (
         <h2 
           style={
             isMobile 
               ? { ...carouselStyles.slideTitle, ...carouselStyles.slideTitleMobile }
               : carouselStyles.slideTitle
           }
         >
           {image.title}
         </h2>
       )}
       
       {image.description && (
         <p 
           style={
             isMobile 
               ? { ...carouselStyles.slideDescription, ...carouselStyles.slideDescriptionMobile }
               : carouselStyles.slideDescription
           }
         >
           {image.description}
         </p>
       )}
       
       {image.link && (
         <button
           style={carouselStyles.slideButton}
           onMouseEnter={(e) => {
             e.currentTarget.style.backgroundColor = '#40a9ff';
             e.currentTarget.style.transform = 'translateY(-2px)';
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.backgroundColor = '#1890ff';
             e.currentTarget.style.transform = 'translateY(0)';
           }}
         >
           Ver más
         </button>
       )}
     </div>
   )}
*/

// Wrapper para evitar problemas de SSR con Ant Design
const CarouselWithNoSSR = dynamic(() => Promise.resolve(Carousel), {
  ssr: false,
  loading: () => (
    <div style={{ 
      height: '400px', 
      backgroundColor: '#f5f5f5', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#666',
      fontSize: '16px'
    }}>
      Cargando carousel...
    </div>
  )
});

export default CarouselWithNoSSR;
