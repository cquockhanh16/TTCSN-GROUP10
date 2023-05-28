import React from 'react';
import Navbarprice from './page_price/Navbarprice'
import { Outlet } from "react-router-dom";
import { connect } from 'react-redux';

class Price extends React.Component{
  render(){
    return (
      <div className='dai'>
           <Navbarprice/>
           <div>
            <Outlet/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Price)


