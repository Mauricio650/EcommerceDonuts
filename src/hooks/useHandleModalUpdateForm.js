import { useGetProduct } from './useGetProducts'
import { useState } from 'react'
import { toast } from 'sonner'

export function useHandleModalUpdateForm () {
  const [showModalUpdate, setShowModalUpdate] = useState({ show: false, item: null })
  const { products, refreshListProducts } = useGetProduct()

  const handleModalUpdate = (e) => {
    if (showModalUpdate.show === false) {
      const data = products.filter(p => p.id == e.currentTarget.dataset.id)
      setShowModalUpdate(p => ({ ...p, show: !p.show, item: data[0] }))
      return
    }
    setShowModalUpdate(p => ({ ...p, show: !p.show }))
  }

  const handleSubmitForm = async (e, showModalUpdate) => {
    e.preventDefault()
    const data = new FormData(e.target)

    /* decidimos compicarnos usando promise ya que es de la manera en que funciona
    la toast de sonner que muestra un loading bonito */
    const promise = () => new Promise(resolve => {
      resolve(fetch(`${import.meta.env.VITE_API_URL_LOCAL}products/${showModalUpdate.item.id}`, {
        method: 'PATCH',
        credentials: 'include',
        body: data
      })
      /* usamos async en un then para procesar mejor la respuesta del servidor usando await y no tener que usar mas then */
        .then(async (response) => {
          if (response.ok) {
            refreshListProducts()
            toast.success('Producto actualizado', {
              style: {
                background: '#FD70A7',
                color: 'white'
              }
            })
          }
          /* si hay error en lso campos de form */
          if (response.status === 422) {
            const json = await response.json()
            console.log(json)
            toast.error(`Error: ${json.message.path[0]}`, {
              style: {
                background: '#F14445',
                color: 'white'
              },
              description: json.message.message
            })

            /* si no sube imagen */
          } else if (response.status === 500) {
            toast.error('Error: Error interno', {
              style: {
                background: '#F14445',
                color: 'white'
              },
              description: 'Por favor intentalo dentro de 5 minutos'
            })
          }
        })

      )
    })

    /* esta es la toast del loading, se puede responder desde aqui mismo pero para personalizar mas a detalle las toast de error era complicadito */
    toast.promise(promise, {
      loading: 'Actualizando producto...'
    })
  }

  return { showModalUpdate, handleModalUpdate, handleSubmitForm }
}
