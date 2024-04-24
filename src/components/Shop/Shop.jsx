import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


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
    
                // Log the modified product
                console.log(addedProduct);
            } else {
                // Log a warning if product is not found
                console.warn(`Product with id ${id} not found in the products array.`);
            }
        }
    }, [products]);

    const addToCart = (product) => {
       const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id);
    }

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
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
