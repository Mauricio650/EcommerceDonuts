import { useId } from "react"

export function FormEmail () {
  const nameID = useId()
  const phoneID = useId()
  const emailID = useId()
  const messageID = useId()
  return (
    <div className='space-grotesk w-1/2 flex flex-col justify-center p-2 bg-[#FFFFFF] rounded shadow'>
      <div className='w-full py-3'>
        <h2 className='text-xl'>Envia un email</h2>
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

        <div className='flex flex-col w-full gap-2'>
          <label className='font-bold text-xs' htmlFor='224'>Correo</label>
          <input type='email' name='email' className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] rounded shadow' />
        </div>
        <input type='hidden' name='_subject' value='New message from homerDonuts 🚀' />
        <label className='font-bold text-xs' htmlFor='226'>Tu mensaje</label>
        <textarea className='bg-[#FEE5EE] ring-[1.2px] ring-[#FD70A7] w-full rounded shadow' name='message' id='22' />
        <button className='bg-[#FC70A6] rounded-2xl p-1 px-3 shadow text-white'>Enviar Mensaje</button>

      </form>
    </div>
  )
}
