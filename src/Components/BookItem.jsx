import React from 'react';
import './BookItem.css';

function BookItem({id, name, author, pages, quantity}) {
    return (
        <div className="card-body bookContainer">
            <h5 className="card-title">Book Title: {name}</h5>
            <p className="card-text">Author: {author}</p>
            <p className="card-text">Number of Pages: {pages}</p>
            <p className="card-text">{quantity}</p>
        </div>
    )
}

export default BookItem;

