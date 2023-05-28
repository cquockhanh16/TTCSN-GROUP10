import React from 'react'
import { connect } from 'react-redux';
import banner1 from '../assest/images/male/banner1.webp';
import banner2 from '../assest/images/male/banner2.webp';
import banner3 from '../assest/images/male/banner3.webp';

import dc from '../assest/images/male/discount-banner.webp'
import ts from '../assest/images/male/ao-phong-banner.webp'
import qs from '../assest/images/male/quan-shorts-banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { trouserProdcuts, discountProducts, tshirtProducts } from '../assest/products/products-male';

class Male extends React.Component {
  handleOnClick = (product) => {
    this.props.addProduct(product)
  }
  render(){
    return (
      <main>
          <section className='container redirect'>
            <div>
              <span>
                <a href="/">Trang chủ</a>
              </span>
              <span className='line'></span>
              <span>Nam</span>
            </div>
          </section>
          <section className='product container'>
            <div className='banner'>
              <img src={banner1} alt="" />
            </div>
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
              <h3>Quần shorts</h3>
              <div className='container_p'>
                <div className='banner'>
                  <img src={qs} alt="" />
                </div>
                <div className='product__list'>
                  {
                      trouserProdcuts.map((product) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Male)

