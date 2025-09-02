import { useContext } from 'react'
import { ContextCart } from '../context/Cart'
import { TotalPrice } from '../components/cart/TotalPrice'
import { CardForCart } from '../components/cart/cardForCart'
import { TrashEmpty } from '../components/icons/icons'


export function PayPage () {
  const { cart } = useContext(ContextCart)
  console.log(cart)
  return (
    <main>
      <section className='w-full p-2 sm:p-10 flex justify-center items-center '>
        <section className=' bg-[#FCAAC8] w-full h-full ring-3 p-2 sm:p-5 ring-white rounded-4xl shadow-2xl shadow-black/70'>
          <section className='relative overflow-hidden w-full h-full bg-[#FECBDE] rounded-4xl shadow-md shadow-black/20'>
            <section className='w-full flex flex-col justify-center items-center px-10 py-2 sm:px-20 sm:py-5'>
              <article>
                <header>
                  <p className='space-grotesk font-bold text-xs sm:text-md xl:text-lg  text-center stacked-fractions'>Por los momentos para compras por la web solo tenemos este
                    medio de pago, si necesitas pagar de otra manera por favor
                    toma captura a tu carrito de compras y escribemos a nuestro whatsapp y
                    con gusto te ayudaremos.
                  </p>
                  <h1 className='chewy-regular text-purple-800 text-xl  text-center'>QR Nequi 3052665478</h1>
                </header>
                <div className='w-full flex justify-center items-center'>
                  <img className='w-50 rounded-sm filter drop-shadow-sm' src='img/qr.webp' alt='Qr de cuenta nequi de la empresa homer donuts' />
                </div>
              </article>

              <section className='w-full bg-white shadow-2xs p-5 rounded-2xl flex flex-col-reverse sm:flex-row justify-between items-center gap-1 sm:gap-2 '>
                <div className='space-grotesk  p-1 sm:p-2 h-full flex flex-col justify-center bg-[#FFFFFF]'>
                  <div className='w-full py-1 sm:py-3'>
                    <h2 className='text-md sm:text-xl'>Envianos tus datos y # de comprobante o referencia</h2>
                  </div>
                  <div className='w-full flex'>
                    <div className='w-[98%] h-[1px] bg-[#FEE5EE]' />
                  </div>
                  <form action='https://formsubmit.co/mauricioibanez650@gmail.com' method='POST' className='w-full flex flex-col py-3 justify-start items-start gap-3 '>
                    <div className='w-full flex flex-col xl:flex-row justify-center items-center gap-3'>
                      <div className='flex flex-col w-full gap-2'>
                        <label className='font-bold text-xs' htmlFor='222'>Nombre</label>
                        <input type='text' name='name' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='222' />
                      </div>

                      <div className='flex flex-col w-full gap-2'>
                        <label className='font-bold text-xs' htmlFor='221'>Número de celular</label>
                        <input type='number' name='phoneNumber' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='221' />
                      </div>

                    </div>

                    <div className='w-full flex flex-col xl:flex-row justify-center items-center gap-3'>
                      <div className='flex flex-col w-full gap-2'>
                        <label className='font-bold text-xs' htmlFor='222'>Correo</label>
                        <input type='text' name='email' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='222' />
                      </div>

                      <div className='flex flex-col w-full gap-2'>
                        <label className='font-bold text-xs' htmlFor='221'>Referencia o # de pago</label>
                        <input type='text' name='referencia' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='221' />
                      </div>

                    </div>

                    <div className='flex flex-col w-full gap-2'>
                      <label className='font-bold text-xs' htmlFor='221'>Dirección del domicilio</label>
                      <input type='text' name='address' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='221' />
                    </div>

                    <input type='hidden' name='_subject' value='Nuevo pedido -- homerDonuts 🚀' />
                    <button className='bg-[#FC70A6] rounded-2xl p-1 px-3 shadow text-white'>Enviar Mensaje</button>

                  </form>
                </div>
                <article className='min-w-1/2  bg-white  h-full flex flex-col justify-between items-center'>
                  <div className='w-full max-h-[230px] overflow-y-auto p-1 sm:p-5 grid grid-cols-1 gap-4'>
                    {cart.length > 0 ? cart.map(p => <CardForCart {...p} />) : <div className='w-full flex justify-center items-center text-white'><TrashEmpty /></div>}
                  </div>
                  <TotalPrice />
                </article>
              </section>

            </section>
          </section>
        </section>
      </section>
    </main>
  )
}
