import React from 'react';

function Footer(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {props.copyright} </a>
        </nav>
    )
}

export default Footer;