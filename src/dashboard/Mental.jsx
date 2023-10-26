import React from 'react'
import { useNavigate } from 'react-router-dom'


function Mental() {
  const navigate = useNavigate(); 
  return (
    <>
      <div>Mental</div>
      <br />
     
      <button onClick={() => { navigate("/dashboard") }}>Dashboard page</button>
    </>
  )
}

export default Mental