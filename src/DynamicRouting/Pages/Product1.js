import React from 'react'
import pixel7 from './pixel7.jpg'
const Product1 = () => {
  return (
    <div>
        <h3>Product Name : Google Pixel 7 pro</h3>
        <img src={pixel7} alt='pixel 7 pro'></img>
        <table>
            <tr>
                <td>Storage : 6Gb and 128 Gb</td>
                <td>Camera : 12MP and 12MP</td>
                <td>Processor : A12</td>
            </tr>
        </table>
    </div>
  )
}

export default Product1