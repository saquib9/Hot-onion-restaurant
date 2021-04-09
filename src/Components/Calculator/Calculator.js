import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Address, Boss } from '../../App';
import './Calculator.css'

const Calculator = () => {

    const [address, setAddress] = useContext(Address)
    const [cart] = useContext(Boss)

    let total = 0;
    let subTotal = 0;
    let tax = 0;
    const deliveryCharge = 2;
    let unit = 0;

    cart.map(a => {
        unit = unit + a.quantity;
        subTotal = subTotal + a.price * a.quantity;
        tax = subTotal * 0.15;
        total = subTotal + tax + deliveryCharge;
    })

    const history = useHistory()

    const handleProceedCheckout = () => {
        history.push('/orderOnTheWay');
    }



    return (
        <div id='memo'>   

                <p>From <strong>Gulshan Plaza Restaurant, Gulshan</strong></p>
                <p>Arriving in 20-30 mins</p>
                <p>To <strong>{address}</strong> </p>

                {
                    cart.map( f => 
                    <div className='smallBox'> 
                        <img src={f.img} alt=""/>
                        
                        <br/>
                        <br/>
                        <div className='quantity'>
                            <h3>Quantity : {f.quantity}</h3>
                            <Link to={'/details/'+f.id}>
                            <h5><button className='smallButton'> Change Quantity </button></h5>
                            </Link>
                        </div>

                        <h5>{f.name} </h5> 
                        <h3>${f.price}</h3>
                        <p><small>Delivery Fee</small></p>
                        
                    </div>)
                }
                
                <div id='calculation'>
                    <h3>Subtotal - {unit} item  <span style={{float:'right'}}> ${subTotal} </span></h3>
                    <h3>Tax  <span style={{float:'right'}}> ${tax} </span></h3>
                    <h3>Delivery  <span style={{float:'right'}}> ${deliveryCharge} </span></h3>
                    <h3>Total  <span style={{float:'right'}}> ${total} </span></h3>

                    {(address) 
                        ? 
                        // <Link to={'/orderOnTheWay'}></Link>
                            <h1> <button style={{width : '100%'}} className='submitButton' onClick={handleProceedCheckout}>Place Order</button></h1>
                        
                        : <h1> <button style={{width : '100%', backgroundColor:'gray'}} className='submitButton' disabled>Place Order</button></h1>
                         
                    }
                    
                </div>
                    

    </div>
    );
};

export default Calculator;