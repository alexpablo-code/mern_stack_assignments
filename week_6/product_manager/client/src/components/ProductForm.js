import {useState, useEffect} from 'react';
import axios from 'axios'

const ProductForm = () => {
    return (
        <div>
            <form onSubmit={}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProductForm;
