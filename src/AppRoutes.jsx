import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { AdminPage } from './pages/Admin'
import { PayPage } from './pages/PayPage'

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/adminPage' element={<AdminPage />} />
      <Route path='/payProducts' element={<PayPage />} />
    </Routes>
  )
}
