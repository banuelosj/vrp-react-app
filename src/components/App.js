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
        //change card color based off selection
        card.target.className = this.cardColorChange(card.target.className);

        //check if the card has already been selected
        //if yes, then remove it from the formInputs
        const isCardAlreadySelected = this.cardSelectionChecker(card.target.innerText, this.state.formInputs);
        if(!isCardAlreadySelected) {
            this.setState({
                formInputs: this.state.formInputs.concat([{name: card.target.innerHTML, type: card.target.id}]),
                selectedCards: this.state.selectedCards.concat([card.target])
            });
        }
    }

    //populate the InputCard list on the rail
    loadInputCards = async() => {
        const response = await axios.get(process.env.PUBLIC_URL + "./input-card-list-items.json");
        this.setState({inputCards: response.data.items},
        () => {
            console.log("loaded the cards successfully!");
        });
    }

    //change the card color based off knowing if the card has been selected or not
    //this is found by using the className value
    cardColorChange = (className) => {
        //if it is selected for the first time, gray it out, otherwise it has already been selected
        //so change the color back to unselected
        if(className === "ui teal inverted segment"){
            return "ui grey inverted segment";
        } else {
            return "ui teal inverted segment"
        }
    }

    //checks to see if the card already exists in the formInputs array
    //if it does, then we remove it, otherwise we add it
    //adding and removing gets taken care of in the onInputSelect
    cardSelectionChecker = (name, formInputs) => {
        for(let input of formInputs){
            if(input.name === name) {
                return true;
            }
        }
        return false;
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