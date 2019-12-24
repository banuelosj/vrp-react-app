import React from 'react';
import Menu from './Menu';
import RadioButtons from './RadioButtons';
import FormComponent from './FormComponent';

class App extends React.Component {
    state = {service: 'sample'};

    onRadioChange = (e) => {
        this.setState({
            service: e.target.value
        }, ()=>{
            console.log(this.state.service);
        });
    }
    
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
                    <RadioButtons 
                        service={this.state.service} 
                        onChange={this.onRadioChange} 
                    />
                </div>
                <div className="ui vertical stripe segment">
                    <FormComponent />
                </div>
            </div>
        );
    } //end of render()
}

export default App;