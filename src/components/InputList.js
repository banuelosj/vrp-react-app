import React from 'react';
import Input from './Input';

const InputList = (props) => {
    return (
        <div>
            <Input id="breaks" type="textarea" onClick={props.onClick}/>
            <Input id="travel_mode" type="textarea" onClick={props.onClick} />
        </div>
    )
}

export default InputList;