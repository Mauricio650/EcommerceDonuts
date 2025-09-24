import './App.css'
import { AppRoutes } from './AppRoutes'
import { ContextCartProvider } from './context/Cart'
import { ContextFiltersProvider } from './context/Filters'
import { Toaster } from 'sonner'

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
          <AppRoutes />
        </ContextFiltersProvider>
      </ContextCartProvider>
    </>
  )
}

export default App
