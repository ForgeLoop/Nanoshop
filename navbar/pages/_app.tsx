import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import '../styles/globals.css'
// Importar estilos de Ant Design
import 'antd/dist/reset.css'
// Importar estilos responsive de la navbar
import '../components/Navbar/navbar.responsive.css'

// Configuración del tema para mantener el diseño original exacto
const theme = {
  token: {
    colorPrimary: '#333', // Color gris oscuro del navbar original
    borderRadius: 4,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Menu: {
      itemBg: 'transparent',
      itemHoverBg: 'rgba(255, 255, 255, 0.1)',
      itemSelectedBg: 'rgba(255, 255, 255, 0.2)',
      itemColor: 'white',
      itemHoverColor: 'white',
      itemSelectedColor: 'white',
    },
    Input: {
      borderRadius: 20,
    },
    Button: {
      borderRadius: 4,
    },
    Dropdown: {
      borderRadius: 0,
    }
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <div suppressHydrationWarning>
        <Component {...pageProps} />
      </div>
    </ConfigProvider>
  )
}
