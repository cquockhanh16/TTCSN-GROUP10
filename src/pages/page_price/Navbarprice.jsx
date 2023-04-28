import React from 'react';
import './price.scss'
import { Link } from 'react-router-dom';
import banner from '../../assest/images/giatot/banner.webp'


function Navbarprice() {
      
      const handlerClick = (e) => {
        let x = document.getElementsByClassName('links');
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove('active');
        }
        e.currentTarget.classList.add('active');
      };

    return (
        
        <div className='headerprice'> 
         <p>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày</p>
         <div className='headerr'>
          <img src={banner} alt='banner'/>
          <div className='headerlink'>
            <ul>
                <li> <Link  onClick={handlerClick} className='links active' to='/giatot'> TẤT CẢ </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/giatot/nu'> NỮ </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/giatot/nam'> NAM </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/giatot/begai'> BÉ GÁI </Link> </li>
                <li> <Link  onClick={handlerClick} className='links' to='/giatot/betrai'> BÉ TRAI </Link> </li>
            </ul>
          </div>
         </div>
        </div>
    )

}
export default Navbarprice ;