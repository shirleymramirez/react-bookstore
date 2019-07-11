import React from 'react';

class CartItem extends React.Component {
    render() {
        let totalPrice = 0;
        const cartItem = this.props.cartItems.map(item => {
            totalPrice += item.price * item.inCart;
            return (
                <div>
                    <p>Book Title: {item.title}</p>
                    <p>Author: {item.author}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.inCart}</p>
                </div>
            )
        })
        return (
            <div>
                <h2>Shopping Cart</h2>
                <h3>Total: ${totalPrice}</h3>
                <div>
                    {totalPrice !== 0 ? cartItem : 'No Item in your shopping cart.'}
                </div>
            </div>
        )
    }
}

export default CartItem;