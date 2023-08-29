import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (Props) => {
    const {id, name, img, ratings, seller,price} = Props.product;

    const addToCart = Props.addToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="details">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button 
            className='btn-cart' 
            onClick={() => addToCart(Props.product)}>Add to Cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
            
        </div>
    );
};

export default Product;