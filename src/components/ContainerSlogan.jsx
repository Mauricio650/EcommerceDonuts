export function SloganAndTitle () {
  return (
    <article className='container-slogan md:w-4xl lg:p-13 mt-40 p-5 sm:mt-10 xl:p-20 xl:mt-20 2xl:mt-30 flex flex-col justify-center lg:gap-5 xl:gap-10'>
      <h1 className='chewy-regular text-[#FF71A4] text-2xl lg:text-3xl xl:text-5xl'>La vida es mejor con una dona en la mano !!</h1>
      <div className='flex flex-col gap-3 lg:gap-10'>
        <p className='space-grotesk text-xs lg:text-xl xl:text-2xl text-white'>Te reembolsamos el 10% en tu primera compra online.</p>
        <a href='#menu'><button className='bg-[#FD70A7] hover:bg-[#FCAAC8] hover:text-[#FD70A7] border border-transparent hover:border-white transition-all ease-in duration-100 cursor-pointer space-grotesk xl:text-2xl text-white  lg:w-md w-[200px] px-6 p-2 xl:px-10 xl:p-5 rounded-full'>Elige tu sabor</button></a>
      </div>
    </article>
  )
}
