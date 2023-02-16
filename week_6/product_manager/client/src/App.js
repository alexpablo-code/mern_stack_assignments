import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ProductForm from './components/ProductForm';
import Nav from './components/Nav';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import './App.css';

function App() {
  const[allProducts, setAllProducts] = useState([])

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
        <Route path="/allproducts" element={<AllProducts allProducts ={allProducts} setAllProducts={setAllProducts}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
