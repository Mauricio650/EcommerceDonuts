import './App.css'
import { AppRoutes } from './AppRoutes'
import { ContextCartProvider } from './context/Cart'
import { ContextFiltersProvider } from './context/Filters'

function App () {
  return (
    <>
      <ContextCartProvider>
        <ContextFiltersProvider>
          <AppRoutes />
        </ContextFiltersProvider>
      </ContextCartProvider>
    </>
  )
}

export default App
