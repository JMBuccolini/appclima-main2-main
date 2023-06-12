import { Component } from 'react';
import './assets/css/App.css';
import NavBar from './components/NavBar';
import Weatherapi from './components/Weatherapi';
import Home from './components/paginas/Home'
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Weatherapi />
      <div className="container">
    
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
         
        </Routes>


        

      </div>
    </>
  )
}


export default App;
