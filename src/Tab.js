import React from 'react';
import './App.css';
import Graph from "./Graph";

function Tab(props) {
    return (
        <div className="tab">
            <h3 className={"tab-title"}>{props.name}</h3>
            <div className={"tab-content"}>
                <Graph data={props.data} />
            </div>
        </div>
    );
}

export default Tab;
