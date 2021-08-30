import React from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="sign-in">
            <h2>Sign Up</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="First Name"
                />
                <input 
                    type="text" 
                    placeholder="Last Name"
                />
                <input 
                    type="text" 
                    placeholder="Photo URL (optional)"
                />
                <input 
                    type="email" 
                    placeholder="Email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                />
                <button 
                    type="submit"
                > 
                Sign Up
                </button>
            </form>
            <h4>Already on ChatApp? <Link to='/signin'>Sign In</Link></h4>
        </div>
    )
}


export default SignUp;