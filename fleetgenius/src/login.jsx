import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" id="email" name="email" placeholder="abc@example.com" required />
                <label htmlFor="password">Password</label>
                <input value={pass} type="password" id="password" name="password" required />
                <button type="submit" id="loginbutton">Login</button>
            </form>
            <button  onClick={()=>props.onFormSwitch('register')} id="toggle-login">Don't have an account? Sign up</button>
        </div>
    );
}
