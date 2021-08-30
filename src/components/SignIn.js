import React from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                />
                <button 
                    type="submit"
                > 
                Sign In
                </button>
            </form>
            <h4>New to ChatApp? <Link to='/signup'>Join Now</Link></h4>
        </div>
    )
}

export default SignIn;