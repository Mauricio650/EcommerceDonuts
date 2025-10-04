import { useEffect, useState, createContext } from 'react'

export const ContextCart = createContext()

export function ContextCartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem('products')

    const products = cartLocalStorage ? JSON.parse(cartLocalStorage) : []
    setCart(products)
  }, [])

  const handleShowCart = () => {
    setShowCart(true)
  }

  const handleCloseCart = () => {
    setShowCart(false)
  }

  const addQuantity = (id) => {
    const newCart = [...cart]
    const index = newCart.findIndex((p) => p.id === id)
    newCart[index].quantity += 1
    localStorage.setItem('products', JSON.stringify(newCart))
    setCart(newCart)
  }

  const minusQuantity = (id) => {
    const newCart = [...cart]
    const index = newCart.findIndex((p) => p.id === id)
    if (newCart[index].quantity === 1) {
      const filterCart = newCart.filter(p => p.id !== newCart[index].id)
      localStorage.setItem('products', JSON.stringify(filterCart))
      setCart(filterCart)
      return
    }
    newCart[index].quantity -= 1
    setCart(newCart)
  }

  const addToCart = ({ id, name, price, type, quantity, url_img }) => {
    const newCart = [...cart]
    newCart.push({ id, name, price, type, quantity, url_img })
    localStorage.setItem('products', JSON.stringify(newCart))
    setCart(newCart)
  }

  const deleteToCart = ({ id }) => {
    const filterCart = [...cart].filter(p => p.id !== id)
    localStorage.setItem('products', JSON.stringify(filterCart))
    setCart(filterCart)
  }

  return (
    <ContextCart.Provider
      value={{ cart, addQuantity, minusQuantity, addToCart, deleteToCart, showCart, handleShowCart, handleCloseCart }}
    >
      {children}
    </ContextCart.Provider>
  )
}
