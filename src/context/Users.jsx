import { createContext } from "react";
import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL_LOCAL

export const ContextUser = createContext()

export function ProviderUserContext ({children}) {
    const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(false)
  const [refreshList, setRefreshList] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_URL}user/userList`, {
          credentials: 'include'
        })

        if (response.ok) {
          const json = await response.json()
          setUserList(json.message)
        }
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [refreshList])

  const handleRefreshList = () => {
    setRefreshList(p => (!p))
  }
    return (
        <ContextUser.Provider
        value={{ userList, loading, handleRefreshList }}
        >
            {children}
        </ContextUser.Provider>
    )
}