import React from "react";
import logo from "/icons/logo.svg"
import location from "/icons/icon-location.svg"
import phone from "/icons/icon-phone.svg"
import email from "/icons/icon-email.svg"
import facebook from "/icons/icons8-facebook-f-50.png"
import instagram from "/icons/icons8-instagram-50.png"
import twitter from "/icons/icons8-twitter-50.png"
import "../styles/components/Footer.css"
/* import asd from "../../public/images/profile-1.jpg" */

const Footer = () => {
    return (
        <div className="page-footer">
            <div className="footer-logo">
                <img className="footer-img" src={logo} alt="" />
            </div>
            <div className="footer-container">
                <div className="first-footer">
                    <div className="first-footer-in">
                        <img src={location} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis voluptates beatae perspiciatis veniam laudantium tempore voluptatum provident voluptatibus.</p>
                    </div>
                    <div className="first-footer-in">
                        <img src={phone} alt="" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="first-footer-in">
                        <img src={email} alt="" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="second-footer">
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="third-footer">
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="fourth-footer">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer