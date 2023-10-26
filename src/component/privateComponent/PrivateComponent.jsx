import React from 'react'
import { Outlet } from 'react-router-dom';

function PrivateComponent() {
    const auth=true;
  return (
    auth? <Outlet/> : ""
  )
}

export default PrivateComponent