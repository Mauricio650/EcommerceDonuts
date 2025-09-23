import { useGetProduct } from "./useGetProducts"
import { useState } from "react"

export function useHandleModalUpdateForm () {
    const [showModalUpdate, setShowModalUpdate] = useState({ show: false, item: null })
    const { products } = useGetProduct()

    const handleModalUpdate = (e) => {
    if (showModalUpdate.show === false) {
      const data = products.filter(p => p.id == e.currentTarget.dataset.id)
      setShowModalUpdate(p => ({ ...p, show: !p.show, item: data[0] }))
      return
    }
    setShowModalUpdate(p => ({ ...p, show: !p.show }))
  }

  return {showModalUpdate, handleModalUpdate}
}