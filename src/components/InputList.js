import React from 'react';
import InputCard from './InputCard';

const InputList = (props) => {
    return (
        <div>
            <InputCard name="breaks" id="textarea" onClick={props.onClick}/>
            <InputCard name="travel_mode" id="textarea" onClick={props.onClick} />
            <InputCard name="time_units" id="select" onClick={props.onClick}/>
            <InputCard name="uturn_policy" id="select" onClick={props.onClick}/>
            <InputCard name="distance_units" id="select" onClick={props.onClick} />
        </div>
    )
}

export default InputList;