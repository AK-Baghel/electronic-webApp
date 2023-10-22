import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function ProductPage() {
    const {name}=useParams();
    console.log(name);
    useEffect(()=>{
        window.scroll(0,0);
    },[]);

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage