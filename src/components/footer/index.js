import React from 'react';
import youtube from '../../images/footer/youtube.png';
import facebook from '../../images/footer/facebook.png';
import instagram from '../../images/footer/instagram.png';
import pinterest from '../../images/footer/pinterest.png';
import twitter from '../../images/footer/twitter.png';
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
                <div className="social-links-container">
                    <div className="social-links">
                        <ul className="social-list">
                            <li><a href="/"><img src={youtube} alt="youtube social logo"></img></a></li>
                            <li><a href="/"><img src={pinterest} alt="pinterest social logo"></img></a></li>
                            <li><a href="/"><img src={facebook} alt="facebook social logo"></img></a></li>
                            <li><a href="/"><img src={twitter} alt="twitter social logo"></img></a></li>
                            <li><a href="/"><img src={instagram} alt="instagram social logo"></img></a></li>
                        </ul>
                    </div>
                </div>
                <div className="legal">
                    <div className="language-button">English</div>
                        <a href="/">&copy; iFit.com. All rights Reserved.</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Use</a>
                </div>
            </nav>
        </section>
    )
}

export default Footer;