import { BagShop, MenuGrid } from '../icons/icons'
import '../css/header.css'
import { useContext, useState } from 'react'
import { ContextCart } from '../../context/Cart'
import { HeaderMobil } from '../HeaderMobil'

export function Header () {
  const { handleShowCart, cart } = useContext(ContextCart)
  const [showHeaderMobil, setShowHeaderMobil] = useState(false)
  return (
    <>
      <HeaderMobil set={setShowHeaderMobil} show={showHeaderMobil} />
      <header className='header-page absolute w-full right-0 xl:w-full flex justify-end text-shadow-xs text-shadow-black items-center sm:p-5 p-1'>
        <nav className='nav-header w-full  lg:block'>
          <ul className='space-grotesk text-white font-bold lg:text-xl sm:text-md text-xs flex gap-4 sm:gap-0 sm:justify-evenly items-center'>
            <a className='hover:text-[#EA73A0]' href=''><li>Inicio</li></a>
            <a className='hover:text-[#EA73A0]' href='#menu'><li>Menú</li></a>

            <li><h1 className='dancing-script text-xl sm:text-3xl lg:text-6xl text-[#EA73A0]'>Homer's Donuts</h1></li>

            <a className='hover:text-[#EA73A0]' href='#contactos'><li>Contacto</li></a>
            <a className='hover:text-[#EA73A0]' href='#nosotros'><li>Nosotros</li></a>
          </ul>
        </nav>
        <div className='div-logo hidden text-xl text-[#EA73A0]'><h1 className='dancing-script'>Homer's Donuts</h1></div>
        <div className='flex justify-between items-center mr-3 lg:mr-10'>
          <button className='relative cursor-pointer' onClick={handleShowCart}>
            <BagShop color='#FD70A7' size={24} />
            <div className='absolute w-[15px] h-[15px] bg-white top-[-6px] left-[-5px] rounded-full flex justify-center items-center'><span className='text-center text-[10px] text-[#FD70A7] font-bold'>{cart.length}</span></div>
          </button>
          <div onClick={() => setShowHeaderMobil(true)} className='menu-grid hidden cursor-pointer'>
            <MenuGrid />
          </div>
        </div>
      </header>
    </>

  )
}
