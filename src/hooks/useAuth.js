import { useContext } from 'react'
import { authContext } from '../context/auth.jsx'

export function useAuth () {
  return useContext(authContext)
}
