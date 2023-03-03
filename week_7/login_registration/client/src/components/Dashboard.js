import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='bg-dash'>
            <h1 className='text-white py-5'>Welcome to Konoha</h1>
            <button className='btn btn-danger' onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;
