import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = {username, email, password};
        // this is written in property value shorthand
        // instead of writing ->
        // const newUser = {
        //    username: username,
        //    email: email,
        //    password: password
        // };
        console.log("Welcome", newUser);

        setUsername("");
        setEmail("");
        setPassword("");
        // we are setting the variables back to nothing so it clears it from our form after submitting

    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" value= {username} onChange={ (e) => setUsername(e.target.value) } />
                {/* we are setting value = to variable to clear form after submitting */}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value= {email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value= {password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            <p>Form info: {username}, {email}, {password}</p>
        </form>
    );
};
    
export default UserForm;
