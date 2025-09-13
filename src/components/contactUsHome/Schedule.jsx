export function Schedule () {
  return (
    <div className='space-grotesk flex flex-col justify-center p-2 bg-[#FFFFFF] rounded shadow-lg shadow-black/30'>
      <div className='w-full py-3'>
        <h2 className='text-md sm:text-xl text-shadow-xs text-shadow-black'>Horario</h2>
      </div>
      <div className='w-full flex'>
        <div className='w-[98%] h-[1px] bg-[#FEE5EE]' />
      </div>
      <div className='flex flex-col lg:flex-row w-full justify-between items-center sm:pt-15'>
        <div className='flex flex-col justify-center items-center'><p className='font-bold text-sm sm:text-md'>Lunes - Viernes</p> <span className='text-xs text-gray-700'>8am - 6pm</span></div>
        <div className='flex flex-col justify-center items-center'><p className='font-bold text-sm sm:text-md'>Sabados</p> <span className='text-xs text-gray-700'>9am - 5pm</span></div>
        <div className='flex flex-col justify-center items-center'><p className='font-bold text-sm sm:text-md'>Domingos</p> <span className='text-xs text-gray-700'>11am - 4pm</span></div>
      </div>
    </div>
  )
}
