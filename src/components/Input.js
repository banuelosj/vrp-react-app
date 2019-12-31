import React from 'react';

const Input = (props) => {
    return (
        <div id={props.id} 
            className="ui teal inverted segment" 
            onClick={props.onClick}
            style={{cursor: 'pointer'}}
        >
            {props.id}
        </div>
    );
}

export default Input;