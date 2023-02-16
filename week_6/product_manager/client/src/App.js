import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ProductForm from './components/ProductForm';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addproducts" element={
          <>
          <Nav/>
          <ProductForm/>
          </>
        }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
