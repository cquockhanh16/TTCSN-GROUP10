import React from "react";
import './style/style.scss';
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Famale } from "./pages/female";
import { Male } from "./pages/male";
import { Kid } from "./pages/kid";
import { Price } from "./pages/price";
import { New } from "./pages/new";
import { CanifaZ } from "./pages/canifaz";
import {Footer} from './components/footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/nu' element={<Famale/>} exact/>
          <Route path='/nam' element={<Male/>} exact/>
          <Route path='/treem' element={<Kid/>} exact/>
          <Route path='/giatot' element={<Price/>} exact/>
          <Route path='/moi' element={<New/>} exact/>
          <Route path='/canifaz' element={<CanifaZ/>} exact/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
