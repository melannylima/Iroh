import React from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {
    return (
        <>
            <form onSubmit={props.loginUser}>
                <h3>Login</h3>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" name="username" />
                <label htmlFor="name">Email: </label>
                <input type="text" id="email" name="email" />
                <label htmlFor="name">Password: </label>
                <input type="text" id="password" name="password" />
                <input type="submit" value="login" />
            </form>
            <Link to="/register" >Register</Link>
        </>
    )
}

export default Login;