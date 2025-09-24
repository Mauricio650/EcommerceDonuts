import './App.css'
import { AppRoutes } from './AppRoutes'
import { ContextCartProvider } from './context/Cart'
import { ContextFiltersProvider } from './context/Filters'
import { Toaster} from 'sonner'


function App () {
  return (
    <>
    <Toaster richColors closeButton position="top-center" />
      <ContextCartProvider>
        <ContextFiltersProvider>
          <AppRoutes />
        </ContextFiltersProvider>
      </ContextCartProvider>
    </>
  )
}

export default App
