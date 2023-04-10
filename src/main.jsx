import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Applied from './components/Applied'
import Blog from './components/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'applied-jobs',
        element: <Applied/>
      },
      {
        path: 'blog',
        element: <Blog/>
      }
    ]
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
