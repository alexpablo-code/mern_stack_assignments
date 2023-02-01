import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <>
        <h1>Page not Found</h1>
        <Link to="/home">Home</Link>
        </>
    );
}

export default NotFound;