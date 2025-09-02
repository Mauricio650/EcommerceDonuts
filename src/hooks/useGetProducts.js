import { useEffect, useState } from 'react'
import data from '../mocks/Products.json'

const dataJson = data

export function useGetProduct () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setProducts(dataJson)
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
