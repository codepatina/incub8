import React from 'react';
import { Link } from '@reach/router'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="uk-navbar" uk-navbar>
            <div className="uk-navbar-center">
                <div className="uk-navbar-center-left">
                    <Link className="uk-navbar-item" to="/ideas">Explore Ideas</Link>
                    <Link className="uk-navbar-item" to="/builders">Find Builders</Link>
                </div>
                <Link to="/" className="navbar-logo uk-navbar-item uk-logo">incub8</Link>
                <div className="uk-navabar-center-right"></div>
            </div>
        </nav>
    )
}


export default Navbar