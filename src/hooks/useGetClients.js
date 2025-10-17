import { useState, useEffect } from 'react'
import { errorToast } from '../toast/toast'

export function useGetClients () {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [a, seta] = useState(false)
  const API_URL = import.meta.env.VITE_API_URL_LOCAL

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_URL}sales/clients`, {
          method: 'GET',
          credentials: 'include'
        })

        if (response.ok) {
          const json = await response.json()
          setClients(json.list)
        }
      } catch (error) {
        console.error(error)
        errorToast({ path: 'Interno', text: 'No se pudo obtener la lista de clientes' })
      } finally {
        setLoading(false)
      }
    }

    fetchClients()
  }, [a])

  const uSetA = () => {
    seta(p => (!p))
  }
  return { clients, loading, uSetA }
}
