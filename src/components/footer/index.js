import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <section className="footer-container">
            <nav className="footer-nav">
                <div className="most-links">
                    <div className="group-container">
                        <h4>Company</h4>
                        <ul className="group-list">
                            <li className="group-item">
                                <a href="/">About</a>
                            </li>
                            <li className="group-item">
                                <a href="/">Contact Us</a>
                            </li>
                            <li className="group-item">
                                <a href="/">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group-container">
                        <h4>Account</h4>
                        <ul className="group-list">
                            <li className="group-item">
                                <a href="/">Log In</a>
                            </li>
                            <li className="group-item">
                                <a href="/">Create Account</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group-container">
                        <h4>Support</h4>
                        <ul className="group-list">
                            <li className="group-item">
                                <a href="/">Help Center</a>
                            </li>
                            <li className="group-item">
                                <a href="/">Accessability</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="social-links-container">
                    <div className="social-links">Social Links</div>
                </div>
            </nav>
        </section>
    )
}

export default Footer;