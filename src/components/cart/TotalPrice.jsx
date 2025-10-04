import { useContext } from 'react'
import { ContextCart } from '../../context/Cart'
import { NavLink, useLocation } from 'react-router-dom'

export function TotalPrice () {
  const { cart } = useContext(ContextCart)
  const location = useLocation()

  const totalPrice = cart.reduce((acc, cv) => {
    acc.total += (cv.price * cv.quantity)
    return acc
  }, { total: 0 })
  return (
    <article className='dancing-script gap-1 w-full p-1 sm:p-3 flex flex-col shadow-lg shadow-black/30 justify-center items-center bg-[#CC87A2] rounded'>
      <div className='flex justify-center items-center gap-2 sm:gap-3'>
        <h1 className='text-xl text-shadow-xs text-shadow-black text-white'>Total price</h1>
        <span className='text-xl md:text-2xl font-bold text-shadow-2xs text-shadow-white text-green-600'>{totalPrice.total.toLocaleString('es-CO')} $</span>
      </div>

      {location.pathname !== '/payProducts' &&
        <NavLink to='/payProducts'>
          <button className='cursor-pointer py-1 ring-1 ring-white hover:scale-110 text-shadow-xs text-shadow-black space-grotesk px-5 bg-[#FD70A7] rounded-2xl text-[#ffff]'>
            ir a pagar
          </button>
        </NavLink>}

    </article>
  )
}
