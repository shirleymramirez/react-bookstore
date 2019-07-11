import React from 'react';
import './Book.css';

function BookItem({ id, title, author, description, price, pages, onAddClick}) {
    return (
        <div className="card-body bookContainer">
            <div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{author}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">Price: ${price}</p>
                <p className="card-text">Number of pages: {pages}</p>
            </div>
            <div>
                <button onClick={onAddClick} value={id}>Add to Cart</button>
            </div>
        </div>
    )
}
export default BookItem;