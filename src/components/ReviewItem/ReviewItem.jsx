/* eslint-disable react/prop-types */
import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, name, img, price, quantity} = product;
    
    return (
        <div className='review-item'>
            <div className='product-thum'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <div>
                    <p>{name}</p>
                    <p>Price: <span style={{color:'#FF9900'}}>${price}</span> </p>
                    <p>Order quantity:  <span style={{color:'#FF9900'}}>{quantity}</span></p>
                </div>
                <div>
                    <button className='delete-icon' onClick={()=>handleRemoveFromCart(id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
            
        </div>
    );
};


export default ReviewItem;