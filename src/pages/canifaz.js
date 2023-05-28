import React from 'react';
import { Outlet } from "react-router-dom";
import Navbarcanifaz from './page_canifaz/Navbarcanifaz';
import { connect } from 'react-redux';

class Canifaz extends React.Component{
  render(){
    return (
      <div className='dai'>
           <Navbarcanifaz/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Canifaz)
