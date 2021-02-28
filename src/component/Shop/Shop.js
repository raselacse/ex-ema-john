import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10)

    const [cart, setCart] = useState([])

    const handleProduct = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product products ={product} handleProduct={handleProduct} key={product.key}></Product>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;