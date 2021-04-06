import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import MenuItem from '../MenuItem/MenuItem';
import MenuNav from '../MenuNav/MenuNav'
import './Menu.css'

const Menu = () => {
    const [item, setItem] = useState(fakeData)
    const [type, setType] = useState('Lunch')

    return (
        <>
        <MenuNav type = {type} setType = {setType} ></MenuNav>

        <div className='menu'>
            <div>
            {
               item.map( i => <MenuItem 
                key = { i.id }
                type = { type }
                item = { i } 
                > </MenuItem>) 
            }
            </div>
            <Link to ='/cart'>
                <button className='mainButton'> Proceed to Cart </button> 
            </Link>
        </div>
        </>
    );
};

export default Menu;