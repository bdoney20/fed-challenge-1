import React, { useState } from 'react';
import kayak from '../../images/library/kayak.jpg';
import bananaPhone from '../../images/library/banana-phone.jpg';
import backRower from '../../images/library/back-rower.jpg';
import soloRower from '../../images/library/solo-rower.jpg';
import rowRace from '../../images/library/row-race.jpg';
import rowDisco from '../../images/library/row-disco.jpg';
import rowTeam from '../../images/library/row-team.jpg';
import rowYell from '../../images/library/row-yell.jpg';
import avatar_1 from '../../images/library/trainer/Avatar_1.jpg';
import avatar_2 from '../../images/library/trainer/Avatar_2.jpg';
import avatar_3 from '../../images/library/trainer/Avatar_3.jpg';
import avatar_4 from '../../images/library/trainer/Avatar_4.jpg';
import avatar_5 from '../../images/library/trainer/Avatar_5.jpg';
import avatar_6 from '../../images/library/trainer/Avatar_6.jpg';
import avatar_7 from '../../images/library/trainer/Avatar_7.jpg';
import avatar_8 from '../../images/library/trainer/Avatar_8.jpg';

const workout = [
     {workoutImage: kayak, workoutTitle: 'Lake Innicarra, Irland–Pyramid', workoutTrainer: avatar_1, id:1},
     {workoutImage: bananaPhone, workoutTitle: 'Performance Series', workoutTrainer: avatar_2, id:2},
     {workoutImage: backRower, workoutTitle: 'Slow pulls and fast intervals', workoutTrainer: avatar_3, id:3},
     {workoutImage: soloRower, workoutTitle: '20 Minutes to Toned', workoutTrainer: avatar_4, id:4},
     {workoutImage: rowRace, workoutTitle: 'Charles Race, Boston, Massachusetts', workoutTrainer: avatar_5, id:5},
     {workoutImage: rowDisco, workoutTitle: 'Full Body HITT Series', workoutTrainer: avatar_6, id:6},
     {workoutImage: rowTeam, workoutTitle: 'Kafue River, Zambia–Power Stroke Pyramid', workoutTrainer: avatar_7, id:7},
     {workoutImage: rowYell, workoutTitle: 'Shred & Burn Series', workoutTrainer: avatar_8, id:8}
    ];

const WorkoutCard = () => {
    const [showDetails, setDetails] = useState();
    const [workoutObject] = useState(workout);
    
    function onEnter(id) {
        setDetails(id)
    }

    
        const workoutCard = workoutObject.map((card) => {
            return (
                <div className={"workout " + (card.id === showDetails ? 'showDetails' : '')} onMouseEnter={() => {onEnter(card.id)}} onMouseLeave={() => onEnter(null)}>
                    <img className="workout-image" src={card.workoutImage} alt="workout"/>
                    <div className="workout-title-container">
                        <h4 className="workout-title">{card.workoutTitle}</h4>
                        <img className="workout-trainer" src={card.workoutTrainer} alt="trainer"/>
                    </div>
                    <div className="details">View Details</div>
                </div> 
            )
        })

        return (
            <React.Fragment>
                {workoutCard}
            </React.Fragment>
        )    
}

export default WorkoutCard;