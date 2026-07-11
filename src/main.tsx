import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './contextapi/CartProvider.tsx'
import { OrderProvider } from './contextapi/OrderProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrderProvider>
    <CartProvider children={<App />} />
    </OrderProvider>
  </StrictMode>,
)
