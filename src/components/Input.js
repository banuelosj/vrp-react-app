import React from 'react';

const Input = (props) => {
    return (
        <div 
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

export default Input;