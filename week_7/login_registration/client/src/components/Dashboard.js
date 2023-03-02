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
        <div>
            <h1>Welcome to Dashboard</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;
