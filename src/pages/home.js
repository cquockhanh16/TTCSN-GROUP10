import React, {useState} from 'react'
import { connect } from 'react-redux';

import banner from '../assest/images/home/banner.webp';
import banner2 from '../assest/images/home/banner2.webp';
import banner3 from '../assest/images/home/banner3.webp';
import sale1 from '../assest/images/home/discount_img1.webp';
import sale2 from '../assest/images/home/discount_img2.webp';
import hwbanner from '../assest/images/home/hw-banner.webp';
import npbanner from '../assest/images/home/new_product_banner.webp';
import ppbanner from '../assest/images/home/price_product_banner.webp';
import fpbanner from '../assest/images/home/family_product_banner.webp';
import dpbanner from '../assest/images/home/dissun_product_banner.webp';
import { SliderComponent } from '../components/SliderComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { happyWeekend, newProduct, priceProduct, familyProduct, dissunProduct, messages} from '../assest/products/products-home';

class Home extends React.Component {

  handleOnClick = (product) => {
    this.props.addProduct(product)
  }
  render(){
    return(
      <main>
        <section className='banner'>
          <SliderComponent arrImages={[banner, banner2, banner3]}/>
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
                      <div className='product__item' >
                        <button className='add__cart' onClick={() => {this.handleOnClick(product)}}>Thêm vào giỏ hàng</button>
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
                          {Number(product.productPrice).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                        </span>
                        <div className='list-color'>
                            {
                              product.productColor.map(color => {
                                return(
                                  <span className='product__color' style={{backgroundColor: `${color}`}}>
                                </span>
                                )
                              })
                            }
                        </div>
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
                        <button className='add__cart' onClick={() => {this.handleOnClick(product)}}>Thêm vào giỏ hàng</button>
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
                          {Number(product.productPrice).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                          </span>
                          <div className='list-color'>
                            {
                              product.productColor.map(color => {
                                return(
                                  <span className='product__color' style={{backgroundColor: `${color}`}}>
                                </span>
                                )
                              })
                            }
                        </div>
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
                        <button className='add__cart' onClick={() => {this.handleOnClick(product)}}>Thêm vào giỏ hàng</button>
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
                          {Number(product.productPrice).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                          </span>
                          <div className='list-color'>
                            {
                              product.productColor.map(color => {
                                return(
                                  <span className='product__color' style={{backgroundColor: `${color}`}}>
                                </span>
                                )
                              })
                            }
                        </div>
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
                        <button className='add__cart' onClick={() => {this.handleOnClick(product)}}>Thêm vào giỏ hàng</button>
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
                          {Number(product.productPrice).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                          </span>
                          <div className='list-color'>
                            {
                              product.productColor.map(color => {
                                return(
                                  <span className='product__color' style={{backgroundColor: `${color}`}}>
                                </span>
                                )
                              })
                            }
                        </div>
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
                        <button className='add__cart' onClick={() => {this.handleOnClick(product)}}>Thêm vào giỏ hàng</button>
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
                          {Number(product.productPrice).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                          </span>
                          <div className='list-color'>
                            {
                              product.productColor.map(color => {
                                return(
                                  <span className='product__color' style={{backgroundColor: `${color}`}}>
                                </span>
                                )
                              })
                            }
                        </div>
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
}

const mapStateToProps = (state) => {
  return {products: state.products}
}

const mapDispatchToProps = (dispacth) => {
  return{
    addProduct : (product) => dispacth({type: 'ADD_PRODUCT', payload: product}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
