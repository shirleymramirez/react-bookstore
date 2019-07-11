import React from 'react';
import NavBar from './NavBar'
import BookItem from './BookItem';
import CartItem from './CartItem';
import './Book.css';

class Body extends React.Component {
    state = {
        books: [],
        searchItem: ""
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8082/api/books');
        const json = await response.json();
        this.setState({
            books: json.map(book => {
                return {
                    ...book,
                    inCart: 0
                }
            })
        });
    }

    onSearchSubmit = str => {
        this.setState(prevState=> {
            return { searchItem: str };
        })
    }

    addItemToCart = (id) => {
        this.setState(prevState => {
            return {
                books: prevState.books.map(book => {
                    return {
                        ...book,
                        inCart: book.id === id ? book.inCart + 1 : book.inCart
                    }
                })
            }
        })
    }

    render() {
        const  cartItems = this.state.books.filter(item => {
            return item.inCart > 0
        });

        const displayBooks = this.state.books.filter(book => {
            return (
                book.title.toLowerCase().includes(this.state.searchItem.toLowerCase()) ||
                book.author.toLowerCase().includes(this.state.searchItem.toLowerCase())
            );
        });

        return(
            <div className="main-container">
                <NavBar onFormSubmit={this.onSearchSubmit}/>

                <div className="container">
                    <div className="booklist">
                        <h1 style={{ textAlign: 'center' }}>Book Lists</h1>
                            {displayBooks.map( book => {
                                return (
                                    <BookItem
                                        key = { book.id }
                                        onAddClick = {() => this.addItemToCart(book.id)}
                                        {...book}
                                    />
                                )
                        })}
                    </div>
                    <div>
                        <CartItem cartItems={cartItems} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Body;