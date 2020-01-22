import React from 'react';
import './App.css';
import Tab from "./Tab";
import TabButton from "./TabButton";

class App extends React.Component{
  tabs = ["Electricity", "Water", "Gas", "Budgeting"];
  constructor(props) {
    super(props);
    const data = {
      Electricity: this.generateData(15,0,300),
      Water: this.generateData(15,0,300),
      Gas: this.generateData(15,0,300),
      Budgeting: this.generateData(15,0,300),
    }
    console.log(data);

    this.state = {
      activeTab: 0,
      data
    }
  }

  generateData(datapoints, min, max){
    let data = [];
    for(let i = 0; i < datapoints; i++){
      data.push(min + Math.random()*(max-min))
    }
    return data;
  }



  render(){
    return (
        <div className="App">
          <Tab name={this.tabs[this.state.activeTab]} data={this.state.data[this.tabs[this.state.activeTab]]}/>
          <div className="tab-button-list">
            {this.tabs.map((a,i)=><TabButton key={i} name={a} onClick={()=>this.setState({activeTab: i})}>{a}</TabButton>)}
          </div>
        </div>
    );
  }
}

export default App;
