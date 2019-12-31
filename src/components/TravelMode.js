//this component was created to test the ability to add new inputs to
//the Form dynamically
//will delete this once the functionality has been achieved.
import React from 'react';
import './TravelMode.css';

const TravelMode = (props) => {
    return (
        <div>
            <div id="travel_mode" className="ui segment" style={{cursor: 'pointer'}}
                onClick={props.onClick}
            >
                Travel Mode
            </div>
            <div id="breaks" className="ui segment" style={{cursor: 'pointer'}}
                onClick={props.onClick}
            >
                Breaks
            </div>
        </div>
        
    );
}

export default TravelMode;