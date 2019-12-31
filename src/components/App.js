import React from 'react';
import Menu from './Menu';
import RadioButtons from './RadioButtons';
import FormComponent from './FormComponent';
import InputList from './InputList';

class App extends React.Component {
    state = {
        service: "sample", 
        selectedInput: ''
    };

    onRadioChange = (e) => {
        this.setState({
            service: e.target.name
        }, ()=>{
            console.log(this.state.service);
        });
    }

    //adding a new input to the form
    onInputSelect = (e) => {
        this.setState({selectedInput: e.target.id}, () => {
            console.log(this.state.selectedInput);
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
                <br />
                <div className="ui three column grid">
                    <div className="column">
                        <FormComponent />
                    </div>
                    <div className="column">
                        <div className="ui right close rail">
                            <InputList onClick={this.onInputSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } //end of render()
}

export default App;