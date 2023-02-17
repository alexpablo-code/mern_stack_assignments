import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditForm = ({product}) => {
    const navigate = useNavigate();
    


    const [updatedProduct, setUpdatedProduct] = useState(product);



    const handleInputChange =(e) => {
        setUpdatedProduct({...updatedProduct, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(updatedProduct)
        axios.put(`http://localhost:8000/api/allproducts/${product._id}/edit`, updatedProduct)
            .then((result) => {
                console.log(result);
                navigate('/allproducts')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className='sectionContainer'>
            <div className='formContainer'>
                <form className='productForm' onSubmit={onSubmitHandler}>
                    <h4>{product.title}</h4>
                    <div className='inputGroup'>
                        <label htmlFor="">Title</label>
                        <input type="text" name='title' onChange={handleInputChange} value={updatedProduct.title || product.title}/>
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="">Price</label>
                        <input type="number" step="0.01" name='price' onChange={handleInputChange} value={updatedProduct.price || product.price}/>
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="30" rows="10" onChange={handleInputChange} value={updatedProduct.description || product.description}></textarea>
                    </div>
                    <div className='objCenter'>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default EditForm;
