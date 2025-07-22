import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { COLORS } from './navbar.constants';

interface MobileSearchDropdownProps {
  visible: boolean;
  onClose: () => void;
  searchButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const MobileSearchDropdown: React.FC<MobileSearchDropdownProps> = ({ visible, onClose, searchButtonRef }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Effect to handle click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (visible && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // También verificar si el click fue en el botón de búsqueda
        if (searchButtonRef?.current && searchButtonRef.current.contains(event.target as Node)) {
          return; // No cerrar si el click fue en el botón de búsqueda
        }
        onClose();
      }
    };

    // Add event listener when visible
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log('Searching for:', searchValue);
      // Aquí puedes agregar la lógica de búsqueda
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div 
      ref={dropdownRef}
      style={{
        position: 'fixed',
        top: '60px', // Altura de la navbar mobile
        left: 0,
        right: 0,
        backgroundColor: '#333',
        borderTop: '1px solid #444',
        borderBottom: '1px solid #444',
        padding: '10px 20px',
        zIndex: 1001,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}>
      {/* Input de búsqueda */}
      <Input
        placeholder="¿Qué estás buscando?"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus
        style={{
          flex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '20px',
          padding: '8px 16px',
          color: COLORS.white,
          fontSize: '16px',
        }}
        styles={{
          input: {
            backgroundColor: 'transparent !important',
            color: `${COLORS.white} !important`,
            border: 'none !important',
          }
        }}
        suffix={
          <Button
            type="text"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            style={{
              color: COLORS.overlay.dark,
              border: 'none',
              background: 'none',
              padding: '4px',
              borderRadius: '50%',
              transition: 'color 0.3s ease',
            }}
          />
        }
      />
      
      {/* Botón cerrar */}
      <Button
        type="text"
        icon={<CloseOutlined />}
        onClick={onClose}
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          border: 'none',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '16px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      />
    </div>
  );
};
