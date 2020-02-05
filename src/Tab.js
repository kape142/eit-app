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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.activeTab >= this.props.tabs.length){
            this.setState({activeTab: 0})
        }
    }

    render() {
        return (
            <div className="tab">
                <h2 className={"tab-title"}>{this.props.name}</h2>
                <div className={"tab-content"}>
                    {
                        this.props.tabs?<h4 className={"tab-title"}>{this.props.tabs[this.state.activeTab]}</h4>:null
                    }
                    {
                        this.props.data?<Graph
                            data={this.props.data[Object.keys(this.props.data)[this.state.activeTab]]}
                            avgData = {this.props.avgData?this.props.avgData[Object.keys(this.props.avgData)[this.state.activeTab]]:null}
                        />: null
                    }
                    {
                        this.props.tabs?(
                            <div className="tab-button-list graph-button-list">
                                {this.props.tabs.map((a,i)=><TabButton key={i} name={a} onClick={()=>this.setState({activeTab: i})}>{a}</TabButton>)}
                            </div>
                        ):null
                    }

                </div>
            </div>
        );
    }
}

export default Tab;
