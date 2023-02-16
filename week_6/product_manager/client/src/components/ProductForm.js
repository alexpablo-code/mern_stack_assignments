import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState();
    const[description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/addproduct', {
            title, price, description
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log("Something went wrong", err)
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
                    <div className='inputGroup'>
                        <label htmlFor="">Price</label>
                        <input type="number" step="0.01" name='price' onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="30" rows="10" onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                    <div className='objCenter'>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default ProductForm;
