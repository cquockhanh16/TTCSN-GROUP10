import React from 'react'
import banner1 from '../assest/images/treem/banner1.webp';
import banner2 from '../assest/images/treem/banner2.webp';
import banner3 from '../assest/images/treem/banner3.webp';

import dc from '../assest/images/treem/discount-banner.webp'
import ts from '../assest/images/treem/aophong-banner.webp'
import ds from '../assest/images/treem/dissun-banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { dissunProducts, discountProducts, tshirtProducts } from '../assest/products/products-treem';


export const Kid = () => {
  return (
    <main>
      <section className='container redirect'>
        <div>
          <span>
            <a href="/">Trang chủ</a>
          </span>
          <span className='line'></span>
          <span>Trẻ em</span>
        </div>
      </section>

      <section className='product container'>
          <div className='banner'>
            <img src={banner1} alt="" />
          </div>
          <h3 className='space'>Sản phẩm giảm giá</h3>
          <div className='container_p'>
            <div className='banner'>
              <img src={dc} alt="" />
            </div>  
            <div className='product__list'>
              {
                  discountProducts.map((product) => (
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
                    </div>
                  ))
              }
            </div>
          </div>
      </section>

      <section className='product container'>
        <div className='banner space'>
          <img src={banner2} alt="" />
        </div>
          <h3>Áo phông</h3>
          <div className='container_p'>
            <div className='banner'>
              <img src={ts} alt="" />
            </div>
            <div className='product__list'>
              {
                  tshirtProducts.map((product) => (
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
                    </div>
                  ))
              }
            </div>
          </div>
      </section>

      <section className='product container'>
        <div className='banner space'>
          <img src={banner3} alt="" />
        </div>
          <h3>Sản phẩm chống nắng</h3>
          <div className='container_p'>
            <div className='banner'>
              <img src={ds} alt="" />
            </div>
            <div className='product__list'>
              {
                  dissunProducts.map((product) => (
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
                    </div>
                  ))
              }
            </div>
          </div>
      </section>
    </main>
  )
}
