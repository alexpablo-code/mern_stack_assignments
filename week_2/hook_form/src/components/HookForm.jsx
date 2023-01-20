import React, {useState} from 'react';

const HookForm = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPass, setConfirmPass] = useState("");
    const[submitted, setSubmitted] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const [user, setUser] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    




    const createUser = (e) => {
        e.preventDefault();

        // const newUser = {firstName, lastName, email, password, confirmPass };

        console.log("Hi new user", user);

        setUser({
            firstName:"",
            lastName: "",
            email:"",
            password: "",
            confirmPassword:"",
        });

        // setFirstName("");
        // setLastName("");
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");

        setSubmitted(true);
    };

    // const formMessage = () => {
    //     if(submitted) {
    //         return "Thank you for submitting the form!";
    //     }
    //     else {
    //         return ("Welcome, please submit form");
    //     }
    // };

    // const validateLength = (e) => {
    //     setFirstName(e.target.value);
    //     if(e.target.value.length < 1){
    //         setError("Name is required!")
    //     }
    //     else if(e.target.value.length < 3) {
    //         setError("Must be at least 3 characters long!")
    //     }
    //     else {
    //         setError("");
    //     }
    // }


    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const confirmPass = () => {
        if ((user.confirmPassword.length < 8) && (user.confirmPassword !== user.password)){
            setPasswordError("Password must be at least 8 characters long and not the same")
            return false;
        }
        else if (user.confirmPassword.length < 8){
            setPasswordError("Password must be at least 8 characters long")
            return false;
        }
        else if(user.confirmPassword !== user.password){
            setPasswordError("passwords do not match")
            return false;
        }
        else{
            setPasswordError("")
            return true;
        }
        }


    return (
        <div>
            <form onSubmit={createUser}>
                {
                    submitted ?
                    <h4>Thankyou for submitting the form!</h4>:
                    <h2>Welcome, please submit form</h2>
                }
                <div>
                    <label htmlFor="fName">First Name:</label>
                    <input type="text" name="firstName"  value={user.firstName} onChange={onChangeHandler}/>
                    {
                        user.firstName && user.firstName.length < 2 ?
                        <p>First name must be at least 3 characters long!</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="fName">Last Name:</label>
                    <input type="text" name="lastName"  value={user.lastName} onChange={onChangeHandler}/>
                    {
                        user.lastName && user.lastName.length < 2 ?
                        <p>Last name must be at least 3 characters long!</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="fName">Email:</label>
                    <input type="text" name="email"  value={user.email} onChange={onChangeHandler}/>
                    {
                        user.email && user.email.length < 5 ?
                        <p>Email must be at least 5 characters long!</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="fName">Password:</label>
                    <input type="password" name="password"  value= {user.password} onChange={onChangeHandler}/>
                    {
                        user.password && user.password.length < 8 ?
                        <p>Password must be at least 8 characters long!</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="fName">Confirm Password:</label>
                    <input type="password" name="confirmPassword"  value= {user.confirmPassword} onChange={onChangeHandler}/>
                    {
                        
                        user.confirmPassword && user.confirmPassword.length < 8 || user.password !== user.confirmPassword ?
                        <p>Invalid Password</p>:
                        ''
                    }
                </div>
                <input type="submit"/>
                {/* {
                    validateLength ?
                    <input type="submit" disabled /> :
                } */}
            </form>
            <div>
                <h4>Your Form Data</h4>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.confirmPassword}</p>
            </div>
        </div>
    );
};

export default HookForm;