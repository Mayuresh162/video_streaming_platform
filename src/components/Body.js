import React from 'react';
import { Outlet } from "react-router-dom";
import Sidenav from './Sidenav';

const Body = () => {
  return (
    <div className='flex h-[calc(100vh-90px)]'>
        <Sidenav />
        <Outlet/>
    </div>
  )
}

export default Body