import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState();
    const[description, setDescription] = useState("");
    const navigate = useNavigate();

    const[errors, setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/addproduct', {
            title, price, description
        })
            .then(res => {
                console.log(res.data);
                navigate('/allproducts');
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <section className='sectionContainer'>
            <div className='formContainer'>
                <form className='productForm' onSubmit={onSubmitHandler}>
                    <div className='inputGroup'>
                        <label htmlFor="">Title</label>
                        <input type="text" name='title' onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                        {
                            errors.title?
                            <p className='errors'>{errors.title.message}</p>:
                            null
                        }
                    <div className='inputGroup'>
                        <label htmlFor="">Price</label>
                        <input type="number" step="0.01" name='price' onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                        {
                            errors.price?
                            <p className='errors'>{errors.price.message}</p>:
                            null
                        }
                    <div className='inputGroup'>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="30" rows="10" onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                        {
                            errors.description?
                            <p className='errors'>{errors.description.message}</p>:
                            null
                        }
                    <div className='objCenter'>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default ProductForm;
