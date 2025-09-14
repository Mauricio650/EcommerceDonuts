import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const authContext = createContext()
const API_URL = import.meta.env.VITE_API_URL_LOCAL

export function ProviderAuthContext ({ children }) {
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const login = async ({formData}) => {
    setLoading(true)
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            body: formData
        })

        if(response.ok) {
            const json = await response.json()
            setUser(json)
            navigate('/adminPage')
        }else if (response.status === 422) {
            alert('Invalid credentials')
        }
    } catch (error) {
        console.error('Internal server error:', error);
        alert('Internal server error');
    } finally {
        setLoading(false)
    }
  }

  return (
    <authContext.Provider
      value={{ user,loading,login }}
    >
      {children}
    </authContext.Provider>
  )
}
