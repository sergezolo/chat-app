import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h1>ChatApp</h1>
            </div>
            <div className="header-right">
                <button className="header-logout-button">Sign Out</button>
            </div>
        </div>
    )
}

export default Header;