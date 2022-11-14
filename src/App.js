import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Route, BrowserRouter,Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import React from 'react';

function App() {
  return (
    <>
    <Navbar />


    <BrowserRouter>
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />

        </Routes>
      </div>
    </BrowserRouter>





   
    <Footer />
    </>
  );
}

export default App;
