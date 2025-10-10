import { LoginForm } from '../components/auth/Login'
import { useAuth } from '../hooks/useAuth'
import {SpinnerLoading} from '../components/SpinnerLoading'

export function Login () {
  const {loading} = useAuth()
  return (
    <section className='w-full min-h-screen flex justify-center items-center'>
      {loading ? <SpinnerLoading></SpinnerLoading> :  <LoginForm /> }
    </section>
  )
}
