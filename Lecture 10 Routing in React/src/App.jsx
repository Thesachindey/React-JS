import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import User from './components/User'
import Courses from './components/Courses'
import MockTest from './components/MockTest'
import Reports from './components/Reports'
import Notfound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <>
          <Navbar />
          <Home />
        </>

    },
    {
      path: "/about",
      element:
        <>
          <Navbar />
          <About />
        </>

    },
    {
      path: "/dashboard",
      element:
        <>
          <Navbar />
          <Dashboard />
        </>,
      children: [
        {
          path: 'courses',
          element: <Courses />
        },
        {
          path: 'mock-test',
          element: <MockTest />
        },
        {
          path: 'reports',
          element: <Reports />

        },

      ]
    },
    {
      path: "/user/:user",
      element:
        <>
          <Navbar />
          <User />
        </>
    },
    {
      path:'*',
      element:<Notfound/>
    }

  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

//27:21

