import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate=useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <br />
      <button onClick={()=>{navigate("/mental")}}>mental page</button>
    </>
  )
}

export default Dashboard