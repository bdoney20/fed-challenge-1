import React from 'react';
import './index.css';

const MainNav = () => {
    return (
        <div className="main-nav">
            <ul>
                <div className="logo-container">
                    <a className="ifit-logo" href="/">
                        <img src='https://cdn.ifit.com/img/ifit-logo-dark.svg' alt='iFit'/>
                        COACH
                    </a>
                </div>
                <li>
                    <a className="page-link" href="/">
                        <span>Exercise</span>
                    </a>
                </li>
                <li>
                    <a className="page-link" href="/">
                        <span>Nutrition</span>
                    </a>
                </li>
                <li>
                    <a className="page-link" href="/">
                        <span>Activate</span>
                    </a>
                </li>
                <li>
                    <a className="page-link" href="/">
                        <span>Sleep</span>
                    </a>
                </li>
                <div className="button-container">
                    <button className="sign-up-button">Sign Up</button>
                </div>
            </ul>   
        </div>
    )
}

export default MainNav;