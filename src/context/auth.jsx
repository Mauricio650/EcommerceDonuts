import { useEffect, useState, createContext } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

export const authContext = createContext()
const API_URL = import.meta.env.VITE_API_URL_LOCAL

export function ProviderAuthContext ({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true) // opcional, por si quieres mostrar spinner mientras
      try {
        const response = await fetch(`${API_URL}validateToken`, {
          credentials: 'include'
        })

        if (response.status === 200 || response.status === 304) {
          const json = await response.json()
          navigate(location.pathname)
          setUser(json) // usuario válido
        } else if (response.status === 401) {
          setUser(null) // opcional
          navigate('/login') // solo navegas si realmente no hay sesión
        } else {
          console.error('Unexpected response status', response.status)
        }
      } catch (error) {
        console.error(`Internal server error: ${error.message}`)
        alert(`Internal server error: ${error.message}`)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = async ({ formData }) => {
    try {
      const response = await fetch(`${API_URL}login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        const json = await response.json()
        setUser(json)
        navigate('/adminPage')
      } else if (response.status === 422) {
        alert('Invalid credentials')
      }else if (response.status === 400) {
        alert('User or Password is wrong')
      }
    } catch (error) {
      console.error('Internal server error:', error)
      alert('Internal server error')
    } finally {
      setLoading(false)
    }
  }

  const logOut = async () => {
    const response = await fetch(`${API_URL}logOut`, {
      method: 'POST',
      credentials: 'include'
    })

    if (response.ok) {
      navigate('/')
      alert('Log out successfully')
    }
  }

  return (
    <authContext.Provider
      value={{ user, loading, login, logOut }}
    >
      {children}
    </authContext.Provider>
  )
}
