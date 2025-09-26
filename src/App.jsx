import './App.css'
import { AppRoutes } from './AppRoutes'
import { ContextCartProvider } from './context/Cart'
import { ContextFiltersProvider } from './context/Filters'
import { Toaster } from 'sonner'
import { ContextProductsProvider } from './context/Products'

function App () {
  return (
    <>
      <Toaster
        closeButton position='top-center'
        toastOptions={{
          classNames: {
            description: '!text-white'
          }
        }}
      />
      <ContextCartProvider>
        <ContextFiltersProvider>
          <ContextProductsProvider>
            <AppRoutes />
          </ContextProductsProvider>
        </ContextFiltersProvider>
      </ContextCartProvider>
    </>
  )
}

export default App
