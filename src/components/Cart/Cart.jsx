import React from 'react';
import './Cart.css';


const Cart = ({cart}) => {
    // const cart = Props.cart -- option 1
    // const {cart} = Props --option 2
    let total = 0;
    let totalShipping = 0;

    console.log(cart);

    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className="order-summary">
            <h3 className='cart-title'>Order Summary</h3>
                <div className="cart-details">
                    <p>Selected items: {cart.length}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Cost: ${totalShipping} </p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <h4>Total: ${grandTotal.toFixed(2)}</h4>
                </div>
        </div>
    );
};

export default Cart;