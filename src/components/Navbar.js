import React from 'react';
import { Link } from '@reach/router'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="uk-navbar">
            <div className="uk-navbar-center">
                <div className="uk-navbar left-navbar">
                    <Link className="navbar-item uk-navbar-item" to="ideas">Explore Ideas</Link>
                    <Link className="navbar-item uk-navbar-item" to="builders">Find Builders</Link>
                    <Link className="navbar-item uk-navbar-item" to="create">Start An Idea</Link>
                </div>
                <Link to="/" className="navbar-logo uk-navbar-center uk-logo">incub8</Link>
                <div className="uk-navbar right-navbar">
                    <Link className="navbar-item uk-navbar-item" to="register">Register</Link>
                    <Link className="navbar-item uk-navbar-item" to="login">Login</Link>
                </div>
            </div>
        </nav>
    )
}


export default Navbar