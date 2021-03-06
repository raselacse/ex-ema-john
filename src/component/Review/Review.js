import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])
    const handleRemove = productKey =>{
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(()=>{
        const saveCart = getDatabaseCart()
        const ProductKeys = Object.keys(saveCart);
        const cardProducts = ProductKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cardProducts);
    },[])
    return (
        <>
            {
                cart.map(pd => <ReviewItem 
                                    product={pd} 
                                    handleRemove={handleRemove}
                                    key={pd.key}>
                                </ReviewItem>)
            }
        </>
    );
};

export default Review;