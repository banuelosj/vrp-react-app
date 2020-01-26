import React from 'react';

class Toggler extends React.Component {
    state = {service: 'sample'};

    render() {
        if(this.state.service === 'sample'){
            return (
                <div className="ui buttons">
                    <button className="ui positive button" id="sample" onClick={()=>{this.setState({service: 'sample'})}}>sampleserver6.arcgisonline.com</button>
                    <div className="or"></div>
                    <button className="ui button" id="logistics" onClick={()=>{this.setState({service: 'logistics'})}}>logistics.arcgis.com</button>
                </div>
            );
        } else {
            return (
                <div className="ui buttons">
                    <button className="ui button" id="sample" onClick={()=>{this.setState({service: 'sample'})}}>sampleserver6.arcgisonline.com</button>
                    <div className="or"></div>
                    <button className="ui positive button" id="logistics" onClick={()=>{this.setState({service: 'logistics'})}}>logistics.arcgis.com</button>
                </div>
            );
        }
    };    
};

export default Toggler;