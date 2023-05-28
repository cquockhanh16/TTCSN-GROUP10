import React from 'react'
import { connect } from 'react-redux';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emptyCart from '../assest/images/global-imgaes/empty-cart.png'

class CartShop extends React.Component {

  deleteProduct = (product) =>{
    this.props.deleteProduct(product)
  }
  plusProduct = (product)=> {
    this.props.plusProduct(product)
  }
  minusProduct = (product) => {
    this.props.minusProduct(product)
  }
  handleShowCart = () => {
    let cartShow = document.getElementById('show')
    console.log(cartShow)
    cartShow.style.display = cartShow.style.display === "none" ? "block" : "none"
};
handleHideCart = () => {
  let hideCart = document.getElementById('show');
  hideCart.style.display = hideCart.style.display === "block" ? "none" : "block"
}

    render(){
      let {products} = this.props
      let total = 0;
      let quanty = 0;
      let totalQuanity = 0;
      products.forEach(element => {
          totalQuanity += element.quanity
        })
      return (
        <>
        <div className='shop-cart' id='shop-cart' >
            <div className='toggle item-icon' onClick={(e) => this.handleShowCart(e)}>
                <FontAwesomeIcon  icon={faBagShopping} />
            </div>
            <div id='show'>
            {
            products.length > 0 
            ?
            <>
            {
                products.forEach(element => {
                  quanty += element.quanity
                })
              }
            <p> {'('+quanty+')'} sản phẩm trong giỏ hàng</p>
            <div className='line'></div>
            
          {
              products.map((product, index) => {
                {
                  console.log(product)
                }

                return(
                  <>
                    <div className='cart-products' key={index}>

                      <div className='cart-container'>
                        <div className='product-img col-2'>
                          <img src={product.productImg}/>
                        </div>
                        <div className='product-content col-10'>
                          <div className='product-name'> 
                            <p>{product.productName}</p>
                            <button className='deleteBtn' onClick={() => this.deleteProduct(product)}>x</button>
                          </div>
                          <div className='product-infor'>
                            <div className='product-price'>
                            {
                              product.productPricez || product.productPrice
                              ?
                              <>
                                <p>{(Number(product.productPrice) * product.quanity).toLocaleString('vi', {style : 'currency', currency : 'VND'})} </p>
                              {
                                <p hidden>
                                  {total +=  Number(product.productPrice) * product.quanity}
                                </p>
                              }
                              </>
                              :
                              <>
                                <p>{(Number(product.productPricez) * product.quanity).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                              {
                                <p hidden>
                                  {total += Number(product.productPricez) * product.quanity } 
                                </p>
                                }
                              
                              </>

                            }
                            
                            </div>
                            <div className='product-quanity'>
                                {
                                  product.quanity === 1 ?
                                  <button className={ 'btn-default'} >-</button>
                                  :
                                  <button onClick={() => this.minusProduct(product)}>-</button>
                                }
                                <p >{product.quanity}</p>
                                <button onClick={() => this.plusProduct(product)}>+</button>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
                  
              })
            }
            <div className='line'></div>
             <button className='btn-checkcart'>XEM GIỎ HÀNG</button>
              <p className='cart-total'>Tổng tạm tính <span>{ total.toLocaleString('vi', {style : 'currency', currency : 'VND'}) }</span></p>
            </>
            :
            <div className='cart-empty'>
              <button onClick={() => this.handleHideCart()}>x</button>
              <div>
                <img src={emptyCart}/>
              </div>
              <p>Chưa có sản phẩm trong giỏ hàng của bạn.</p>
            </div>
          }
          </div>
            <span className='mes-total'>{totalQuanity}</span>
          </div>
        </>
      )
    }
}

const mapStateToProps = (state) => {
  return {products: state.products}
}

const mapDispatchToProps = (dispacth) => {
  return{
    deleteProduct : (product) => dispacth({type: 'DELETE_PRODUCT', payload: product}),
    plusProduct: (product) => dispacth({type: 'ADD_QUANITY', payload: product}),
    minusProduct: (product) => dispacth({type: 'MINUS_QUANITY', payload: product})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartShop)
