import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../PhotoFiles/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo}></img>
                    <Link to='/login' id='highlight'>Sign In</Link>
                    <Link to='/'>Home</Link>
                    <Link to='/cart'>Cart</Link>
            </nav>
        </div>
    );
};

export default Header;