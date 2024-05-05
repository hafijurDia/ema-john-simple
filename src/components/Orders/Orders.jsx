import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan,faCreditCard,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Order.css';


const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);
    
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
  
    }
    
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    return (
        <div className='shop-container'>
            <div className="product-review">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}>
                <Link className='cart-link' to="/checkout">
                <button className='btn-clear-cart btn-checkout'>
                    <span>Proceed Checkout</span>
                    <FontAwesomeIcon icon={faCreditCard} />
                </button>
                </Link>
                 
                </Cart>
            </div>
        </div>
    );
};

export default Orders;