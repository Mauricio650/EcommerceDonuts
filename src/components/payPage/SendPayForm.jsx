import { successToast } from '../../toast/toast'
import { useCart } from '../../hooks/useCart'

export function PayForm () {
  const { cart } = useCart()

  const dataEmail = cart.map((p) => `Producto: ${p.name} - Precio: ${p.price} - Cantidad: ${p.quantity} - Tipo: ${p.type} `).join()

  const API_URL = import.meta.env.VITE_API_URL_LOCAL
  const handleSubmitFormPage = async (e) => {
    e.preventDefault()

    const dataDb = cart.map((p) => ([p.name, Number(p.price), p.type, p.quantity]))
    console.log(dataDb)

    const response = await fetch(`${API_URL}sales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sale: dataDb })
    })

    if (response.ok) {
      successToast({ text: 'Compra realizada, Validaremos tu pago y nos pondremos en contacto contigo' })
    }
    e.target.submit()
  }

  return (
    <div className='space-grotesk w-full  p-1 sm:p-2 h-full shadow-xl rounded-b-2xl flex flex-col justify-center bg-[#FFFFFF]'>
      <div className='w-full py-1 sm:py-3'>
        <h2 className='text-md sm:text-xl'>Envianos tus datos y # de comprobante o referencia</h2>
      </div>
      <div className='w-full flex'>
        <div className='w-[98%] h-[1px] bg-[#FEE5EE]' />
      </div>
      <form onSubmit={handleSubmitFormPage} action='https://formsubmit.co/mauricioibanez650@gmail.com' method='POST' className='w-full flex flex-col py-3 justify-start items-start gap-3 '>
        <input type='hidden' name='_subject' value='Nuevo pedido -- homerDonuts 🚀' />

        <input type='hidden' name='Compra' value={dataEmail} />

        <input type='hidden' name='_captcha' value='false' />

        <input type='hidden' name='_next' value='http://localhost:5173/home' />

        <div className='w-full flex flex-col xl:flex-row justify-center items-center gap-3'>
          <div className='flex flex-col w-full gap-2'>
            <label className='font-bold text-xs' htmlFor='222'>Nombre</label>
            <input required type='text' name='name' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='222' />
          </div>

          <div className='flex flex-col w-full gap-2'>
            <label className='font-bold text-xs' htmlFor='221'>Número de celular</label>
            <input required type='number' name='phoneNumber' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='221' />
          </div>

        </div>

        <div className='w-full flex flex-col xl:flex-row justify-center items-center gap-3'>
          <div className='flex flex-col w-full gap-2'>
            <label className='font-bold text-xs' htmlFor='222'>Correo</label>
            <input required type='text' name='email' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='222' />
          </div>

          <div className='flex flex-col w-full gap-2'>
            <label className='font-bold text-xs' htmlFor='221'>Referencia o # de pago</label>
            <input required type='text' name='referencia' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='221' />
          </div>

        </div>

        <div className='flex flex-col w-full gap-2'>
          <label className='font-bold text-xs' htmlFor='221'>Dirección del domicilio</label>
          <input required type='text' name='address' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' id='221' />
        </div>

        <button className='bg-[#FC70A6] shadow-xl hover:bg-[#aa0b48] cursor-pointer rounded-2xl p-1 px-3 text-white'>Enviar Mensaje</button>

      </form>
    </div>
  )
}
