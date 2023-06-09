import React from 'react'
import { SliderComponent } from '../components/SliderComponent';
import { connect } from 'react-redux';
import banner1 from '../assest/images/female/banner.webp';
import banner2 from '../assest/images/female/banner2.webp';
import banner3 from '../assest/images/female/banner3.webp';

import dc from '../assest/images/female/product-discount-banner.webp'
import ts from '../assest/images/female/ao-phong-banner.webp'
import ds from '../assest/images/female/dissun-banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { dissunProducts, discountProducts, tshirtProducts } from '../assest/products/products-female';


class Female extends React.Component{
  handleOnClick = (product) => {
    this.props.addProduct(product)
  }
  render(){
    return(
      <main>
      <section className='container redirect'>
        <div>
          <span>
            <a href="/">Trang chủ</a>
          </span>
          <span className='line'></span>
          <span>Nữ</span>
        </div>
      </section>
      <section className='product container'>
      <section className='banner'>
          <SliderComponent arrImages={[banner1, banner2, banner3]}/>
        </section>
          <h3>Sản phẩm giảm giá</h3>
          <div className='container_p'>
            <div className='banner'>
              <img src={dc} alt="" />
            </div>  
            <div className='product__list'>
              {
                  discountProducts.map((product) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Female)
