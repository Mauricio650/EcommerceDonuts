import { MenuGrid } from '../icons/icons'

export function Header ({ setShowSideBar }) {
  return (
    <header className='w-full relative z-10 p-4 flex gap-3 justify-start items-center shadow-xl/20'>
      <h1 className='chewy-regular text-white text-lg sm:text-xl text-shadow-2xs text-shadow-black/30'>Homer's Donuts - Panel administrador</h1>
      <div
        onClick={() => setShowSideBar((p) => {
          return p !== true
        })} className='cursor-pointer'
      >
        <MenuGrid />
      </div>
    </header>
  )
}
