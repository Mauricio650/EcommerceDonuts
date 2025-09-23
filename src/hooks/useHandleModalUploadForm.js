import { useState } from "react"

export function useHandleModalUploadForm () {
  const [showModalUpload, setShowModalUpload] = useState(false)

   const handleModalUpload = () => {
    setShowModalUpload(p => (!p))
  }

  return {handleModalUpload, showModalUpload}
}