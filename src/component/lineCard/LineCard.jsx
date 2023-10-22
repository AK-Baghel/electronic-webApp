import React from 'react'
import LineCardItems from './lineCardItems/LineCardItems'
function LineCard() {
  return (
    <>
      <div className="aboutBanner">Line Card</div>
      <div className="productsItems" style={{marginBlock:"3rem"}}>

        <LineCardItems />
        <LineCardItems />
        <LineCardItems />
        <LineCardItems />
        <LineCardItems />
        <LineCardItems />
        <LineCardItems />
        <LineCardItems />
      </div>
    </>
  )
}

export default LineCard
