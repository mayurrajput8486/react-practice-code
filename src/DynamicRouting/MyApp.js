import React from 'react'
import './myapp.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Navbar from './Navbar'
import Product1 from './Pages/Product1'
import Product3 from './Pages/Product3'
import Product2 from './Pages/Product2'
import ErrorPage from './Pages/ErrorPage'
import Users from './Pages/Users'
import UserDetails from './Pages/UserDetails'
const MyApp = () => {
  return (
    <div>
        <h1>Welcome to React App...!!!</h1>
        <Navbar/>
        <Routes>
           {/*  <Route path='/' element={<Home/>}></Route> */}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/product' element={<Product/>}>
                <Route path='/product/product1' element={<Product1/>}></Route>
                <Route path='/product/product2' element={<Product2/>}></Route>
                <Route path='/product/product3' element={<Product3/>}></Route>
            </Route>
            <Route path='/users' element={<Users/>}>
                    <Route path='/users/:name' element={<UserDetails/>}></Route>
            </Route>
           {/*  <Route path='/users/mahesh' element={<UserDetails/>}></Route>
            <Route path='/users/varun' element={<UserDetails/>}></Route> */}
           
           {/*  <Route path='/users/:name' element={<UserDetails/>}></Route> */}
            <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
    </div>
  )
}
export default MyApp