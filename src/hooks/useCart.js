import { useContext } from 'react'
import { ContextCart } from '../context/Cart'

export function useCart () {
  return useContext(ContextCart)
}
