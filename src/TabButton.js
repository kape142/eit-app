import React from 'react';
import './App.css';

function TabButton(props) {
    return (
        <div className="tab-button" onClick={props.onClick}>
            {props.name}
        </div>
    );
}

export default TabButton;
