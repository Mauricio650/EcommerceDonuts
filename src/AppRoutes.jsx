import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { AdminPage } from './pages/Admin'
import { PayPage } from './pages/PayPage'
import { Login } from './pages/Login'
import { ProviderAuthContext } from './context/auth'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { Products } from './layouts/admin/Products'
import { Users } from './layouts/admin/Users'
import { ProviderUserContext } from './context/Users'

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<HomePage />} />
      <Route
        path='/login' element={
          <ProviderAuthContext>
            <Login />
          </ProviderAuthContext>
    }
      />

      <Route
        path='/adminPage' element={

          <ProviderAuthContext>
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          </ProviderAuthContext>
}
      >
        <Route index element={<Products />} />
        <Route path='users' element={
          <ProviderUserContext>
            <Users />
          </ProviderUserContext>
        } />
      </Route>
      <Route path='/payProducts' element={<PayPage />} />
    </Routes>
  )
}
