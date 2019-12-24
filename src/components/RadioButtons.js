import React from 'react';

const RadioButtons = (props) => {
    return (
        <div className="ui inverted segment">
            <strong>Select VRP Service</strong>
            <ul>
                <label>
                    <input 
                        type="radio"
                        value="sample"
                        checked={props.service === "sample"}
                        onChange={props.onChange}
                    />
                    <span>sampleserver6.arcgis.com</span>
                </label>
            </ul>
            <ul>
                <label>
                    <input 
                        type="radio"
                        value="logistics"
                        checked={props.service === "logistics"}
                        onChange={props.onChange}
                    />
                    <span>logistics.arcgis.com</span>
                </label>
            </ul>
        </div>
    );
}

export default RadioButtons;