import React from 'react';
import Navbarprice from './page_price/Navbarprice'
import { Outlet } from "react-router-dom";
import Navbarcanifaz from './page_canifaz/Navbarcanifaz';

export const Canifaz = () => {
  return (
    <div className='dai'>
         <Navbarcanifaz/>
         <div>
          <Outlet/>
         </div>   
    </div>
  )
}
