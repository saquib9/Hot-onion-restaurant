import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Boss } from '../../App';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Calculator from '../Calculator/Calculator';
import ShipmentForm from '../ShipmentForm/ShipmentForm';
import './Cart.css'

const Cart = () => {

<<<<<<< HEAD
    // const [address, setAddress] = useState()
=======
    const [cart] = useContext(Boss);
>>>>>>> c8688976602eef97dfdd14aeffa6f34ce304e363

    // console.log('adrress paisi : ' ,address)

    return (
        <div id='cartPage'>
            <div className='half'>
                  <ShipmentForm></ShipmentForm>
            </div>

            <div className='half'>
                  <Calculator></Calculator>
            </div> 
        </div>
    );
};

export default Cart;
