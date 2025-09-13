import { useContext } from 'react'
import { BagShop } from '../icons/icons'
import { ContextCart } from '../../context/Cart'

export function BtnCart ({ color, size }) {
  const { handleShowCart, cart } = useContext(ContextCart)
  return (
    <button onClick={handleShowCart} className='fixed bottom-5 right-3 z-2 cursor-pointer filter drop-shadow-lg drop-shadow-black/70' >
      <BagShop color={color} size={size} />
      <div className='absolute w-[15px] h-[15px] bg-white top-[-6px] left-[-5px] rounded-full flex justify-center items-center'><span className='text-center text-[10px] text-[#FD70A7] font-bold'>{cart.length}</span></div>
    </button>
  )
}
