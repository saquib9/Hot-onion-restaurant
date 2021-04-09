import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './ShipmentForm.css'
import { Address } from '../../App'

const ShipmentForm = () => {

    const [address, setAddress] = useContext(Address)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    

    return (
 
      <form 
      className='shipForm'
      onSubmit={handleSubmit( data => {
          console.log(data);
          setAddress(`${data.house}, ${data.area}`)
      })} >

        <h3 style={{borderBottom:'2px solid lightGray', paddingBottom:'15px'}} >Please Provide Delivery Details</h3>

        <input defaultValue="" {...register("name", { required: true })} placeholder='Name of the person to receive'/>
        {errors.name && <small className='error'>Your name is required</small>}
        
        <input defaultValue="" {...register("contactNumber", { required: true, maxLength: 11, minLength: 11 })} placeholder='Your Contact Info (Without +88)'/>
        {errors.contactNumber && <small className='error'>Your contact number is required</small>}
        
        <input {...register("area", { required: true })} placeholder='Your Area, Road No'/>
        {errors.area && <small className='error'>Your address is required</small>}
        
        <input {...register("house", { required: true })} placeholder='House No, Flat No'/>
        {errors.house && <small className='error'>Your address is required</small>}

        <input {...register("extra", {})} placeholder='Additional Info or Message'/>      
        
        <button className='submitButton' style={{width : '106%'}} type="submit"> Confirm Information </button>
      </form>

    );
};

export default ShipmentForm;