import { useEffect } from "react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL_LOCAL

export function useOrders () {
    const [orders, setOrders] = useState([])
    const [refreshOrders, setRefreshOrders] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchOrders = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${API_URL}sales/clients/orders`,{
                    method: 'GET',
                    credentials: 'include'
                })
                if(response.ok) {
                    const json = await response.json()
                    setOrders(json.message)
                }
            } catch (error) {
                alert('no se pudo obtener las ordenes del servidor')
            }finally {
                setLoading(false)
            }
        }

        fetchOrders()
    },[refreshOrders])

    return {orders, loading, refreshOrders}
}