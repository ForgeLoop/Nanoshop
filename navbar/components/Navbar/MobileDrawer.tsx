import React from 'react';
import { Drawer } from 'antd';
import { PRODUCT_CATEGORIES, navigateTo } from './navbar.constants';
import { navbarStyles } from './navbar.styles';

interface MobileDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Categorías"
      placement="left"
      onClose={onClose}
      open={visible}
      className="mobile-drawer"
      width={280}
    >
      <div style={navbarStyles.drawerContent}>
        {PRODUCT_CATEGORIES.map((category, index) => (
          <a
            key={index}
            href={`/productos/${category.name.toLowerCase()}`}
            style={navbarStyles.categoryItem}
            className="category-item"
            onClick={(e) => {
              e.preventDefault();
              navigateTo(`/productos/${category.name.toLowerCase()}`);
              onClose();
            }}
          >
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 600 }}>
                {category.name}
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: 1.3 }}>
                {category.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Drawer>
  );
};
