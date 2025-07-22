import React from 'react';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { NAVBAR_HEIGHT, COLORS, PRODUCT_CATEGORIES, navigateTo } from './navbar.constants';
import { createButtonStyles } from './navbar.styles';

interface DesktopDropdownProps {
  onMouseEnter: (element: HTMLElement, hoverStyles: Partial<CSSStyleDeclaration>) => void;
  onMouseLeave: (element: HTMLElement, defaultStyles: Partial<CSSStyleDeclaration>) => void;
}

export const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ onMouseEnter, onMouseLeave }) => {
  // ==================== DROPDOWN MENU ====================
  const createProductMenu = (): MenuProps['items'] => [
    {
      key: 'categories',
      label: (
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '3rem 2rem' 
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {PRODUCT_CATEGORIES.map((category, index) => (
              <div 
                key={index}
                style={{
                  padding: '1.5rem',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.borderColor = '#e9ecef';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.transparent;
                  e.currentTarget.style.borderColor = COLORS.transparent;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => navigateTo(`/productos/${category.name.toLowerCase()}`)}
              >
                <h3 style={{ 
                  margin: '0 0 0.5rem 0', 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  color: '#333' 
                }}>
                  {category.name}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: '0.9rem', 
                  color: '#666', 
                  lineHeight: 1.4 
                }}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items: createProductMenu() }}
      placement="bottom"
      trigger={['hover']}
      overlayStyle={{
        position: 'fixed',
        top: NAVBAR_HEIGHT,
        left: 0,
        right: 0,
        width: '100vw',
        backgroundColor: COLORS.white,
        borderRadius: 0,
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        zIndex: 999,
      }}
    >
      <Button 
        type="text"
        style={createButtonStyles(true)}
        onMouseEnter={(e) => onMouseEnter(e.currentTarget, { backgroundColor: COLORS.overlay.light })}
        onMouseLeave={(e) => onMouseLeave(e.currentTarget, { backgroundColor: COLORS.transparent })}
      >
        Productos
      </Button>
    </Dropdown>
  );
};
