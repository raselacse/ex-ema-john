import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key} = props.product;
    return (
        <>
            <div className="product">
                <div className="product-info">
                    <h4>{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <button onClick={()=>props.handleRemove(key)}>Remove</button>
                </div>
            </div>
        </>
    );
};

export default ReviewItem;