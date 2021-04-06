import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../PhotoFiles/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo}></img>
                    <Link id='highlight'>Sign Up</Link>
                    <Link>Log In</Link>
                    <Link>Cart</Link>
            </nav>
        </div>
    );
};

export default Header;