import React from 'react';
import { Link } from '@reach/router'
import { LoginContext } from '../context/loginContext'
import '../styles/navbar.css'

const Navbar = (props) => {

    
    const logout = () => {
      localStorage.clear();
      props.setToken("");
      props.setUser("")
      props.setUserID("");
    };

    const renderNavbarWithLinks = () => {
        if (props.user_id && props.token) {
            return (
                <>
                    <li><Link className="navbar-item uk-navbar-item uk-text-capitalize" to="/profile"><span uk-icon="user"></span> Welcome {props.user}</Link></li>
                    <li><button onClick={logout} className="logoutBtn data-uk-margin-top  uk-button-danger uk-text-small uk-text-capitalize">Logout</button></li>
                </>
            )
            
        } else {
            return (
                <>
                    <li><Link className="navbar-item uk-navbar-item uk-text-capitalize" to="register">Register</Link></li>
                    <li><Link className="navbar-item uk-navbar-item uk-text-capitalize" to="login">Login</Link></li>
                </>
            )
        }
    }


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
                    {renderNavbarWithLinks()}
                    <div className="container uk-navbar-item">
                        <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                    </label>
                    </div>
                </ul>
            </div>
        </nav>
    )
}


const NavbarWithContext = () => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <Navbar {...value} />
            }}
        </LoginContext.Consumer>
    )
}

export default NavbarWithContext