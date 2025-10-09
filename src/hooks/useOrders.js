import { useEffect, useState } from 'react'

import { errorToast, successToast } from '../toast/toast'

const API_URL = import.meta.env.VITE_API_URL_LOCAL

export function useOrders () {
  const [orders, setOrders] = useState([])
  const [refreshOrders, setRefreshOrders] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleClickDeleteOrderStatus = async (e) => {
    try {
      const response = await fetch(`${API_URL}sales/${e.target.dataset.id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      if (response.ok) {
        successToast({ text: 'Pedido borrado' })
      }
    } catch (error) {
      console.log(error)
      errorToast({ path: 'error interno', message: 'no se pudo borrar el pedido' })
    } finally {
      setRefreshOrders(p => (!p))
    }
  }

  const handleClickUpdateOrderStatus = async (e) => {
    const id = e.target.dataset.id
    const newOrders = [...orders].map(p => {
      console.log(p)
      if (p.id == id) {
        p.statusOrder = 'delivered'
      }
      return p
    })
    setOrders(newOrders)
    try {
      const response = await fetch(`${API_URL}sales/clients/orders/${e.target.dataset.id}`, {
        method: 'PATCH',
        credentials: 'include'
      })
      if (response.ok) {
        successToast({ text: 'Pedido actualizado, en un minuto se quitara de la lista de pendientes' })
      }
    } catch (error) {
      console.log(error)
      errorToast({ path: 'error interno', message: 'no se pudo actualizar el pedido' })
    }
  }

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}sales/clients/orders`, {
        method: 'GET',
        credentials: 'include'
      })
      if (response.ok) {
        const json = await response.json()
        setOrders(json.message)
      }
    } catch (error) {
      console.log(error)
      errorToast({ path: 'error interno', message: 'no se pudo obtener las ordenes del servidor' })
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchOrders()

    const intervalID = setInterval(fetchOrders, 60000)

    return () => {
      clearInterval(intervalID)
    }
  }, [refreshOrders])

  return { orders, loading, refreshOrders, handleClickUpdateOrderStatus, handleClickDeleteOrderStatus }
}
