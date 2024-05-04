import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (Props) => {
    const {id, name, img, price} = Props.product;
    console.log(Props.product);
    return (
        <div className='review-item'>
            <div className='product-thum'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <div>
                    <p>{name}</p>
                    <p>Price: <span style={{color:'#FF9900'}}>${price}</span> </p>
                    <p>Shipping Charge:  <span style={{color:'#FF9900'}}>$5</span></p>
                </div>
                <div>
                    <button className='delete-icon'><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewItem;