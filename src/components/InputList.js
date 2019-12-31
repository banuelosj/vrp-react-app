import React from 'react';
import Input from './Input';

const InputList = (props) => {
    return (
        <div>
            <Input id="breaks" onClick={props.onClick}/>
            <Input id="travel_mode" onClick={props.onClick} />
        </div>
    )
}

export default InputList;