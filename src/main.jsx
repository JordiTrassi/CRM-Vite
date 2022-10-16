import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components'
import { Initial, NewClient } from './pages'
import { action as newClientAction} from './pages/NewClient'
import { loader as clientesLoader } from './pages/Initial'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Initial />,
        loader: clientesLoader
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: newClientAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
