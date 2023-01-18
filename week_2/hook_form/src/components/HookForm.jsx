import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPass };

        console.log("Hi", newUser);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };


    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="fName">First Name:</label>
                    <input type="text" name="" id="" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="fName">Last Name:</label>
                    <input type="text" name="" id="" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="fName">Email:</label>
                    <input type="text" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="fName">Password:</label>
                    <input type="text" name="" id="" value= {password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="fName">Confirm Password:</label>
                    <input type="text" name="" id="" value= {confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                </div>
                <input type="submit" />
            </form>
            <div>
                <h4>Your Form Data</h4>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPass}</p>
            </div>
        </div>
    );
};

export default HookForm;