import React from 'react';
import './canifaz.scss'
import { Link } from 'react-router-dom';
import banner from '../../assest/images/canifaz/banner.webp'


function Navbarcanifaz() {
      
      const handlerClick = (e) => {
        let x = document.getElementsByClassName('links');
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove('active');
        }
        e.currentTarget.classList.add('active');
      };

    return (
        
        <div className='headercanifaz'> 
         <p>     Miễn phí vận chuyển toàn bộ đơn hàng</p>
         <div className='headerr'>
          <img src={banner} alt='banner'/>
          <div className='headerlink'>
            <ul>
                <li> <Link  onClick={handlerClick} className='links active' to='/canifaz'> TREND </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/canifaz/art'> ART </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/canifaz/base'> BASE </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/canifaz/pop'> POP </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/canifaz/phukien'> PHỤ KIỆN </Link> </li>
            </ul>
          </div>
         </div>
        </div>
    )

}
export default Navbarcanifaz ;