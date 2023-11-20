import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/css/style.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import "./assets/css/responsive.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './views/Login.jsx'
import Infos from './views/Infos.jsx'

library.add(faEye, faEyeSlash)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/infos",
        element: <Infos/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
