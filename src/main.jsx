import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout, ErrorView } from './components'
import { EditClient, Initial, NewClient } from './pages'
import { action as newClientAction } from './pages/NewClient'
import { action as editClientAction} from './pages/EditClient'
import { loader as clientesLoader } from './pages/Initial'
import { loader as editarClienteLoader } from './pages/EditClient'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Initial />,
        loader: clientesLoader,
        errorElement: <ErrorView />
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorView />
      },
      {
        path: '/clientes/:clientId/editar',
        element: <EditClient />,
        loader: editarClienteLoader,
        action: editClientAction,
        errorElement: <ErrorView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
