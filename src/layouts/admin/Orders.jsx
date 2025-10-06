import { CardOrder } from '../../components/admin/CardOrder'
import { useOrders } from '../../hooks/useOrders'

export function Orders () {
    const {orders} = useOrders()
    console.log(orders)
    /* const ordersCopy = [...orders] */ /* this copy is for change the order status with out reload the request */
  return (
    <section className='h-full w-full py-2'>
      <section className='w-full gap-5  overflow-y-auto-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] justify-items-center'>

        {orders.map(p => {
            return <CardOrder key={p.id} statusOrder={p.statusOrder} 
                orders={p.orders} name={p.name} phone={p.phone} 
                email={p.email} address={p.address} payReference={p.payReference}></CardOrder>
            
        })}
       

        
      </section>
    </section>
  )
}
