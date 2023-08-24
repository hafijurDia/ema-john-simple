import React from 'react';
import './Product.css'

const Product = (Props) => {
    const {id, name, img, ratings, seller,price} = Props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="details">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button className='add-to-cart'>Add to Cart</button>
            
        </div>
    );
};

export default Product;