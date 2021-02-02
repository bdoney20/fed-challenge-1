import React from 'react';
import WorkoutCard from './workout-card.js';
import './index.scss';

const Library = () => {
    return (
        <div className="library-container">
            <div className="library-workout-container">
                <WorkoutCard />
            </div>
        </div>
    )
}

export default Library;