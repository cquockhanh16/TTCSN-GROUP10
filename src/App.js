import React from "react";

import './style/style.scss';
import  Navbar  from "./components/navbar";
import  Home  from "./pages/home";
import  Famale  from "./pages/female";
import  Male  from "./pages/male";
import  Kid  from "./pages/kid";
import  Price  from "./pages/price";
import  Canifaz  from "./pages/canifaz";
import Footer from './components/footer';

import  Gall  from './pages/page_price/Gall';
import  Gnu  from './pages/page_price/Gnu';
import  Gnam  from './pages/page_price/Gnam';
import  Gbegai  from './pages/page_price/Gbegai';
import  Gbetrai  from './pages/page_price/Gbetrai';

import  Ctrend  from './pages/page_canifaz/Ctrend';
import  Cart  from './pages/page_canifaz/Cart';
import  Cbase  from './pages/page_canifaz/Cbase';
import  Cpop  from './pages/page_canifaz/Cpop';
import  Cphukien  from './pages/page_canifaz/Cphukien';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path='/nu' element={<Famale/>} />
            <Route path='/nam' element={<Male/>} />
            <Route path='/treem' element={<Kid/>} />
            <Route path='/giatot' element={<Price/>} >
                <Route index element={<Gall/>} />
                <Route path='nu' element={<Gnu/>} />
                <Route path='nam' element={<Gnam/>} />
                <Route path='begai' element={<Gbegai/>} />
                <Route path='betrai' element={<Gbetrai/>} />
            </Route>
            <Route path='/canifaz' element={<Canifaz/>} >
                <Route index element={<Ctrend/>} />
                <Route path='art' element={<Cart/>} />
                <Route path='base' element={<Cbase/>} />
                <Route path='pop' element={<Cpop/>} />
                <Route path='phukien' element={<Cphukien/>} />
            </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
