import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {key} =useParams();
    const product = fakeData.find(pd => pd.key === key)
    return (
        <>
            <Product showAddToCart={false} products={product}></Product>
        </>
    );
};

export default ProductDetails;