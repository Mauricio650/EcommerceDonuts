import { useEffect, useState } from 'react'
import data from '../mocks/Products.json'

const dataJson = data
const API_URL = import.meta.env.VITE_API_URL_LOCAL

export function useGetProduct () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${API_URL}products`,{
          credentials:'include'
        })
        const json = await response.json()
        console.log(json)
        setProducts(json.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { loading, error, products }
}
