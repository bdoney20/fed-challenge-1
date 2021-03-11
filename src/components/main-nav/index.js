import React, { useState } from 'react';
import classnames from 'classnames';
import './index.css';

const MainNav = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <header>
            <div className="logo-container">
                <a className="ifit-logo" href="/">
                     <img src='https://cdn.ifit.com/img/ifit-logo-dark.svg' alt='iFit'/>
                    COACH
                </a>
            </div>
            <button onClick={toggleMenu}>&#9776;</button>
            <div className="main-nav">
                <ul className={classnames("hide", {'mobile-menu': open,})}>
                    <li><a className="page-link" href="/"><span>Exercise</span></a></li>
                    <li><a className="page-link" href="/"><span>Nutrition</span></a></li>
                    <li><a className="page-link" href="/"><span>Activate</span></a></li>
                    <li><a className="page-link" href="/"><span>Sleep</span></a></li>
                    <div className="button-container">
                        <button className="sign-up-button">Sign Up</button>
                    </div>
                </ul> 
            </div>
        </header>
        
    )
}

export default MainNav;