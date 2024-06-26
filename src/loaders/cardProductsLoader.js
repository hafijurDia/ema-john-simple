import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await loadedProducts.json();
    
    //if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for( const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);

        }
    }


    // if i need to return two things 
    //return [products, savedCart]
    // another option
    // return {products, savedCart}

    return savedCart;

}

export default cartProductsLoader;