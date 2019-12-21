import React from 'react';
import Menu from './Menu';

const App = () => {
    return (
        <div className="pusher">
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
            <div className="ui vertical stripe segment">
                Form
            </div>
        </div>
    );
}

export default App;