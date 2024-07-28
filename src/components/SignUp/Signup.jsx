import React, { useContext, useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

function Signup() {
      const [error, setError] = useState('');
      const {createUser} = useContext(AuthContext);

      const handleSignup = event =>{
            event.preventDefault();
            setError('');
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const confirmPassword = form.confirmPassword.value;
            console.log(email, password);
            console.log('somethig new update')

            if (password !== confirmPassword) {
                  setError('Password not Matched!')
            }
            if (password.length < 6) {
                  setError('Password must be 6 characters')
            }
            createUser(email, password)
            .then((result) => {
                  // Signed up 
                  const loggedUser = result.user;
                  console.log(loggedUser);
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setError(errorMessage);
                  // ..
                });
      }

  return (
    <div className="main">
            <h1>Sign Up</h1>
            <p style={{color:"red"}}>{error}</p>
            <form className='' onSubmit={handleSignup}>
                  <label htmlFor="first">
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
                         <label htmlFor="password">
                        Confirm Password:
                  </label>
                 
                    <input type="password"
                         id="confirmPassword" 
                         name="confirmPassword"
                         placeholder="confirm your Password" />

                  <div className="wrap">
                        <button className='full' type="submit">
                              Sign Up
                        </button>
                  </div>
            </form>
            <p>Already have an account?
                 <Link to='/login'>Login</Link>
            </p>
            <div className="wrap">
                        <button className='full' type="submit">
                              Login with Google
                        </button>
                  </div>
      </div>
  )
}

export default Signup