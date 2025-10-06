import { DollarOrder, EmailOrder, HomeOrder, PhoneOrder, UserOrder } from "../icons/icons"

export function CardOrder ({statusOrder,orders = [],name, phone,email, address, payReference}) {
    return (
     <article className='bg-pink-50/70 md:p-5 p-2 w-[300px] md:w-[500px] ring-2 ring-[#FD70A7] gap-5 rounded-md flex flex-col'>
          <div className='w-full flex justify-between'>
            <div className={`md:p-2 p-1 ${statusOrder === 'pending' ? 'bg-amber-100/80 ring-1 ring-amber-400 text-amber-600 font-bold' : 'bg-green-300 ring-1 ring-green-400 text-green-700'} font-bold  bg-amber-100/80 ring-1 ring-amber-400 rounded-full shadow-xs shadow-black/30`}><p>{statusOrder === 'pending' ? 'Pendiente': 'Despachado'}</p></div>

            <div className='flex gap-3'>
              <button className='md:p-2 p-1  cursor-pointer bg-red-100/80 ring-1 ring-red-400 rounded-xs text-red-600 font-bold hover:text-white hover:bg-red-800 shadow-xs shadow-black/30'>Eliminar</button>
              <button className='md:p-2 p-1  cursor-pointer bg-green-100/80 ring-1 ring-green-400 rounded-xs text-green-600 font-bold hover:text-white hover:bg-green-800 shadow-xs shadow-black/30'>Despachar</button>
            </div>
          </div>

          <div className='bg-[#FBC9DB]/20 max-h-[300px] ring-1 ring-[#DEB1C2] rounded-xs shadow-xs shadow-black/30 px-2 overflow-auto'>
            <table className='w-full '>
              <thead className='text-[#FD70A7]'>
                <tr className='p-3'>
                  <th className='p-3 text-left'>Producto</th>
                  <th className='p-3'>U</th>
                  <th className='p-3'>C/U</th>
                  <th className='p-3'>Total</th>
                </tr>
              </thead>
              <tbody className='  overflow-auto'>
                {orders.map(o => {
                    const total = Number(o.price) * o.quantity
                    return <tr className='p-3 text-center font-bold'>
                  <td className='p-3 text-left md:max-w-[250px] break-words'>{o.product}</td>
                  <td className='p-3 md:max-w-[250px] break-words'>{o.quantity}</td>
                  <td className='p-3 md:max-w-[250px] break-words'>{o.price.toLocaleString('es-CO')}</td>
                  <td className='p-3 md:max-w-[250px] break-words'>{total.toLocaleString('es-CO')}</td>
                </tr>
                    
                })}
              </tbody>
              <tfoot className='text-[#FD70A7]'>
                <tr>
                  <th colspan='3' class='text-right p-3 md:max-w-[250px] break-words'>Valor de la compra</th>
                  <th class=' p-3 md:max-w-[250px] text-center break-words'>$150.000</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className='bg-[#FBC9DB]/20 ring-1 h-full max-h-[400px] ring-[#DEB1C2] rounded-xs shadow-xs shadow-black/30 px-2 overflow-auto'>
            <div className='p-2'>
              <p className='text-[#FD70A7] font-bold mb-2'>Detalles del envio</p>
              <div className='h-[0.5px] bg-[#FD70A7]/30' />
            </div>
            <ul>
              <li className='p-3 flex items-center md:max-w-[300px] gap-2  break-words'>
                <div className='text-[#FD70A7]'>
                  <UserOrder size={18} />
                </div>
                {name}
              </li>
              <li className='p-3 flex items-center md:max-w-[300px] gap-2 break-words'>
                <div
                  className='text-[#FD70A7]'
                >
                  <PhoneOrder size={18} />
                </div>
                {phone}
              </li>
              <li className='p-3 flex items-center md:max-w-[300px] gap-2 break-words'>
                <div className='text-[#FD70A7]'>
                  <EmailOrder size={18} />
                </div>
                {email}
              </li>
              <li className='p-3 flex items-center md:max-w-[300px] gap-2 break-words'>
                <div className='text-[#FD70A7]'>
                  <HomeOrder size={18} />
                </div>
                {address}
              </li>
              <li className='p-3 flex items-center md:max-w-[300px] gap-2 break-words'>
                <div className='text-[#FD70A7]'>
                  <DollarOrder size={18} />
                </div>
                {payReference}
              </li>
            </ul>
          </div>
        </article>
    )
}