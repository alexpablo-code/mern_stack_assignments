import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="navBar">
                <div className='siteNameContainer'>
                    <h1><Link to={'/'}>Grocery</Link></h1>
                </div>
                <div className='objCenter'>
                    <ul className='linkList'>
                        <li><Link to={'/addproducts'}>Add Product</Link></li>
                        <li><Link to={'/allproducts'}>Browse Products</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Nav;
