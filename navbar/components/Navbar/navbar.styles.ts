import { CSSProperties } from 'react';
import { COLORS, NAVBAR_HEIGHT } from './navbar.constants';

// ==================== MAIN NAVBAR STYLES ====================

// ==================== STYLES ====================
export const navbarStyles: Record<string, CSSProperties> = {
  navbar: {
    backgroundColor: '#333',
    padding: '0',
    height: '120px',
    borderBottom: 'none',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
  },

  // Mobile styles
  navbarMobile: {
    backgroundColor: '#333',
    padding: '0',
    height: '60px',
    borderBottom: 'none',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
  },

  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between' as const,
    alignItems: 'center',
    width: '100%',
    gap: '0.75rem',
    height: '100%',
  },

  // Mobile container
  containerMobile: {
    width: '100%',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between' as const,
    alignItems: 'center',
    height: '100%',
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  logoLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  },

  logoImage: {
    objectFit: 'contain' as const,
    borderRadius: '50%',
    backgroundColor: 'white',
    padding: '6px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'block',
    margin: '0 auto',
  },

  // Mobile logo without white circle
  logoImageMobile: {
    objectFit: 'contain' as const,
    display: 'block',
    height: '60px',
    width: 'auto',
  },

  centerContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '0.8rem',
    flex: 1,
  },

  searchContainer: {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
  },

  navigationButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'center',
  },

  rightIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },

  iconButton: {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '40px',
    height: '40px',
    fontSize: '18px',
  },

  whatsappButton: {
    color: '#25D366',
    backgroundColor: 'white',
    border: 'none',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '40px',
    height: '40px',
  },

  // Mobile specific styles
  mobileLeftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  mobileRightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  hamburgerButton: {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    width: '40px',
    height: '40px',
  },

  searchButtonMobile: {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '22px',
    width: '40px',
    height: '40px',
  },

  mobileCenterLogo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Mobile drawer styles
  drawerContent: {
    padding: '20px 0',
  },

  categoryItem: {
    display: 'block',
    padding: '15px 20px',
    color: '#333',
    textDecoration: 'none',
    borderBottom: '1px solid #f0f0f0',
    transition: 'background-color 0.2s ease',
  },

  // Hidden elements for mobile/desktop
  desktopOnly: {
    display: 'block',
  },

  mobileOnly: {
    display: 'none',
  },
};

export const createSearchStyles = (focused: boolean): CSSProperties => ({
  backgroundColor: focused ? COLORS.overlay.medium : COLORS.overlay.light,
  border: focused ? `1px solid ${COLORS.overlay.medium}` : `1px solid rgba(255, 255, 255, 0.3)`,
  borderRadius: '20px',
  padding: '0px 40px 0px 16px',
  color: COLORS.white,
  fontSize: '14px',
  width: focused ? '300px' : '250px',
  transition: 'all 0.3s ease',
});

export const createButtonStyles = (primary: boolean = false): CSSProperties => ({
  color: primary ? COLORS.white : COLORS.overlay.dark,
  textDecoration: 'none',
  padding: primary ? '1.5rem 1rem' : '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  border: 'none',
  background: COLORS.transparent,
  fontSize: primary ? '16px' : '14px',
});