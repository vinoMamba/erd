import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../views/login'
import { NotFound } from '../views/errorPage/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFound />,
  },
])
