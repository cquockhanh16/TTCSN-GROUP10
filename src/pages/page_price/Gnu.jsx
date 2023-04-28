import React from 'react'
import './price.scss'
import { gnu } from '../../assest/products/products-giatot';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Gnu = () => {
  return (    
            <div>
              <div className='product__list'>
                {
                    gnu.map((product) => (
                      <div className='product__item'>
                        <button className='add__cart'>Thêm vào giỏ hàng</button>
                        <span className='product__img'>
                          <img src={product.productImg} alt="" />
                          <button>
                          <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </span>
                        <span className='product__name'>
                          {product.productName}
                        </span>
                        <span className='product__price'>
                          {product.productPrice}
                        </span>
                        <span className='product__pricez'>
                          {product.productPricez}
                        </span>
                      </div>
                    ))
                  }
              </div>
              <div className='buttonprice'>
                  <button style={{ color: 'red'}}> 1 </button>
                  <button> 2 </button>
                  <button> 3 </button>
                  <button> <span><FontAwesomeIcon icon={faChevronRight} /></span> </button>
                </div>
            </div>
  )
}
