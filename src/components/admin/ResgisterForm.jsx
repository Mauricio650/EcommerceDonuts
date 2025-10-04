import { useId } from 'react'
import { CloseIcon } from '../icons/icons'
import { useRequestUsers } from '../../hooks/useRequestUser'

export function RegisterForm ({ handleModalRegister, showModalRegister }) {
  const { handleRegisterUser } = useRequestUsers()
  const passwordID = useId()
  const usernameID = useId()
  return (
    <section role='modal' className={`${showModalRegister === true ? 'flex' : 'hidden'} filter backdrop-blur-sm   absolute  top-0 z-1  w-full h-full justify-center items-start`}>
      <button onClick={handleModalRegister} className='w-[30px] cursor-pointer h-[30px] flex justify-center items-center  absolute top-0 left-0 z-10'><CloseIcon /></button>

      <form
        onSubmit={handleRegisterUser} className='bg-[#FD70A7] relative mt-10 rounded-2xl gap-2 shadow-2xl flex flex-col justify-center items-center py-5 w-[500px]'
      >

        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={usernameID}>Nombre de usuario</label>
          <input required id={usernameID} name='username' className='bg-white  text-black p-1 rounded min-w-[100px]' type='text' />
        </div>

        <div className='space-grotesk text-white text-shadow-black text-shadow-sm flex flex-col justify-center'>
          <label htmlFor={passwordID}>Contraseña</label>
          <input required id={passwordID} name='password' className='bg-white text-black p-1 rounded min-w-[100px]' type='text' />
        </div>

        <aside>
          <button className='p-2 transition-all duration-100 ease-in-out
                                 hover:text-[#FD70A7] text-shadow-black text-shadow-xs px-5
                                 cursor-pointer rounded-lg ring-2 ring-white hover:scale-105 shadow-2xl
                                  hover:ring-[#FECBDE] hover:bg-white bg-[#FECBDE]'
          >
            Crear
          </button>
        </aside>
      </form>
    </section>
  )
}
