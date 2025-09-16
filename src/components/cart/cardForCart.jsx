import { useContext } from 'react'
import { MinusIcon2, PlusIcon2 } from '../icons/icons'
import { ContextCart } from '../../context/Cart'

export function CardForCart ({ url_img, name, price, id, quantity }) {
  const { addQuantity, minusQuantity } = useContext(ContextCart)
  return (
    <article data-id={id} className='overflow-hidden space-grotesk flex w-full h-[100px] justify-between items-center rounded shadow-md shadow-black/50 bg-white p-2'>
      <div className='w-[100px] overflow-hidden'>
        <img className='w-[100px]' src={url_img} alt={`image of ${name}`} />
      </div>
      <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-center text-shadow-xs text-shadow-black'>{name}</h1>
        <span className='text-gray-500 font-bold text-shadow-xs text-shadow-black'>{Number(price).toLocaleString('es-CO')}</span>
      </div>
      <div className='h-full w-[50px] sm:w-[100px] flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4 bg-[#FEE5EE]'>
        <button className='cursor-pointer' onClick={() => minusQuantity(id)}><MinusIcon2 /></button>
        <span className='font-bold text-shadow-xs text-shadow-black'>{quantity}</span>
        <button className='cursor-pointer' onClick={() => addQuantity(id)}><PlusIcon2 /></button>
      </div>
    </article>
  )
}
