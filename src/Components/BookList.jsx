import React from 'react';
import BookItem from './BookItem';
import './BookItem.css';

function BookList({ bookList }) {
    return (
        <div>
            <h1>Book Lists</h1>
            <div className="main">
                {bookList.length > 0 && bookList.map(book => {
                    return <BookItem 
                        key={book.id} 
                        id={book.id} 
                        name={book.title} 
                        author={book.author} 
                        pages={book.pages}
                        quantity={book.inCart}
                    />
                })}
            </div>
        </div>
    )
}

export default BookList;