import { useState } from 'react'
import { MenuGrid } from '../components/icons/icons'
import { Header } from '../components/admin/Header'
import { SideBar } from '../components/admin/SideBar'
import { Income } from '../layouts/admin/IncomeContainer'
import { Outlet, useLocation } from 'react-router-dom'

export function AdminPage () {
  const [showSideBar, setShowSideBar] = useState(false)
  const location = useLocation()
  console.log(location)
  return (
    <section className='w-full min-h-screen'>
      <Header setShowSideBar={setShowSideBar} />

      <section className=' w-full relative bg-[#FECBDE] flex min-h-screen justify-between'>

        <SideBar showSideBar={showSideBar} />

        <section className='flex-1 flex flex-col w-full p-5 gap-5'>

          {location.pathname !== '/adminPage/users' ?  <Income /> : ''}
         

          <section className='w-full h-[60%] bg-white p-2 mx-auto rounded-xl shadow-xl/20'>
            <Outlet />
          </section>

        </section>

      </section>
    </section>
  )
}
