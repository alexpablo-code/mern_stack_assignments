import React from 'react';
import Nav from './Nav';
import EditForm from './EditForm';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const[product, setProduct] = useState({});
    const{id} = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/allproducts/${id}`)
            .then((oneProduct) => {
                console.log(oneProduct.data)
                setProduct(oneProduct.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])


    return (
        <div>
            <Nav/>
            <EditForm product={product}/>
        </div>
    );
}

export default EditProduct;
