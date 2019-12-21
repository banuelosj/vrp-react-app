import React from 'react';
import Menu from './Menu';
import VRPServiceButton from './VRPServiceButton';

class App extends React.Component {
    state = {logisticsSelected: false};

    render() {
        return (
            <div className="pusher">
                <div className="ui inverted segment">
                    <div className="ui inverted vertical masthead center aligned segment">
                        <Menu />
                        <br />
                        <br />
                        <div className="ui text container" style={{padding: '20px'}}>
                            <h1 className="ui inverted header">
                                Vehicle Routing Problem Tester
                            </h1>
                        </div>
                    </div>
                    <VRPServiceButton />
                </div>
                <div className="ui vertical stripe segment">
                    Form
                </div>
            </div>
        );
    } //end of render()
}

export default App;