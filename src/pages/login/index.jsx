import React from 'react'
import './_login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="/jettflix.png" alt=""/>
                <button>Login</button>
                <button>Login with Google</button>
                <p>This project is made using <a href="Themoviedb.org">T M D B</a> data API.</p>
            </div>
        </div>
    )
}

export default Login
