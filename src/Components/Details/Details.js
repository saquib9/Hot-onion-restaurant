import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Boss } from '../../App';
import fakeData from '../../fakeData/fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import './Details.css'

const Details = () => {

    const [cart, dbUpdated, setDbUpdated] = useContext(Boss)

    const { itemKey } = useParams()
    const foodPlate = fakeData.find( a => a.id == itemKey )
    

    const increase = () => {
        const a = document.getElementById('quantity').innerText
        document.getElementById('quantity').innerText = parseInt(a) + 1
    }
    const decrease = () => {
        const a = document.getElementById('quantity').innerText
        if(parseInt(a) !== 0){
        document.getElementById('quantity').innerText = parseInt(a) - 1
        }
    }

    const handleAddItem = () => {
        const a = document.getElementById('quantity').innerText
        const b = parseInt(a)
        addToDatabaseCart(foodPlate.id, b)
        setDbUpdated(dbUpdated + 123)

        // let oldCart = [];
        // if( cart != [] ){
        //     cart.map( f => {
        //         if(f.id != foodPlate.id){
        //             oldCart.push(f)
        //         }
        //     })
        // }
            
        // foodPlate.quantity = b;
        // const updatedCart = [...oldCart, foodPlate]
        // setCart(updatedCart)
    }

    return (
        <div className='details'>
            <img src={foodPlate.img} alt=""/>

            <div className='reads'>
                <h2>This is details {itemKey}</h2>
                <h1>Item name : {foodPlate.name}</h1>
                <h3 style={{color:'gray'}}>{foodPlate.description}</h3>
                <h1>${foodPlate.price} <span style={{fontSize:'18px'}}> Per dish</span></h1>
                
                <h2 className='quantityPlace'> 
                    <span onClick={increase}> + </span> 
                    <span id ='quantity'> 1 </span>  
                    <span onClick={decrease}> - </span>
                </h2>

                <button 
                    onClick={handleAddItem}
                    className='mainButton'
                    >Add</button>
            </div>
        </div>
    );
};

export default Details;