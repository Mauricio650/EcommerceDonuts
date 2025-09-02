import { useContext } from 'react'
import { ContextCart } from '../context/Cart'
import { NavLink, useLocation } from 'react-router-dom'

export function TotalPrice () {
  const { cart } = useContext(ContextCart)
  const location = useLocation()

  console.log(location.pathname)
  const totalPrice = cart.reduce((acc, cv) => {
    acc.total += (cv.priceProduct * cv.quantity)
    return acc
  }, { total: 0 })
  return (
    <article className='dancing-script w-full sm:p-3 flex flex-col justify-center items-center bg-white rounded'>
      <div className='flex justify-center items-center gap-1 sm:gap-3'>
        <h1 className='text-xl text-[#FD70A7]'>Total price</h1>
        <span className='text-2xl font-bold text-green-600'>{totalPrice.total} $</span>
      </div>

      {location.pathname !== '/payProducts' &&
        <NavLink to='/payProducts'>
          <button className='cursor-pointer hover:scale-110 space-grotesk p-2 px-5 bg-[#FD70A7] rounded-2xl text-[#ffff]'>
            ir a pagar
          </button>
        </NavLink>}

    </article>
  )
}
