import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ProductForm from './components/ProductForm';
import Nav from './components/Nav';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
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
        <Route path="/allproducts">
          <Route index element={<AllProducts allProducts ={allProducts} setAllProducts={setAllProducts}/>}/>
          <Route path=":id" element={<ProductDetails/>}/>
          <Route path=":id/edit" element={<EditProduct/>}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
