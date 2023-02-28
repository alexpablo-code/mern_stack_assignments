import {useState} from 'react';
import {Link} from 'react-router-dom';



const Register = () => {
    const[userReg, setUserReg] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }


    return (
        <div className='bg-img'>
            <form className='col-4 mx-auto user-form'>
                <h2>Register</h2>
                <label className='form-label'>First Name:</label>
                <input className='form-control' type="text" name="firstName" value={userReg.firstName} onChange={onChangeHandler}/>

                <label className='form-label'>Last Name:</label>
                <input className='form-control' type="text" name="lastName" value={userReg.lastName} onChange={onChangeHandler}/>

                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name="email" value={userReg.email} onChange={onChangeHandler}/>

                <label className='form-label'>Password:</label>
                <input className='form-control' type="text" name="password" value={userReg.password} onChange={onChangeHandler}/>

                <label className='form-label'>Confirm Password:</label>
                <input className='form-control' type="text" name="confirmPassword" value={userReg.confirmPassword} onChange={onChangeHandler}/>

                <button className='btn btn-dark mt-3'>Register</button> <br/> 
                <Link className='text-white' to={'/login'}>Already have an account? Click here to login</Link>
            </form>
            
        </div>
    );
}

export default Register;
