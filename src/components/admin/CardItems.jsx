import { PencilIcon, TrashEmpty, TrashIcon } from '../icons/icons'
import { useDeleteProduct } from '../../hooks/useDeleteProducts'

export function CardItems ({ handleModal, id, name, price, units, toppings, url_img }) {
  const { handleClickDelete } = useDeleteProduct()
  return (
    <article className='card relative w-[200px] h-[400px] bg-[#FFFFFF] flex flex-col justify-between items-center rounded shadow-2xl shadow-black/40 p-2'>
      <div className='w-full overflow-hidden h-[150px]  flex justify-center items-center'>
        <img src={url_img} className='w-[200px] filter drop-shadow-md drop-shadow-black/30' alt={`image of ${name}`} />
      </div>

      <div className='space-grotesk text-center'>
        <p className='text-xl text-shadow-xs text-shadow-black/50'>{name}</p>
        <span className='text-md text-shadow-xs text-shadow-black/50 text-[#FD70A7]'>{toppings}</span>
        <span className='text-md text-shadow-xs text-shadow-black text-gray-400 block'>{units} un</span>
      </div>
      <p className='text-2xl text-shadow-xs text-shadow-black text-[#FD70A7] space-grotesk font-bold'>{Number(price).toLocaleString('es-CO')} $</p>
      <aside className='card-container-btn flex justify-evenly  p-1 items-end bg-[#FCAAC8]/30 w-[90%] min-h-[60px] relative rounded'>
        <div onClick={handleModal} data-id={id} className='hover:scale-105 bg-[#FD70A7] p-2 rounded-full cursor-pointer'>
          <PencilIcon />
        </div>
        <div onClick={handleClickDelete} data-id={id} className='hover:scale-105 bg-[#FD70A7] p-2 rounded-full cursor-pointer'>
          <TrashIcon />
        </div>
      </aside>
    </article>
  )
}
