import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Layout from './components/Layout.jsx'
import Contact from './components/Contact.jsx'
import ProductList from './components/ProductList.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path = '/' element={<Layout />}> 
  <Route path = '/' element={<Home />} />
  <Route path = '/about' element={<About />} />
  <Route path = '/contact' element={<Contact />} />
  <Route path = '/shopnow' element={<ProductList />} />
  <Route path = '/login' element={<Login />} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router} />
  </React.StrictMode>,
)
