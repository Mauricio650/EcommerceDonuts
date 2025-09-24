import { useHandleModalUpdateForm } from '../../hooks/useHandleModalUpdateForm'
import { CloseIcon } from '../icons/icons'

export function UpdateForm ({ showModalUpdate, handleModalUpdate }) {
 const {handleSubmitForm} = useHandleModalUpdateForm()
  

  return (
    <section role='modal' className={`${showModalUpdate.show ? 'flex' : 'hidden'} filter backdrop-blur-sm   absolute  top-0 z-1  w-full h-full justify-center items-center`}>
      <button onClick={handleModalUpdate} className='w-[30px] cursor-pointer h-[30px] flex justify-center items-center  absolute top-0 left-0 z-10'><CloseIcon /></button>
      <form onSubmit={(e) => handleSubmitForm(e,showModalUpdate)} className='bg-[#FD70A7] relative rounded-2xl gap-2 shadow-2xl flex flex-col justify-center items-center py-5 w-[500px]' encType='multipart/form-data'>

        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor=''>Nombre</label>
          <input required defaultValue={showModalUpdate.item?.name} name='name' className='bg-white  text-black p-1 rounded min-w-[100px]' type='text' />
        </div>

        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor=''>Precio</label>
          <input required defaultValue={showModalUpdate.item?.price} name='price' className='bg-white text-black p-1 rounded min-w-[100px]' type='number' />
        </div>
        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor=''>Unidades</label>
          <input required defaultValue={showModalUpdate.item?.units} name='units' className='bg-white text-black p-1 rounded min-w-[100px]' type='number' />
        </div>
        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor=''>Toppings</label>
          <textarea required defaultValue={showModalUpdate.item?.toppings} name='toppings' className='bg-white text-black p-1 rounded min-w-[200px]' type='text' />
        </div>
        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor=''>Tipo</label>
          <select defaultValue={showModalUpdate.item?.type} name='type' className='bg-white cursor-pointer text-black p-1 rounded min-w-[100px]'>
            <option value='donut'>Donut</option>
            <option value='strawberriesAndCream'>Fresa con crema</option>
          </select>
        </div>
        <div className='space-grotesk text-white  text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor=''>imagen</label>
          <input name='image' className='bg-white cursor-pointer max-w-[200px] text-black p-1 rounded' type='file' accept='image/png, image/jpeg, image/webp' />
        </div>

        <aside>
          <button className='p-2 transition-all duration-100 ease-in-out hover:text-[#FD70A7] text-shadow-black text-shadow-xs px-5 cursor-pointer rounded-lg ring-2 ring-white hover:scale-105 shadow-2xl hover:ring-[#FECBDE] hover:bg-white bg-[#FECBDE]'>Actualizar</button>
        </aside>
      </form>
    </section>
  )
}
