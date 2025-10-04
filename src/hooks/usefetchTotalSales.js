import { useState, useEffect } from 'react'

export function useFetchTotalSales () {
  const [totalSales, setTotalSales] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}sales/totalCurrentMonth`, {
          method: 'GET',
          credentials: 'include'
        })

        if (response.ok) {
          const json = await response.json()
          setTotalSales(json)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchTotalSales()
  }, [])

  return { loading, totalSales }
}
