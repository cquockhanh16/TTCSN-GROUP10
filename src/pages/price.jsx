import React from 'react';
import Navbarprice from './page_price/Navbarprice'
import { Outlet } from "react-router-dom";

export const Price = () => {
  return (
    <div className='dai'>
         <Navbarprice/>
         <div>
          <Outlet/>
         </div>   
    </div>
  )
}


