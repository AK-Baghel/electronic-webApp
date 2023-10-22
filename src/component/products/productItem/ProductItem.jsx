import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

function ProductItem() {

    const navigate=useNavigate();
    const product=(e)=>{
        navigate("/product/igbt")
    }

    return (
        <div className="productItemContainer" onClick={product}>
            <img className='productItemImg' src="https://i0.wp.com/www.gloriouselectronics.com/wp-content/uploads/2022/02/IGBT.jpg?w=500&ssl=1" alt="" />
            <div className="productItemText">IGBT</div>
        </div>
    )
}

export default ProductItem