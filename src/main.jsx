
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './component/Blogs/Blogs.jsx'
import Bookmarks from './component/Bookmarks/Bookmarks.jsx'
import App from './App.jsx'
import Home from './component/Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
    
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
