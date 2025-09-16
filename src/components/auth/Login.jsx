import { useState, useId } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { validatePartialSchemaUser } from '../../schemas/userSchema'

export function LoginForm () {
  const usernameID = useId()
  const passwordID = useId()
  const [show, setShow] = useState(null)
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    const formData = Object.fromEntries(data.entries())

    const result = validatePartialSchemaUser(data)
    if (!result.success) {
      const errors = {}
      result.error.issues.forEach(e => {
        errors.path = e.path
        errors.message = e.message
      })
      console.log(errors.message, errors.path)
      return
    }
    await login({ formData })
  }

  return (
    <form
      onSubmit={handleSubmit} className='flex flex-col shadow-lg shadow-black/70 font-mono
             rounded ring-2 justify-center items-center gap-8
             ring-white bg-[#FECBDE] w-[340px] h-[450px]'
    >
      <div>
        <img src='img/rosquilla.webp' className='w-[80px]' alt='image of donut' />
      </div>
      <div>
        <div className='relative'>
          <input
            name='username'
            type='text' id={usernameID}
            class='block rounded px-2.5 pb-2.5 pt-5 w-full shadow
                          text-sm text-gray-900 bg-gray-50
                           border-0 border-b-2 border-[#FD70A7] focus:outline-none
                           focus:ring-0 focus:border-b-[#FFD54F] peer' placeholder=' '
            required
          />
          <label
            for={usernameID} class='absolute text-sm
                          text-gray-500  duration-300
                          transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5
                           peer-focus:text-[#FD70A7]
                           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4
                           rtl:peer-focus:left-auto'
          >Usuario
          </label>
        </div>

        <div className='relative mt-5'>
          <img onClick={() => setShow(true)} src='img/ojo.webp' className={`${show ? 'hidden' : ''} absolute cursor-pointer right-1 top-4 w-[18px]`} alt='' />
          <img onClick={() => setShow(false)} src='img/ojo_c.webp' className={`${show ? '' : 'hidden'} absolute cursor-pointer right-1 top-4 w-[18px]`} alt='' />

          <input
            name='password'
            type={show ? 'text' : 'password'} id={passwordID}
            class='block rounded px-2.5 pb-2.5 pt-5 w-full shadow
                          text-sm text-gray-900 bg-gray-50
                           border-0 border-b-2 border-[#FD70A7] focus:outline-none
                           focus:ring-0 focus:border-b-[#FFD54F] peer' placeholder=' '
            required
          />
          <label
            for={passwordID} class='absolute text-sm
                          text-gray-500  duration-300
                          transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5
                           peer-focus:text-[#FD70A7]
                           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4
                           rtl:peer-focus:left-auto'
          >Contraseña
          </label>

        </div>

      </div>
      <aside>
        <button className='bg-[#FC70A6] cursor-pointer hover:bg-[#aa0b48]  text-shadow-xs text-shadow-black rounded-xl p-1 px-3 shadow-lg shadow-black/30 text-white'>Entrar</button>
      </aside>
    </form>
  )
}
