import React from 'react';
import Input from './Input';

const InputList = (props) => {
    return (
        <div>
            <Input name="breaks" id="textarea" onClick={props.onClick}/>
            <Input name="travel_mode" id="textarea" onClick={props.onClick} />
            <Input name="time_units" id="select" onClick={props.onClick}/>
        </div>
    )
}

export default InputList;