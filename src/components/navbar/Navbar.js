import React from 'react';
import './Navbar.css';
import Button from "../../UI/Button/Button";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                IPropel
            </div>
            <div className="navbar-buttons">
                <a href="www.google.com" className="navbar__button">
                    Home
                </a>

                <a href="www.google.com" className="navbar__button">
                    About us
                </a>

                <a href="www.google.com" className="navbar__button">
                    Contact us
                </a>
                <Button>Aloha</Button>
            </div>
        </nav>
    );
};

export default Navbar;