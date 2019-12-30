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

// const RadioButtons = (props) => {
//     return (
//         <div className="ui inverted segment">
//             <strong>Select VRP Service</strong>
//             <ul>
//                 <label>
//                     <input 
//                         type="radio"
//                         value="sample"
//                         checked={props.service === "sample"}
//                         onChange={props.onChange}
//                     />
//                     <span>sampleserver6.arcgis.com</span>
//                 </label>
//             </ul>
//             <ul>
//                 <label>
//                     <input 
//                         type="radio"
//                         value="logistics"
//                         checked={props.service === "logistics"}
//                         onChange={props.onChange}
//                     />
//                     <span>logistics.arcgis.com</span>
//                 </label>
//             </ul>
//         </div>
//     );
// }

export default RadioButtons;