import './App.css'
import { AppRoutes } from './AppRoutes'
import { ProviderAuthContext } from './context/auth'
import { ContextCartProvider } from './context/Cart'
import { ContextFiltersProvider } from './context/Filters'

function App () {
  return (
    <>
      <ContextCartProvider>
        <ContextFiltersProvider>
          <ProviderAuthContext>
            <AppRoutes />
          </ProviderAuthContext>
        </ContextFiltersProvider>
      </ContextCartProvider>
    </>
  )
}

export default App
