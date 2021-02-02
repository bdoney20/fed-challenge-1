import React from 'react';
import './index.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* <img className="hero-image" src={inWorkout} alt="in-workout"/> */}
            <div className="hero-text">
                <h1>The best personal training, right in your home</h1>
                <div className="hero-button">
                <button>
                    Join iFit Coach
                </button>
            </div>
            </div>
           
        </section>
    )
}

export default Hero;