import axios from 'axios';
import {useState, useEffect} from 'react';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductForm/>
    </div>
  );
}

export default App;
