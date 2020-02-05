import React from 'react';
import './App.css';
import TabButton from "./TabButton";
import Tab from "./Tab";

class App extends React.Component{
  tabs = ["Consumption", "Compare", "Price", "Contact"];
  constructor(props) {
    super(props);
    let datapoints = 60;

    const data = {
      Electricity: this.generateData(datapoints,10,300),
      Water: this.generateData(datapoints,140,300),
      Gas: this.generateData(datapoints,30,300),
      Budgeting: []
    };

    const avgData = {
      Electricity: this.generateData(datapoints, 60, 300),
      Water: this.generateData(datapoints, 80, 300),
      Gas: this.generateData(datapoints, 20, 300),
      Budgeting: []
    };

    const price = {
      Electricity: this.generateData(datapoints, 30, 300),
      Water: this.generateData(datapoints, 30, 300),
      Gas: this.generateData(datapoints, 20, 300),
    };

    data.Budgeting = Object.keys(price)
        .map(a=>{return {pric: price[a][0], amount: data[a][0]}})
        .map(a=>a.pric
            .map((b,i)=>b*a.amount[i])
        );

    avgData.Budgeting = Object.keys(price)
        .map(a=>{return {pric: price[a][0], amount: avgData[a][0]}})
        .map(a=>a.pric
            .map((b,i)=>b*a.amount[i])
        );

    console.log(data);

    this.state = {
      activeTab: 0,
      data,
      avgData,
      price
    }
  }

  generateData(datapoints, min, max){
    let data = [];
    let point = min;
    for(let i = 0; i < datapoints; i++){
      point = point + Math.random()*(max-min)/datapoints - (140/datapoints);
      data.push(point)
    }
    return [data];
  }

  renderMainTab(){
    switch(this.state.activeTab){
      case 0: return <Tab name={this.tabs[this.state.activeTab]} tabs={["Electricity", "Water", "Gas", "Budgeting"]} data={this.state.data}/>;
      case 1: return <Tab name={this.tabs[this.state.activeTab]} tabs={["Electricity", "Water", "Gas", "Budgeting"]} data={this.state.data} avgData = {this.state.avgData}/>;
      case 2: return <Tab name={this.tabs[this.state.activeTab]} tabs={["Electricity", "Water", "Gas"]} data={this.state.price}/>;
      case 3: return <Tab name={this.tabs[this.state.activeTab]} />;
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
