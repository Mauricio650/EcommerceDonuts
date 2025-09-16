import { useContext } from 'react'
import '../css/card.css'
import { AddIcon, MinusIcon, PlusIcon } from '../icons/icons'
import { ContextCart } from '../../context/Cart'

export function CardProduct ({ id, name, price, units, toppings, url_img }) {
  const { cart, addQuantity, minusQuantity, addToCart } = useContext(ContextCart)

  const indexProduct = [...cart].findIndex((p) => p.id === id)
  return (
    <article data-id={id} className='card relative w-[200px] h-[400px] bg-[#FFFFFF] flex flex-col justify-between items-center rounded shadow-2xl shadow-black/40 p-2'>
      <div className='w-full overflow-hidden h-[100px]  flex justify-center items-center'>
        <img src={url_img} className='w-[200px] filter drop-shadow-md drop-shadow-black/30' alt={`image of ${name}`} />
      </div>

      <div className='space-grotesk text-center'>
        <h1 className='text-xl text-shadow-xs text-shadow-black/50'>{name}</h1>
        <span className='text-md text-shadow-xs text-shadow-black/50 text-[#FD70A7]'>{toppings}</span>
        <span className='text-md text-shadow-xs text-shadow-black text-gray-400 block'>{units} un</span>
      </div>
      <h2 className='text-2xl text-shadow-xs text-shadow-black text-[#FD70A7] space-grotesk font-bold'>{Number(price).toLocaleString('es-CO')} $</h2>
      <aside className='card-container-btn flex justify-evenly p-1 items-end bg-[#FCAAC8]/30 w-[90%] h-[60px] relative rounded'>
        {indexProduct >= 0 && <button className='cursor-pointer hover:scale-110' onClick={() => minusQuantity(id)}><MinusIcon /></button>}

        {indexProduct >= 0 ? <span className='text-2xl'>{[...cart][indexProduct].quantity}</span> : <button onClick={() => addToCart({ id, name, price, quantity: 1, url_img })} className='cursor-pointer hover:scale-110'><PlusIcon /></button>}

        {indexProduct >= 0 && <button className='cursor-pointer hover:scale-110' onClick={() => addQuantity(id)}><AddIcon /></button>}

      </aside>
    </article>
  )
}
