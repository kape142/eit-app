import React from 'react';
import './App.css';
import TabButton from "./TabButton";
import Tab from "./Tab";

class App extends React.Component{
  tabs = ["Consumption", "Compare", "Price", "Contact"];
  constructor(props) {
    super(props);
    const data = {
      Electricity: this.generateData(15,0,300),
      Water: this.generateData(15,0,300),
      Gas: this.generateData(15,0,300),
      Budgeting: this.generateData(15,0,300),
    }

    const avgData = {
      Electricity: this.generateData(15,0,300),
      Water: this.generateData(15,0,300),
      Gas: this.generateData(15,0,300),
      Budgeting: this.generateData(15,0,300),
    }
    console.log(data);

    this.state = {
      activeTab: 0,
      data,
      avgData
    }
  }

  generateData(datapoints, min, max){
    let data = [];
    for(let i = 0; i < datapoints; i++){
      data.push((i/datapoints)*(min + Math.random()*(max-min)))
    }
    return data;
  }

  renderMainTab(){
    switch(this.state.activeTab){
      case 0: return <Tab name={this.tabs[this.state.activeTab]} tabs={["Electricity", "Water", "Gas", "Budgeting"]} data={this.state.data}/>;
      case 1: return <Tab name={this.tabs[this.state.activeTab]} tabs={["Electricity", "Water", "Gas", "Budgeting"]} data={this.state.data} avgData = {this.state.avgData}/>;
      default: return null
    }
  }



  render(){
    return (
        <div className="App">
          {this.renderMainTab()}
          <div className="tab-button-list">
            {this.tabs.map((a,i)=><TabButton key={i} name={a} onClick={()=>this.setState({activeTab: i})}>{a}</TabButton>)}
          </div>
        </div>
    );
  }
}

export default App;
