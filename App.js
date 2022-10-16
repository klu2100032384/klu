import React from 'react' 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Developer from './components/developer/Developer';
import Subscribe from './components/subscribe/Subscribe';
import Login from './components/login/Login';
import Start from './components/Start/Start';
import Blend from './components/blend/Blend';
import Register from './components/SignUp/Register';
// import Menu from './components/Menu/Menu'
import {Route ,Routes } from "react-router"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Start/>}/>
        <Route path="/hero" element ={<Hero/>}/>
        <Route path="/subscribe" element ={<Subscribe/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/developer" element ={<Developer/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/blend" element ={<Blend/>}/>
        <Route path="/SignUp" element ={<Register/>}/>
        {/* <Route path="/Menu" element ={<Menu/>}/> */}
      </Routes>
       
    </div>
  );
}

export default App;