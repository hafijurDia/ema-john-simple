import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan,faCreditCard,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(() => { 
        const storedCart = getShoppingCart();
        const saveCart = [];
        // Loop through each item in the stored cart
        for (const id in storedCart) {
            // Find the product by id in the products array
            const addedProduct = products.find(product => product.id === id);
            // Check if the product exists
            if (addedProduct) {
                // Get quantity of product from stored cart
                const quantity = storedCart[id];
                // Set quantity property on the product
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
                // Log the modified product
                console.log(addedProduct);
            } 
        }
        setCart(saveCart);
    }, [products]);

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const addToCart = (product) => {
        let newCart = [];
        //const newCart = [...cart, product];
        //if product doesn't exist in the cart, then set quantity = 1;
        //if product exist in the cart, then set quantity by 1;
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist];
        }
       setCart(newCart);
       addToDb(product.id);
    }
    const obj = {name :'jack',age:27}
    const a= 'name' in obj;
    console.log(a)
    return (
        <div className='shop-container'>
            <div className="shop-wrap">
                {
                    products.map(product => 
                    <Product 
                        key={product.id} 
                        product={product}
                        addToCart={addToCart}
                        >
                        </Product> )
                }
            </div>
            <div className='cart'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}>

                <Link className='cart-link' to="/orders">
                <button className='btn-clear-cart btn-checkout'>
                    <span>Review Orders</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </Link>
                
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
