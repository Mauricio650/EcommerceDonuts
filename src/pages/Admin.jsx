import { useState } from 'react'
import { MenuGrid } from '../components/icons/icons'
import { Header } from '../components/admin/Header'
import { SideBar } from '../components/admin/SideBar'
import { Income } from '../layouts/admin/IncomeContainer'
import { Outlet, useLocation } from 'react-router-dom'

export function AdminPage () {
  const [showSideBar, setShowSideBar] = useState(false)
  const location = useLocation()
  return (
    <section className=' w-full relative bg-[#FECBDE] h-full  min-h-screen'>

      <Header setShowSideBar={setShowSideBar} />

      <section className='flex'>
        <SideBar showSideBar={showSideBar} />

        <section className='flex flex-col w-full p-5 gap-5'>

          {location.pathname !== '/adminPage/users' ? <Income /> : ''}

          <section className='w-full h-full bg-white p-2 mx-auto rounded-xl shadow-xl/20'>
            <Outlet />
          </section>

        </section>
      </section>

    </section>
  )
}
