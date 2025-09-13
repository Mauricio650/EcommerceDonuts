import { CloseIcon } from './icons/icons'

export function HeaderMobil ({ show, set }) {
  return (
    <header className={`backdrop-blur-md bg-[#EA73A0]/30 rounded-2xl text-shadow-xs text-shadow-black  absolute z-2 overflow-hidden ${show ? 'flex w-full h-[150px]' : 'w-0 h-0'} transition-all duration-500 ease-in flex-col justify-center items-center`}>
      <nav className='w-full'>
        <ul className='space-grotesk text-white font-bold  text-xs flex flex-col gap-2 justify-center items-center'>
          <a className='hover:text-[#EA73A0]' href=''><li>Inicio</li></a>
          <a className='hover:text-[#EA73A0]' href='#menu'><li>Menú</li></a>

          <a className='hover:text-[#EA73A0]' href='#contactos'><li>Contacto</li></a>
          <a className='hover:text-[#EA73A0]' href='#nosotros'><li>Nosotros</li></a>
        </ul>
      </nav>
      <div className='div-logo text-xl text-[#EA73A0]'><h1 className='dancing-script'>Homer's Donuts</h1></div>
      <div onClick={() => set(false)} className='cursor-pointer'>
        <CloseIcon />
      </div>
    </header>
  )
}
