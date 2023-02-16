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
            <div>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" name='title' onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Price</label>
                        <input type="number" name='price' onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="30" rows="10" onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </section>
    );
}

export default ProductForm;
