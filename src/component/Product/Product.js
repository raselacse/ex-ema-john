import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    const features = props.products.features;
    const star = props.products.star;
    return (
        <div className="product">
            <div className="product-img">
                <img src={props.products.img} alt={props.products.img}/>
            </div>
            <div className="product-info">
                <Link to={"product/"+props.products.key}><h4>{props.products.name}</h4></Link>
                <p><small>by: {props.products.seller}</small></p>
                <div className="product-content">
                    <div className="product-details">
                        <p>${props.products.price}</p>
                        <p><small>only {props.products.stock} left in stock - order soon</small></p>
                        {
                            props.showAddToCart && <button onClick={() => 
                                                        props.handleProduct(props.products)}>
                                                        <FontAwesomeIcon icon={faShoppingCart}/>add to cart
                                                    </button>
                        }
                    </div>
                    <div className="features">
                    <h5>Rating: {star}</h5>
                        <h3>Features</h3>
                        <ul>
                            {
                                features.map(features => <li>{features.description}: {features.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;