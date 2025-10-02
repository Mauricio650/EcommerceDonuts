import { useHandleModalUploadForm } from '../../hooks/useHandleModalUploadForm'
import { CloseIcon } from '../icons/icons'
import { useId, useRef } from 'react'

export function UploadForm ({ showModalUpload, handleModalUpload }) {
  const { handleSubmitForm } = useHandleModalUploadForm()
  const imgUREF = useRef(null)
  const NameUID = useId()
  const PriceUID = useId()
  const UnitsUID = useId()
  const ToppingsUID = useId()
  const TypeUID = useId()
  const ImgUID = useId()

  return (
    <section role='modal' className={`${showModalUpload === true ? 'flex' : 'hidden'} filter backdrop-blur-sm   absolute  top-0 z-1  w-full h-full justify-center items-start`}>
      <button onClick={handleModalUpload} className='w-[30px] cursor-pointer h-[30px] flex justify-center items-center  absolute top-0 left-0 z-10'><CloseIcon /></button>

      <form
        onSubmit={async (e) => {
          handleSubmitForm(e)
          imgUREF.current.value = ''
        }} className='bg-[#FD70A7] relative rounded-2xl gap-2 shadow-2xl flex flex-col justify-center items-center mt-10 py-5 w-[500px]' encType='multipart/form-data'
      >

        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={NameUID}>Nombre</label>
          <input required id={NameUID} name='name' className='bg-white  text-black p-1 rounded min-w-[100px]' type='text' />
        </div>

        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={PriceUID}>Precio</label>
          <input required id={PriceUID} name='price' className='bg-white text-black p-1 rounded min-w-[100px]' type='number' />
        </div>
        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={UnitsUID}>Unidades</label>
          <input required id={UnitsUID} name='units' className='bg-white text-black p-1 rounded min-w-[100px]' type='number' />
        </div>
        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={ToppingsUID}>Toppings</label>
          <textarea required id={ToppingsUID} name='toppings' className='bg-white text-black p-1 rounded min-w-[200px]' type='text' />
        </div>
        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={TypeUID}>Tipo</label>
          <select required id={TypeUID} name='type' className='bg-white cursor-pointer text-black p-1 rounded min-w-[100px]'>
            <option value='donut'>Donut</option>
            <option value='strawberriesAndCream'>Fresa con crema</option>
          </select>
        </div>
        <div className='space-grotesk text-white  text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={ImgUID}>imagen</label>
          <input ref={imgUREF} required id={ImgUID} name='image' className='bg-white cursor-pointer max-w-[200px] text-black p-1 rounded' type='file' accept='image/png, image/jpeg, image/webp' />
        </div>

        <aside>
          <button className='p-2 transition-all duration-100 ease-in-out
                         hover:text-[#FD70A7] text-shadow-black text-shadow-xs px-5
                         cursor-pointer rounded-lg ring-2 ring-white hover:scale-105 shadow-2xl
                          hover:ring-[#FECBDE] hover:bg-white bg-[#FECBDE]'
          >
            Agregar
          </button>
        </aside>
      </form>
    </section>
  )
}
