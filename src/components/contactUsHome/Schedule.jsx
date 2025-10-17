export function Schedule () {
  return (
    <div className='space-grotesk flex flex-col justify-center p-2 bg-[#FFFFFF] rounded shadow-lg shadow-black/30'>
      <div className='w-full py-3'>
        <p className='text-md md:text-xl text-shadow-xs text-shadow-black'>Horario</p>
      </div>
      <div className='w-full flex'>
        <div className='w-[98%] h-[1px] bg-[#FEE5EE]' />
      </div>
      <div className='flex flex-col lg:flex-row w-full justify-between items-center md:pt-15'>
        <div className='flex flex-col justify-center items-center'><p className='font-bold text-sm sm:text-md'>Lunes - Domingos (Horario domicilios)</p> <span className=' text-gray-700'>8am - 7pm</span></div>
        <div className='flex flex-col justify-center items-center'><p className='font-bold text-sm sm:text-md'>Sabados - Domingos (Horario puntos fisicos)</p> <span className=' text-gray-700'>5pm - 7pm</span></div>
      </div>
    </div>
  )
}
