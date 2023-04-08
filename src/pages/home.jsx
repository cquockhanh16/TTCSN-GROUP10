import React from 'react'
import banner from '../assest/images/banner.webp';
import sale1 from '../assest/images/discount_img1.webp';
import sale2 from '../assest/images/discount_img2.webp';
import hwbanner from '../assest/images/hw-banner.webp';
import npbanner from '../assest/images/new_product_banner.webp';
import ppbanner from '../assest/images/price_product_banner.webp';
import fpbanner from '../assest/images/family_product_banner.webp';
import dpbanner from '../assest/images/dissun_product_banner.webp';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { happyWeekend, newProduct, priceProduct, familyProduct, dissunProduct, messages} from '../assest/products/products';
export const Home = () => {
  return (
    <main>
        <FontAwesomeIcon icon={faHand} />
        <section className='banner'>
          <img src={banner} alt="" />
        </section>
        <section className='sale container'>
          <h3>Ưu đãi riêng bạn</h3>
          <div>
            <span>
            <img src={sale1} alt="" />
            </span>
            <span>
            <img src={sale2} alt="" />
            </span>
          </div>
        </section>
        <section className='product container'>
            <h3>Happy Weekend</h3>
            <div className='container_p'>
              <div className='banner'>
                <img src={hwbanner} alt="" />
              </div>
              <div className='product__list'>
                {
                    happyWeekend.map((product) => (
                      <div className='product__item'>
                        <button className='add__cart'>Thêm vào giỏ hàng</button>
                        <span className='product__img'>
                          <img src={product.productImg} alt="" />
                          <button>
                            Love
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
            <h3>Sản phẩm mới</h3>
            <div className='container_p'>
              <div className='banner'>
                <img src={npbanner} alt="" />
              </div>
              <div className='product__list'>
                {
                    newProduct.map((product) => (
                      <div className='product__item'>
                        <button className='add__cart'>Thêm vào giỏ hàng</button>
                        <span className='product__img'>
                          <img src={product.productImg} alt="" />
                          <button>
                            Love
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
            <h3>Sản phẩm giá tốt</h3>
            <div className='container_p'>
              <div className='banner'>
                <img src={ppbanner} alt="" />
              </div>
              <div className='product__list'>
                {
                    priceProduct.map((product) => (
                      <div className='product__item'>
                        <button className='add__cart'>Thêm vào giỏ hàng</button>
                        <span className='product__img'>
                          <img src={product.productImg} alt="" />
                          <button>
                            Love
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
            <h3>BST FAMILY</h3>
            <div className='container_p'>
              <div className='banner'>
                <img src={fpbanner} alt="" />
              </div>
              <div className='product__list'>
                {
                    familyProduct.map((product) => (
                      <div className='product__item'>
                        <button className='add__cart'>Thêm vào giỏ hàng</button>
                        <span className='product__img'>
                          <img src={product.productImg} alt="" />
                          <button>
                            Love
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
            <h3>Áo khoác chống nắng</h3>
            <div className='container_p'>
              <div className='banner'>
                <img src={dpbanner} alt="" />
              </div>
              <div className='product__list'>
                {
                    dissunProduct.map((product) => (
                      <div className='product__item'>
                        <button className='add__cart'>Thêm vào giỏ hàng</button>
                        <span className='product__img'>
                          <img src={product.productImg} alt="" />
                          <button>
                            Love
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
        <section className='canifalife container'>
          <h3>#canifalife</h3>
          <div>
            {
              messages.map((mes) => (
                <div>
                  <span>
                    <img src={mes.img} alt="" />
                  </span>
                  <h4>
                    Tất cả
                  </h4>
                  <h2>
                    {mes.mes}
                  </h2>
                  <span>{mes.time}</span>
                </div>
              ))
            }
          </div>
        </section>
        <section className='seen-more'>
          <button>
            Xem thêm
          </button>
        </section>
    </main>
  )
}
