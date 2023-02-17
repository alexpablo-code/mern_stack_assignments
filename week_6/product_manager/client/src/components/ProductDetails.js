import Nav from "./Nav";
import DetailsCard from "./DetailsCard";
import axios from "axios";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";



const ProductDetails = () => {
    const{id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allproducts/${id}`)
            .then((oneProduct) => {
                console.log(oneProduct)
                setProduct(oneProduct.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <Nav/>
            <DetailsCard product={product}/>
            
        </div>
    );
}

export default ProductDetails;
