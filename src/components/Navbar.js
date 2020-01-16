import React from 'react';
import { Link } from '@reach/router'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="uk-padding-large uk-padding-remove-vertical" data-uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li>
                        <Link className="navbar-item uk-navbar-item uk-text-capitalize" to="ideas">Explore Ideas</Link>
                    </li>
                    <li>
                        <Link className="navbar-item uk-navbar-item uk-text-capitalize" to="builders">Find Builders</Link>
                    </li>
                    <li>
                        <Link className="navbar-item uk-navbar-item uk-text-capitalize" to="create">Start An Idea</Link>
                    </li>
                </ul>
            </div>
            <div className="uk-navbar-center">
                <Link to="/" className="navbar-logo uk-logo">incub8</Link>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li><Link className="navbar-item uk-navbar-item uk-text-capitalize" to="register">Register</Link></li>
                    <li><Link className="navbar-item uk-navbar-item uk-text-capitalize" to="login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar