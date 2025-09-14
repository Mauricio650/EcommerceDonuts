import { useAuth } from '../../hooks/useAuth'
import { SpinnerLoading } from '../SpinnerLoading'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function ProtectedRoute ({ children }) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true })
    } else {
      setLoading(false)
    }
  }, [navigate, user])

  if (loading) return <SpinnerLoading />

  return children
}
