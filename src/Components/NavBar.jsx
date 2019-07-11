import React from 'react';
import SearchBar from './SearchBar';
import './Book.css';

const NavBar = ({ onFormSubmit }) => {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">
                <h3 className="logo">National BookStore</h3>
            </a>
            <SearchBar onFormSubmit={onFormSubmit}/>
        </nav>

    )
}

export default NavBar;