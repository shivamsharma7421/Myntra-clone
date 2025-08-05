import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './routes/App.jsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import { Provider } from 'react-redux'
import MyntraStore from './store/index.js'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/", element: <Home />},
    {
      path: "/bag",
      element: <Bag />
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
