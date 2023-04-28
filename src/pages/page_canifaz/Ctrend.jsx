import React from 'react'
import './canifaz.scss'
import { ctrend } from '../../assest/products/products-canifaz';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Ctrend = () => {
  return (    
              <div className='product__list'>
                {
                    ctrend.map((product) => (
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
  )
}