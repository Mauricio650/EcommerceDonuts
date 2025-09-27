import { toast } from 'sonner'
import { useGetProduct } from './useGetProducts'
export function useDeleteProduct () {
  const { refreshListProducts } = useGetProduct()
  const handleClickDelete = async (e) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}products/${e.currentTarget.dataset.id}`, {
      method: 'DELETE',
      credentials: 'include'
    })

    if (response.ok) {
      refreshListProducts()
      toast.success('Producto eliminado', {
        style: {
          background: '#FD70A7',
          color: 'white'
        }
      })
    } else {
      toast.error('Hubo un error eliminando la factura', {
        style: {
          background: '#F14445',
          color: 'white'
        }
      })
    }
  }
  return { handleClickDelete }
}
