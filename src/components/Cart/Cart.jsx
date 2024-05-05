/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan,faCreditCard,faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Cart = ({cart, handleClearCart, children}) => {
    // const cart = Props.cart -- option 1
    // const {cart} = Props --option 2
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    //console.log(cart);

    for (const product of cart) {
        //way 1
        //product.quantity = product.quantity || 1;
        //way 2
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className="order-summary">
            <h3 className='cart-title'>Order Summary</h3>
                <div className="cart-details">
                    <p>Selected items: {quantity}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Cost: ${totalShipping} </p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <h4>Total: ${grandTotal.toFixed(2)}</h4>
                </div>
                <button className='btn-clear-cart' onClick={()=>handleClearCart()}>
                    <span>Clear Cart </span>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>

                {children}
        </div>
    );
};

export default Cart;