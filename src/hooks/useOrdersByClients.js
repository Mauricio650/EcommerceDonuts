import { errorToast, successToast } from '../toast/toast'
import { useCart } from './useCart'

export function useOrdersByClients () {
  const { cart } = useCart()
  const API_URL = import.meta.env.VITE_API_URL_LOCAL
  const handleSubmitFormPay = async (e) => {
    e.preventDefault()
    let clientID

    const form = Object.fromEntries(new FormData(e.target))
    const formData = {
      name: form.name,
      phoneNumber: form.phoneNumber,
      email: form.email,
      address: form.address,
      payReference: form.payReference
    }

    const responseClient = await fetch(`${API_URL}sales/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (responseClient.status === 201) {
      const json = await responseClient.json()
      clientID = json.idClient
    } else if (responseClient.status === 422) {
      const json = await responseClient.json()
      errorToast({ path: json.message.path, message: json.message.message })
      return
    }

    if (!clientID) {
      errorToast({ path: 'error interno', message: 'por favor intentelo mas tarde o comuníquese con nosotros' })
      return
    }

    const dataDb = cart.map((p) => ([p.name, Number(p.price), p.type, p.quantity, clientID]))
    const response = await fetch(`${API_URL}sales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sale: dataDb })
    })

    if (response.ok) {
      successToast({ text: 'Compra realizada, Validaremos tu pago y nos pondremos en contacto contigo' })
    }
    e.target.submit()
    e.target.reset()
  }

  return { handleSubmitFormPay }
}
