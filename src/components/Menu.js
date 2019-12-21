import React from 'react';

const Menu = () => {
    return (
        <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
                <a href="https://semantic-ui.com/" className="active item">Home</a>
                <a href="./sample-data.txt" target="_blank" className="item">Sample Data</a>
                <div className="right item">
                    <a href="https://semantic-ui.com/"  className="ui inverted button">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;