import axios from 'axios';
import {useState, useEffect} from 'react';
import Nav from './Nav';

const AllProducts = ({allProducts, setAllProducts}) => {
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/allproducts')
        .then((products) => {
            console.log(products.data)
            setAllProducts(products.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <>
            <Nav/>
            <section className='sectionContainer'>
                <div className='productsContainer'>
                    
                    {
                        allProducts.map((product) => (
                            <div className='productCard'key={product._id}>
                                <h5>{product.title}</h5>
                                <p>{product.description}</p>
                                <p>${product.price}</p>

                            </div>
                        ))
                    }
                </div>
                
            </section>
        </>
    );
}

export default AllProducts;
