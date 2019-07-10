import React from 'react';
import BooksApi from '../apis/books';
import SearchBar from './SearchBar';
import BookList from './BookList';

class Body extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.onBookSubmit();
    }

    onBookSubmit = async book => {
        const response = await BooksApi.get("/", {
            params: {
                q: book
            }
        });

        this.setState({
            books: response.data.map(book => {
                return {
                    ...book,
                    inCart: 0
                }
            })
        });
    };


    render() {
        const bookList = this.state.books.map(book=> {
            return book
        })

        return(
            <div className="container">
                <SearchBar />
                <BookList bookList={ bookList }/>
            </div>
        )
    }
}

export default Body;