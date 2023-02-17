import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const DetailsCard = ({product}) => {
    const navigate = useNavigate();

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/allproducts/delete/${id}`)
            .then((res) => {
                console.log("item deleted", res)
                navigate('/allproducts');
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <section className='sectionContainer'>
            <div className='detailsCard'>
                <h5 className="marginY-10">{product.title}</h5>
                <p className="marginY-10"> {product.description}</p>
                <p className="marginY-10">${product.price}</p>
                <div className="actionsBox objCenter">
                    <Link to={`/allproducts/${product._id}/edit`}>Edit</Link>
                    <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
                </div>

            </div>
            
        </section>
    );
}

export default DetailsCard;
