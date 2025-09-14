export function SloganAndTitle () {
  return (
    <article className='relative max-[400px]:top-40 top-50 sm:top-0  flex  flex-col h-full sm:justify-center items-start p-2 gap-2 '>
      <h2 className='text-4xl sm:text-6xl lg:text-4xl xl:text-6xl chewy-regular text-shadow-xs text-shadow-black text-[#FF71A4]'>La vida es mejor con una dona en la mano !!</h2>
      <div className='flex flex-col gap-3 lg:gap-10'>
        <p className='text-md sm:text-2xl space-grotesk text-shadow-xs text-shadow-black text-white'>Te reembolsamos el 10% en tu primera compra online.</p>
        <a href='#menu'><button className='bg-[#FD70A7] text-shadow-xs text-shadow-black hover:bg-[#FCAAC8] hover:text-[#FD70A7] border border-transparent hover:border-white transition-all ease-in duration-100 cursor-pointer space-grotesk xl:text-2xl text-white  lg:w-md  px-6 p-2 xl:px-10 xl:p-5 rounded-full'>Elige tu sabor</button></a>
      </div>
    </article>
  )
}
