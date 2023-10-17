import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './components/ui/Layout'

export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='details' element={<Details/>}></Route>
              <Route path='login' element={<Login/>}></Route>
              <Route path='register' element={<Register/>}></Route>
            </Route>
          
          
          
        </Routes>    
    </BrowserRouter>
    
    </>
  )
}



