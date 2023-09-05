import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Home from './routes/Home/index.jsx'
import EditarProduto from './routes/EditarProdutos/index.jsx'
import './index.css'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProduto />
      },
      {
        path: "/antiga",
        element: <Navigate to="/"/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
