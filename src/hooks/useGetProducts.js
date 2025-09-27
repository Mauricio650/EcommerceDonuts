import { useContext } from 'react'
import { ContextProducts } from '../context/Products'

export function useGetProduct () {
  return useContext(ContextProducts)
}
