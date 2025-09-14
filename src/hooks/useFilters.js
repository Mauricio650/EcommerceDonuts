import { useContext } from 'react'
import { ContextFilters } from '../context/Filters'

export function useFilters () {
  return useContext(ContextFilters)
}
