import { EmailIcon, PhoneIcon, AddressIcon } from '../icons/icons'

export function ContactInformation () {
  return (
    <div className='space-grotesk flex flex-col justify-center p-2 bg-[#FFFFFF] rounded shadow'>
      <div className='w-full py-3'>
        <h2 className='text-sm sm:text-xl'>Información de contacto</h2>
      </div>
      <div className='w-full flex'>
        <div className='w-[98%] h-[1px] bg-[#FEE5EE]' />
      </div>

      <div className='w-full flex flex-col lg:flex-row py-2 '>
        <div className='flex w-1/2 '>
          <div className='flex justify-center sm:p-2'>
            <PhoneIcon />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='font-bold'>Celular</p>
            <span className='text-xs text-gray-700'>3001234567</span>
          </div>
        </div>

        <div className='flex w-1/2 '>
          <div className='flex justify-center sm:p-2'>
            <AddressIcon />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='font-bold'>Dirección</p>
            <span className='text-xs text-gray-700'>Cl.51 cr45</span>
          </div>
        </div>

      </div>

      <div className='flex w-1/2 '>
        <div className='flex justify-center sm:p-2'>
          <EmailIcon />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='font-bold'>Correo</p>
          <span className='text-xs text-gray-700'>test@test.com</span>
        </div>
      </div>

    </div>
  )
}
