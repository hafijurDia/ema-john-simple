import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="main">
            <h1>Login</h1>
            <form>
                  <label for="first">
                        Email:
                  </label>
                  <input type="text" 
                         id="first" 
                         name="first" 
                         placeholder="Enter your email" required />

                  <label for="password">
                        Password:
                  </label>
                  <input type="password"
                         id="password" 
                         name="password"
                         placeholder="Enter your Password" required />
                    

                  <div className="wrap">
                        <button type="submit"
                                onclick="solve()">
                              Login
                        </button>
                  </div>
            </form>
            <p>New to Ema-john?
                 <Link to='/signup' > Create an account</Link>
            </p>
            <div className="wrap">
                        <button type="submit"
                                onclick="solve()">
                              Continue with Google
                        </button>
                  </div>
      </div>
    );
};

export default Login;