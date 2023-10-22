import React from 'react'
import ProductItem from './productItem/ProductItem'
import "./style.css"


function Products() {
    return (
        <div className="productsContainer">
            <div className="productsText">Top Products</div>
            <div className="productsItems">
               
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />

                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                
            </div>
        </div>
    )
}

export default Products