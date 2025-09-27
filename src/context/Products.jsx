import { createContext, useEffect, useState } from 'react'

import data from '../mocks/Products.json'

export const ContextProducts = createContext()
const dataJson = data

export function ContextProductsProvider ({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [updateListProducts, setUpdateProducts] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}products`, {
          credentials: 'include'
        })
        const json = await response.json()
        setProducts(json.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [updateListProducts])

  const refreshListProducts = () => {
    setUpdateProducts(p => (!p))
  }
  return (
    <ContextProducts.Provider
      value={{ loading, error, products, refreshListProducts }}
    >
      {children}
    </ContextProducts.Provider>
  )
}
