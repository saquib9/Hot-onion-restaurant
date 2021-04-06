import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css'

const MenuItem = (props) => {
    const {name, brief, id, category, price, img} = props.item
    const type = props.type

    return (  
        <>
        {
            (category === type) &&
            <Link to={ '/details/'+id }>
                <div className='card'>
                    <div>
                            <div>
                                <img src={img} alt=""/>
                            </div>
                            <div>
                                <h4>{name}</h4>
                                <h5 id='description'>{brief}</h5>
                                <h4>id :{id} price : ${price}</h4>
                            </div>
                    </div>
                </div> 
                </Link>
        }
        </>
    );
};

export default MenuItem;