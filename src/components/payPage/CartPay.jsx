import { useCart } from '../../hooks/useCart'
import { CardForCart } from '../cart/cardForCart'
import { TotalPrice } from '../cart/TotalPrice'
import { TrashEmpty } from '../icons/icons'

export function CartPay () {
  const { cart } = useCart()
  return (
    <article className='w-full bg-[#CC87A2] rounded-t-2xl shadow-xl p-2  h-full flex flex-col justify-between items-center'>
      <div className='w-full max-h-[230px] overflow-y-auto p-1 sm:p-5 grid grid-cols-1 gap-4'>
        {cart.length > 0 ? cart.map(p => <CardForCart key={p.id} {...p} />) : <div className='w-full flex justify-center items-center text-white'><TrashEmpty /></div>}
      </div>
      <TotalPrice />
    </article>
  )
}
