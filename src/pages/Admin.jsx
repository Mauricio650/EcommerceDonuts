import { useState } from 'react'
import { MenuGrid } from '../components/icons/icons'
import { Header } from '../components/admin/Header'
import { SideBar } from '../components/admin/SideBar'
import { Income } from '../layouts/admin/IncomeContainer'
import { Outlet } from 'react-router-dom'

export function AdminPage () {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <section className='w-full min-h-screen'>
      <Header setShowSideBar={setShowSideBar} />

      <section className=' w-full relative bg-[#FECBDE] flex min-h-screen justify-between'>

        <SideBar showSideBar={showSideBar} />

        <section className='flex-1 flex flex-col w-full p-5 gap-5'>

          <Income />

          <section className='w-full h-full bg-white p-2 mx-auto rounded-xl shadow-xl/20'>
            <Outlet />
          </section>

        </section>

      </section>
    </section>
  )
}
