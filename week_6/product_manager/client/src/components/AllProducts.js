import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Nav from './Nav';

const AllProducts = ({allProducts, setAllProducts}) => {
    const navigate = useNavigate();

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

    const onClickHandler = (id) => {
        navigate(`/allproducts/${id}`);
    }


    return (
        <>
            <Nav/>
            <section className='sectionContainer'>
                <div className='productsContainer'>
                    
                    {
                        allProducts.map((product) => (
                            <div className='productCard'key={product._id} onClick={() => onClickHandler(product._id)}>
                                <h5>{product.title}</h5>
                                <p>{product.description}</p>
                                <p>${product.price}</p>
                                <Link to={`/allproducts/${product._id}`}>View</Link>
                            </div>
                        ))
                    }
                </div>
                
            </section>
        </>
    );
}

export default AllProducts;
