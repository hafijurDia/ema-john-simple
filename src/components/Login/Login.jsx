import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

      const {signIn} = useContext(AuthContext);
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);

      const handleLogin = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            signIn(email, password)
            .then((result) => {
                  // Signed in 
                  const user = result.user;
                  // ...
                  setSuccess('Loging successfull!');
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setError(errorMessage);
                });
      }

    return (
        <div className="main">
            <h1>Login</h1>
            <p style={{color:'red'}}>{error}</p>
            <p style={{color:'green'}}>{success}</p>
            <form onSubmit={handleLogin}>
                  <label htmlFor="email">
                        Email:
                  </label>
                  <input type="email" 
                         id="email" 
                         name="email" 
                         placeholder="Enter your email" required />

                  <label htmlFor="password">
                        Password:
                  </label>
                  <input type="password"
                         id="password" 
                         name="password"
                         placeholder="Enter your Password" required />
                    

                  <div className="wrap">
                        <button className='full' type="submit">
                              Login
                        </button>
                  </div>
            </form>
            <p>New to Ema-john?
                 <Link to='/signup' > Create an account</Link>
            </p>
            <div className="wrap">
                        <button className='full' type="submit">
                              Continue with Google
                        </button>
                  </div>
      </div>
    );
};

export default Login;