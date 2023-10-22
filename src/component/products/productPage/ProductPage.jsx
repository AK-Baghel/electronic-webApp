import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const {name}=useParams();
    console.log(name);

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage