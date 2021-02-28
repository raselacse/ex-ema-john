import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const cart = props.cart;
    let total = 0;
    cart.forEach(product => {
        total = Math.round(total + product.price);
    });
    const shipping = Math.round(total * 0.02);
    const beforeTax = total + shipping;
    const tax = Math.round(beforeTax * .1);
    const orderTotal = tax + beforeTax;

    return (
        <>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Items ordered: {props.cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>${total}</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td>${shipping}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${beforeTax}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td>${tax}</td>
                        </tr>
                        <tr>
                            <td>Order Total:</td>
                            <td>${orderTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <button>Review Your Order</button>
            </div>
        </>
    );
};

export default Cart;