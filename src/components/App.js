import React from 'react';
import Menu from './Menu';
import RadioButtons from './RadioButtons';
import FormComponent from './FormComponent';
import InputList from './InputList';
import axios from 'axios';

class App extends React.Component {
    state = {
        service: "sample", 
        formInputs: [
            {name:"orders", type:"textarea"}, 
            {name:"depots", type:"textarea"}, 
            {name:"routes", type:"textarea"}
        ],
        inputCards: [],
        selectedCards: []
    };

    componentDidMount() {
        this.loadInputCards();
    }

    onRadioChange = (e) => {
        this.setState({
            service: e.target.name
        }, ()=>{
            console.log(this.state.service);
        });
    }

    //adding a new input to the form
    onInputSelect = (card) => {
        //check to see if the input has already been clicked an added to the form
        //if()
        this.setState({
            formInputs: this.state.formInputs.concat([{name: card.target.innerHTML, type: card.target.id}]),
            selectedCards: this.state.selectedCards.concat([card])
        }, 
        () => {
            console.log(this.state.formInputs);
            console.log('selectedcards:', this.state.selectedCards);
        });
    }

    //populate the InputCard list on the rail
    loadInputCards = async() => {
        const response = await axios.get(process.env.PUBLIC_URL + "./input-card-list-items.json");
        this.setState({inputCards: response.data.items},
        () => {
            console.log("cards: ", this.state.inputCards);
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
                        <FormComponent inputArr={this.state.formInputs}/>
                    </div>
                    <div className="column">
                        <div className="ui right close rail">
                            <InputList onClick={this.onInputSelect} cards={this.state.inputCards} selectedCards={this.state.selectedCards}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } //end of render()
}

export default App;