import React from 'react';

const RadioButtons = (props) => {
    return (
        <div className="ui inverted segment">
            <div className="ui form">
                <div className="grouped fields">
                    <h5 style={{color: '#FFFFFF'}}>Select VRP Service</h5>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input 
                                type="radio"
                                name="sample"
                                checked={props.service === "sample"}
                                onChange={props.onChange}
                            />
                            <label style={{color: '#FFFFFF'}}>sampleserver6.arcgisonline.com</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input 
                                type="radio"
                                name="logistics"
                                checked={props.service === "logistics"}
                                onChange={props.onChange}
                            />
                            <label style={{color: '#FFFFFF'}}>logistics.arcgis.com</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RadioButtons;