//This component represents the params the user chooses to 
//add to the form as inputs

import React from 'react';

const InputCard = (props) => {
    return (
        <div onClick={()=> props.onClick(props.card)}
            name={props.name}
            id={props.id}
            className="ui teal inverted segment" 
            onClick={props.onClick}
            style={{cursor: 'pointer'}}
        >
            {props.name}
        </div>
    );
}

export default InputCard;