import React from 'react';
import './App.css';
import Graph from "./Graph";
import TabButton from "./TabButton";

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    render() {
        return (
            <div className="tab">
                <h3 className={"tab-title"}>{this.props.name}</h3>
                <div className={"tab-content"}>
                    <Graph
                        data={this.props.data[Object.keys(this.props.data)[this.state.activeTab]]}
                        avgData = {this.props.avgData?this.props.avgData[Object.keys(this.props.avgData)[this.state.activeTab]]:null}
                        />
                    <div className="tab-button-list graph-button-list">
                        {this.props.tabs.map((a,i)=><TabButton key={i} name={a} onClick={()=>this.setState({activeTab: i})}>{a}</TabButton>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab;
