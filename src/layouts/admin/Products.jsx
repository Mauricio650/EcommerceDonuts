import { PlusIcon } from '../../components/icons/icons'
import { useGetProduct } from '../../hooks/useGetProducts'
import { SpinnerLoading } from '../../components/SpinnerLoading'
import { CardItems } from '../../components/admin/CardItems'
import { UpdateForm } from '../../components/admin/UpdateForm'
import { UploadForm } from '../../components/admin/UploadForm'
import { useHandleModalUpdateForm } from '../../hooks/useHandleModalUpdateForm'
import { useHandleModalUploadForm } from '../../hooks/useHandleModalUploadForm'

export function Products () {
  const { products, loading, error } = useGetProduct()
  const { showModalUpdate, handleModalUpdate } = useHandleModalUpdateForm()
  const { showModalUpload, handleModalUpload } = useHandleModalUploadForm()

  return (
    <>

      <section className='w-full relative h-full flex flex-col'>

        <div className='w-full relative top-0'>
          <div onClick={handleModalUpload} className='absolute right-0 top-0 cursor-pointer hover:scale-75 filter drop-shadow-2xl drop-shadow-black'>
            <PlusIcon />
          </div>
        </div>

        <UploadForm showModalUpload={showModalUpload} handleModalUpload={handleModalUpload} />

        <UpdateForm showModalUpdate={showModalUpdate} handleModalUpdate={handleModalUpdate} />

        <section className='container-grid w-full max-h-[800px] sm:h-full mt-8 overflow-y-auto p-5'>
          {loading && <SpinnerLoading />}
          {error && console.error(error)}
          {products.map(p => {
            return <CardItems key={p.id} {...p} handleModal={handleModalUpdate} />
          })}
        </section>
      </section>
    </>

  )
}
