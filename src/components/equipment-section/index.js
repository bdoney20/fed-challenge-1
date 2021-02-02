import React from 'react';
import treadmill from '../../images/equipment/NTL390190664.jpg';
import bike from '../../images/equipment/bikeperson.jpg';
import elliptical from '../../images/equipment/ellipticalperson.jpg';
import strength from '../../images/equipment/6-pulley12557.jpg';
import './index.css';

const Equipment = () => {
    return (
        <section className="equipment-section">
            <h3>Interested in our exciting iFit-enabled equipment?</h3>
            <div className="equipment-container">
                <div className="equipment">
                    <img src={treadmill} alt="Nordictrack treadmill"/>
                    <h4>Treadmill</h4>
                </div>
                <div className="equipment">
                    <img src={bike} alt="Bike"/>
                    <h4 id="bikes">Bikes</h4>
                </div>
                <div className="equipment">
                    <img src={elliptical} alt="Elliptical"/>
                    <h4>Ellipticals</h4>
                </div>
                <div className="equipment">
                    <img src={strength} alt="6 pulley machine"/>
                    <h4 id="strength">Strength</h4>
                </div>
            </div>
        </section>
    )
}

export default Equipment;