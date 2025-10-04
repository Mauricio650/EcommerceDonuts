import { toast } from 'sonner'
import { validatePartialSchemaUser } from '../schemas/userSchema'
import { useAuth } from './useAuth'
import { errorToast, successToast } from '../toast/toast'
import { useGetUsers } from './useGetUsers'

export function useRequestUsers () {
  const URL = import.meta.env.VITE_API_URL_LOCAL
  const { handleRefreshList } = useGetUsers()

  const { login } = useAuth()

  const handleDeleteUser = async (e) => {
    const id = e.currentTarget.dataset.id

    const response = await fetch(`${URL}user/deleteUser/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })

    if (response.ok) {
      successToast({ text: 'Usuario eliminado' })
      handleRefreshList()
    }
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())
    const result = validatePartialSchemaUser(formData)
    if (!result.success) {
      const errors = {}
      result.error.issues.forEach(e => {
        errors.path = e.path
        errors.message = e.message
      })
      toast.error(`Error: ${errors.path}`, {
        style: {
          background: '#F14445',
          color: 'white'
        },
        description: errors.message
      })
      return
    }
    await login({ formData: result.data })
  }

  const handleRegisterUser = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    console.log(formData)
    const result = validatePartialSchemaUser(formData)

    if (!result.success) {
      const errors = {}
      result.error.issues.forEach(e => {
        errors.path = e.path
        errors.message = e.message
      })
      errorToast({ path: errors.path, message: errors.message })
      return
    }

    const response = await fetch(`${URL}user/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result.data)
    })

    if (response.status === 200) {
      successToast({ text: 'Usuario creado' })
      handleRefreshList()
    } else if (response.status === 409) {
      errorToast({ path: 'username', message: 'El usuario ya existe' })
    } else {
      errorToast({ path: 'error en el servidor', message: 'error interno' })
    }
  }

  const handleUpdatePassword = async (e, { id }) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    const result = validatePartialSchemaUser(formData)
    if (!result.success) {
      const errors = {}
      result.error.issues.forEach(e => {
        errors.path = e.path
        errors.message = e.message
      })
      errorToast({ path: errors.path, message: errors.message })
      return
    }

    const response = await fetch(`${URL}user/updatePassword/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(result.data)
    })

    if (response.ok) {
      successToast({ text: 'Contraseña actualizada' })
    }
  }

  return { handleDeleteUser, handleSubmitLogin, handleRegisterUser, handleUpdatePassword }
}
