import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact_us/Contact_us'
import Layout from './Layout'
import UserGreet from './components/UserGreet/UserGreet'
import Github, { githubInfoLoder } from './components/Github/Github'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Root />,
//     children : [
//       {path:"",
//        element: <Home />},
//       {path:"about",
//     element:<About />
//   },
//   {
//     path:"contact-us",
//     element:<Contact />
//   }
//     ]
//   }

// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='user/:username' element={<UserGreet />} />
      <Route 
      loader={githubInfoLoder}
      path='github' 
      element={<Github />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
