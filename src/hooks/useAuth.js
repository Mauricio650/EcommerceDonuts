import { useContext } from 'react'
import { authContext } from '../context/Auth.jsx'

export function useAuth () {
  return useContext(authContext)
}
