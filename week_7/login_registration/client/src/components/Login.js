import {useState} from 'react';
import{Link, useNavigate} from 'react-router-dom';
import axios from  'axios';


const Login = () => {
    const navigate = useNavigate();
    const[user, setUser] = useState({
        email:'',
        password: ''
    })

    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const loginHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className='bg-img'>
            <form className='col-4 mx-auto user-form' onSubmit={loginHandler}>
                <h2>Login</h2>
                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name="email" value={user.email} onChange={onChangeHandler}/>

                <label className='form-label'>Password:</label>
                <input className='form-control' type="text" name="password" value={user.password} onChange={onChangeHandler}/>
                <button className='btn btn-dark mt-3'>Login</button><br/>
                <Link to={'/'} className='text-white' >Don't have an account? Click here to sign up</Link>
            </form>
        </div>
    );
}

export default Login;
