import React from 'react';
import { SliderComponent } from '../../components/SliderComponent';
import './canifaz.scss'
import { Link } from 'react-router-dom';
import banner1 from '../../assest/images/canifaz/banner.webp'
import banner2 from '../../assest/images/canifaz/banner2.webp'

class Navbarcanifaz extends React.Component {
  handlerClick = (e) => {
    let x = document.getElementsByClassName('links');
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }
      e.currentTarget.classList.add('active');
    };
    render(){
      return (    
        <>
          <p className='header-mes'>Miễn phí vận chuyển toàn bộ đơn hàng</p>
          <div className='container'>
          <div className='headercanifaz'> 
            <div className='headerr'>
            <section className='banner'>
          <SliderComponent arrImages={[banner1, banner2]}/>
        </section>
            <div className='headerlink'>
              <ul>
                  <li> <Link  onClick={(e) => {this.handlerClick(e)}} className='links active' to='/canifaz'> TREND </Link> </li>
                  <li> <Link  onClick={(e) => {this.handlerClick(e)}} className='links' to='/canifaz/art'> ART </Link> </li>
                  <li> <Link  onClick={(e) => {this.handlerClick(e)}} className='links' to='/canifaz/base'> BASE </Link> </li>
                  <li> <Link  onClick={(e) => {this.handlerClick(e)}} className='links' to='/canifaz/pop'> POP </Link> </li>
                  <li> <Link  onClick={(e) => {this.handlerClick(e)}} className='links' to='/canifaz/phukien'> PHỤ KIỆN </Link> </li>
              </ul>
            </div>
            </div>
          </div>
          </div>
        </>
            )
    }
}
export default Navbarcanifaz