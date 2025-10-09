import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "primereact/resources/themes/lara-light-cyan/theme.css"
import 'primereact/resources/primereact.min.css'                // Estilos base de PrimeReact
import 'primeicons/primeicons.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <App />

  </BrowserRouter>
)
