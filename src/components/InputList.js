import React from 'react';
import InputCard from './InputCard';

const InputList = (props) => {
    return (
        <div>
            {props.cards.map((card, idx) => (
                <InputCard 
                    name={card.name} 
                    id={card.type} 
                    key={`${card.name} + - + ${idx + 1}`} 
                    onClick={props.onClick}
                    card={card} 
                    selectedCards={props.selectedCards}
                />
            ))}
        </div>
    );
}

export default InputList;