import { Qr } from '../components/payPage/Qr'
import { PayForm } from '../components/payPage/SendPayForm'
import { CartPay } from '../components/payPage/CartPay'

export function PayPage () {
  return (
    <section className='w-full p-2 sm:p-10 flex justify-center items-center '>
      <section className=' bg-[#FCAAC8] w-full h-full ring-3 p-2 sm:p-5 ring-white rounded-4xl shadow-2xl shadow-black/70'>
        <section className='relative overflow-hidden w-full h-full bg-[#FECBDE] rounded-4xl shadow-md shadow-black/20'>
          <section className='w-full flex flex-col justify-center items-center p-2 sm:px-20 sm:py-5'>
            <Qr />

            <section className='w-full shadow-lg shadow-black/30 bg-[#F86EA4] p-3 rounded-2xl flex flex-col-reverse sm:flex-row justify-between items-center sm:gap-2 '>
              <PayForm />
              <CartPay />
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}
