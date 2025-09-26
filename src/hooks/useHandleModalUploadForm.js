import { useState } from 'react'
import { toast } from 'sonner'
import { useGetProduct } from './useGetProducts'

export function useHandleModalUploadForm () {
  const [showModalUpload, setShowModalUpload] = useState(false)
  const {refreshListProducts } = useGetProduct()

  const handleModalUpload = () => {
    setShowModalUpload(p => (!p))
  }


  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    /* decidimos compicarnos usando promise ya que es de la manera en que funciona
    la toast de sonner que muestra un loading bonito */
    const promise = () => new Promise((resolve) => {
      resolve(fetch(`${import.meta.env.VITE_API_URL_LOCAL}products`, {
        method: 'POST',
        credentials: 'include',
        body: data
      })
      /* usamos async en un then para procesar mejor la respuesta del servidor usando await y no tener que usar mas then */
        .then(async (response) => {
          if (response.ok) {
            refreshListProducts()
            toast.success('nuevo producto agregado', {
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
          } else if (response.status === 400) {
            toast.error('Error: No se reconoce la imagen', {
              style: {
                background: '#F14445',
                color: 'white'
              },
              description: 'Por favor selecciona una imagen'
            })
            /* internal server error crack */
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
      loading: 'Creando producto...'
    })
  }

  return { handleModalUpload, showModalUpload, handleSubmitForm }
}
