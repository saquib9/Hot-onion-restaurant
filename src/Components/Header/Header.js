import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Address, Identity, UserContext } from '../../App';
import logo from '../../PhotoFiles/logo.png'
import './Header.css'

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [address, setAddress] = useContext(Address)

    const logOutHandler = () => {
        setLoggedInUser({});
        setAddress();
    }


    return (
        <div>
            <nav className='header'>
                    <img src={logo}></img>
{/* 
                    {
                    (user.displayName) ? <button id='highlight' onClick={setLoggedInUser({})}>Sign Out</button>
                    : <Link to='/login' id='highlight'>Sign In</Link>
                    } */}

                    {
                    (loggedInUser.displayName) ? <Link to='/' id='highlight' onClick={logOutHandler}>Sign Out</Link> 
                    : <Link to='/login' id='highlight'>Sign In</Link>
                    }


                    <Link to='/'>Home</Link>
                    <Link to='/cart'>Cart</Link>

                    {
                        (loggedInUser.displayName) && <Link style={{color:'rgb(251, 252, 199)'}}>Hello, {loggedInUser.displayName}</Link>
                    }
                    
            </nav>
        </div>
    );
};

export default Header;