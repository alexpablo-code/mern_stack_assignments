import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="navBar">
                <div>
                    <h1>Grocery</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/addproducts'}>Add Product</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Nav;
