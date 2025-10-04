import { useState } from 'react'
import { CardUser } from '../../components/admin/CardUser'
import { RegisterForm } from '../../components/admin/ResgisterForm'
import { PlusIcon } from '../../components/icons/icons'
import { useGetUsers } from '../../hooks/useGetUsers'
import { UpdatePasswordForm } from '../../components/admin/UpdatePasswordForm'

export function Users () {
  const { userList } = useGetUsers()
  const [showModalRegister, setModalRegister] = useState(null)
  const [showModalUPassword, setModalUPassword] = useState({ show: false, id: null })

  const handleModalRegister = () => {
    setModalRegister(p => (!p))
  }

  const handleModalUPassword = (id) => {
    setModalUPassword(p => ({ ...p, show: !p.show, id }))
  }
  return (
    <section className='h-full w-full relative overflow-auto'>
      <div className='w-full relative top-0'>
        <div onClick={handleModalRegister} className='absolute right-0 top-0 cursor-pointer hover:scale-75 filter drop-shadow-2xl drop-shadow-black'>
          <PlusIcon />
        </div>
      </div>
      <UpdatePasswordForm showModalUPassword={showModalUPassword} handleModalUPassword={handleModalUPassword} />
      <RegisterForm showModalRegister={showModalRegister} handleModalRegister={handleModalRegister} />
      <section className='w-full p-4 py-10  overflow-y-auto-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-center'>
        {userList.map(u => (
          <CardUser key={u.id} handleModalUPassword={handleModalUPassword} id={u.id} username={u.username} role={u.role} />
        ))}
      </section>
    </section>

  )
}
