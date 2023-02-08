import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../views/Login'
import { NotFound } from '../views/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFound />,
  },
])
