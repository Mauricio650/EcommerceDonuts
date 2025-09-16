export function PayForm () {
  return (
    <div className='space-grotesk  p-1 sm:p-2 h-full shadow-xl rounded-2xl flex flex-col justify-center bg-[#FFFFFF]'>
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
        <button className='bg-[#FC70A6] shadow-xl hover:bg-[#aa0b48] cursor-pointer rounded-2xl p-1 px-3 text-white'>Enviar Mensaje</button>

      </form>
    </div>
  )
}
