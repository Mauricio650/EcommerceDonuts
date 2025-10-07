import { CardOrder } from '../../components/admin/CardOrder'
import { useOrders } from '../../hooks/useOrders'
import {SpinnerLoading} from '../../components/SpinnerLoading'

export function Orders () {
    const {orders,loading,handleClickUpdateOrderStatus,handleClickDeleteOrderStatus} = useOrders()
    const ordersCopy = [...orders] /* this copy is for change the order status with out reload the request */
  return (
    <section className='h-full w-full py-2'>
        
      <section className='w-full gap-5  overflow-y-auto-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] justify-items-center'>


        {loading ? <SpinnerLoading/> : ordersCopy.map(p => {
            return <CardOrder key={p.id} statusOrder={p.statusOrder}
              handleClickUpdateOrderStatus={handleClickUpdateOrderStatus}
              handleClickDeleteOrderStatus={handleClickDeleteOrderStatus} 
                orders={p.orders} name={p.name} phone={p.phone} id={p.id}
                email={p.email} address={p.address} payReference={p.payReference}></CardOrder>
            
        })}
       

        
      </section>
    </section>
  )
}
