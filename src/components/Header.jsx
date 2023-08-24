import React from "react";
import intro from "/images/illustration-intro.png"
import "../styles/components/Header.css"


const Header = () => {
    return (
        <header className="header-container">
            <img className="header-img" src={intro} alt="" />
            <div className="header-content">
                <h2>All your files in one secure location, accessible anywhere.</h2>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className="header-button">Get Started</button>
            </div>
        </header>
    );
};

export default Header;