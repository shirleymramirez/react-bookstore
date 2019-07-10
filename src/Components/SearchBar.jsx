import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Search Books</label>
                        <input type="text" className="form-control" name="book"></input>
                    </div>
                    <div className="form-group">
                        <label>Search Author</label>
                        <input type="text" className="form-control" name="author"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;