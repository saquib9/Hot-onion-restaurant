import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Boss } from '../../App';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Calculator from '../Calculator/Calculator';
import ShipmentForm from '../ShipmentForm/ShipmentForm';
import './Cart.css'

const Cart = () => {

    const [address, setAddress] = useState()

    console.log('adrress paisi : ' ,address)

    return (
        <div id='cartPage'>
            <div className='half'>
                  <ShipmentForm setAddress={setAddress}></ShipmentForm>
            </div>

            <div className='half'>
                  <Calculator address={address}></Calculator>
            </div> 
        </div>
    );
};

export default Cart;