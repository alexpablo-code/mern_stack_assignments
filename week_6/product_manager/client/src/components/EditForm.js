import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditForm = ({id}) => {
    const navigate = useNavigate();
    const[errors, setErrors] = useState({})
    


    const [updatedProduct, setUpdatedProduct] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/api/allproducts/${id}`)
            .then((oneProduct) => {
                console.log(oneProduct.data)
                setUpdatedProduct(oneProduct.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])



    const handleInputChange =(e) => {
        setUpdatedProduct({...updatedProduct, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(updatedProduct)
        axios.put(`http://localhost:8000/api/allproducts/${id}/edit`, updatedProduct)
            .then((result) => {
                console.log(result);
                navigate('/allproducts')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <section className='sectionContainer'>
            <div className='formContainer'>
                <form className='productForm' onSubmit={onSubmitHandler}>
                    <h4>{updatedProduct.title}</h4>
                    <div className='inputGroup'>
                        <label htmlFor="">Title</label>
                        <input type="text" name='title' onChange={handleInputChange} value={updatedProduct.title}/>
                    </div>
                        {
                            errors.title?
                            <p className='errors'>{errors.title.message}</p>:
                            null
                        }
                    <div className='inputGroup'>
                        <label htmlFor="">Price</label>
                        <input type="number" step="0.01" name='price' onChange={handleInputChange} value={updatedProduct.price}/>
                    </div>
                        {
                            errors.price?
                            <p className='errors'>{errors.price.message}</p>:
                            null
                        }
                    <div className='inputGroup'>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="30" rows="10" onChange={handleInputChange} value={updatedProduct.description}></textarea>
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

export default EditForm;
