import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h2>I am Product Page</h2>
        <button onClick={()=>navigate('product1')}>Product 1</button>&emsp;
        <button onClick={()=>navigate('product2')}>Product 2</button>&emsp;
        <button onClick={()=>navigate('product3')}>Product 3</button>
        <Outlet/>
    </div>
   
  )
}

export default Product