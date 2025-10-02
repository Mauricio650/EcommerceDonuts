import { NavLink, useLocation } from 'react-router-dom'
import { HomeIcon, LogOutIcon, UserIcon } from '../icons/icons'
import { useAuth } from '../../hooks/useAuth'

export function SideBar ({ showSideBar }) {
  const location = useLocation()
  const { logOut } = useAuth()

  return (
    <section className={`bg-white max-[1281px]:absolute transition-all 
          ease-in duration-200 overflow-hidden z-5 min-h-screen
           ${showSideBar ? 'w-[300px] max-[500px]:w-[220px] py-7 px-3' : 'w-[0px]'}
           shadow-xl/20`}
    >

      <section className='space-grotesk h-full  text-md text-shadow-2xs text-shadow-black/30  flex flex-col gap-2'>
        <div className={`py-3 rounded  transition-all duration-150 ease-in
             ${location.pathname === '/adminPage' ? 'bg-[#FD70A7]/20 pointer-events-none font-bold' : 'bg-white  hover:text-[#FC70A6]'}
               px-4`}
        >

          <NavLink
            to='/adminPage'
          >
            <p className='flex gap-2 items-center'><HomeIcon /> Dashboard</p>
          </NavLink>

        </div>
        <div className={`py-3  rounded transition-all duration-150 ease-in
             ${location.pathname === '/adminPage/users' ? 'bg-[#FD70A7]/20' : 'bg-white hover:text-[#FC70A6]'}
               px-4`}
        >
          <NavLink
            to='/adminPage/users'
            className={({ isActive }) =>
              isActive
                ? 'pointer-events-none cursor-default font-bold'
                : ''}
          >
            <p className='flex gap-2 items-center'><UserIcon /> Users</p>
          </NavLink>
        </div>

        <div
          onClick={async () => await logOut()} className={`py-3 hover:text-[#FC70A6] cursor-pointer rounded transition-all duration-150 ease-in
            'bg-white' }
               px-4`}
        >

          <p className='flex gap-2 items-center'><LogOutIcon /> Log out</p>

        </div>

      </section>

    </section>
  )
}
