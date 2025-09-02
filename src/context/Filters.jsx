import { useState, createContext } from 'react'

export const ContextFilters = createContext()

export function ContextFiltersProvider ({ children }) {
  const [filters, setFilters] = useState({ products: 'all', price: 0 })
  const changeFilter = (object) => {
    setFilters({ ...filters, ...object })
  }
  return (
    <ContextFilters.Provider
      value={{ filters, changeFilter }}
    >
      {children}
    </ContextFilters.Provider>
  )
}
