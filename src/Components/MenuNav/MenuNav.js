import React from 'react';
import './MenuNav.css'

const MenuNav = (props) => {

    const type  = props.type;
    const setType  = props.setType;
    
    return (
        <div className='MenuNav'>
            <nav>
                {type === 'Breakfast' 
                ? <h2 className='selected' onClick={()=> setType('Breakfast')}>Breakfast</h2>
                : <h2 onClick={()=> setType('Breakfast')}>Breakfast</h2>}

                {type === 'Lunch' 
                ? <h2 className='selected' onClick={()=> setType('Lunch')}>Lunch</h2>
                : <h2 onClick={()=> setType('Lunch')}>Lunch</h2>}
                
                {type === 'Dinner' 
                ? <h2 className='selected' onClick={()=> setType('Dinner')}>Dinner</h2>
                : <h2 onClick={()=> setType('Dinner')}>Dinner</h2>}
            </nav>
        </div>
    );
};

export default MenuNav;