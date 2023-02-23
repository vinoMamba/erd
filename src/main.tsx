import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { router } from './routes'

import './index.css'
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig>
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>,
)
