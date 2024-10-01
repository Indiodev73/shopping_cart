import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { FiltroProvider } from './context/filtroContext.jsx'

createRoot(document.getElementById('root')).render(
  <FiltroProvider>
    <App />
  </FiltroProvider>,
)
 