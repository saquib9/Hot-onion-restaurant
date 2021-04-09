
import { useContext } from 'react';
import { Address, UserContext } from '../../App';
import './OrderOnWay.css'

const OrderOnWay = () => {

    const [address, setAddress] = useContext(Address)
    const [loggedInUser] = useContext(UserContext) 


    return (
        <div className='onWay'>
            <div id='map'>
                <img src="https://i.ibb.co/qNTxHSj/map.webp" alt=""/>
            </div>
            <div className='orderInfo'>

                <div id='bike'>
                    <img src="https://i.ibb.co/qNNBbwR/bike.png" alt=""/>
                </div>

                <div id='location'>
                    <span id='line'></span>
                    <h4><span className='dot'></span> Your location</h4>
                    <h5 style={{marginLeft:'15px', color:'gray'}}> To : {address} </h5>
                    <br/>
                    <h4><span className='dot'></span> Shop address</h4>
                    <h5 style={{marginLeft:'15px', color:'gray'}}>From : Police Plaza, Gulshan, Dhaka</h5>
                </div>

                <div id='time'>
                    <h2>09:30</h2>
                    <h6>Estimated Delivery Time</h6>
                </div>

                <div id='rider'>
                    <img src="https://i.ibb.co/NySTFtn/helmet.png" alt="" style={{float:'left', margin:'12px 10px', width:'55px'}}/>
                    <h3 style={{float:'left', marginTop:'25px'}}> {loggedInUser.displayName} <span style={{fontSize:'10px'}}>is your rider.</span></h3>
                </div>
                <button className='submitButton' style={{width:'89%'}} >Contact Rider</button>
            </div>

        </div>
    );
};

export default OrderOnWay;