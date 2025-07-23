import React from 'react'
import App from './routes/App.jsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/", element: <Home /> /* , loader: postloader */ },
    {
      path: "/bag",
      element: <Bag />
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
