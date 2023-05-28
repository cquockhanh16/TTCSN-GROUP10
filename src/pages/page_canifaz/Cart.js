import React from 'react'
import './canifaz.scss'
import { cart } from '../../assest/products/products-canifaz';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

class Cart extends React.Component{
  handleOnClick = (product) => {
    this.props.addProduct(product)
  }
  render(){
    return (    
      <div className='container'>
        <div className='product__list'>
        {
            cart.map((product) => (
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
                  <span className='product__pricez'>
                    {Number(product.productPricez).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)