import React from 'react';

const TextAreaLarge = (props) => {
    const id = props.id;
    const label = props.label;

    return (
        <div className="ui inverted segment" style={{backgroundColor: '#2185D0'}}>
            <div className="ui inverted transparent input">
                <label htmlFor={id}>{label}
                  <br />
                  <p>(required field)</p>
                </label>
                <textarea id={id} name={id} rows="10" cols="50">{}</textarea>
            </div>
        </div>
        
    );
}

export default TextAreaLarge;