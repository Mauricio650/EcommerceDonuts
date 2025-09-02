import { useContext } from 'react'
import { CloseIcon, TrashEmpty } from '../icons/icons'
import { ContextCart } from '../../context/Cart'
import { CardForCart } from './cardForCart'
import { TotalPrice } from './TotalPrice'

export function Cart () {
  const { showCart, handleCloseCart, cart } = useContext(ContextCart)

  return (
    <section className={`
            z-3 h-screen flex flex-col items-center overflow-hidden
            fixed right-0 top-0 bg-[#FEE5EE] 
            transition-all duration-1000 ease-in-out 
            ${showCart ? 'w-[250px] sm:w-[350px] xl:w-[500px] gap-5 py-8 sm:p-5 sm:py-8' : 'w-0'}
          `}
    >
      <div className='w-full max-h-[600px] overflow-y-auto p-1 sm:p-5 grid grid-cols-1 gap-4 bg-[#cc87a2] rounded shadow'>
        {cart.length > 0 ? cart.map(p => <CardForCart {...p} />) : <div className='w-full flex justify-center items-center text-white'><TrashEmpty /></div>}
      </div>
      <TotalPrice />
      <button onClick={handleCloseCart} className='w-[30px] cursor-pointer h-[30px] flex justify-center items-center  absolute top-0 left-0 z-10'><CloseIcon /></button>
    </section>
  )
}
