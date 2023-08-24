import React from "react";
import "../styles/components/MainNav.css"
import logo from "/icons/logo.svg"

const MainNav = () => {
    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <img className="nav-img" src={logo} alt="" />
            </div>
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
        </nav>
    );
};

export default MainNav;