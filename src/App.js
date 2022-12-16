import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";

//create STATE 

//to use stae change const to class extend component
class App extends Component{
// to add STATE , Use constructor with Super to call constructor and 
  //change state
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }
  //create function with event, then change it to arrow function
  onSearchChange = (event) =>{
    //use setState whenever using state
    this.setState({searchfield: event.target.value})
   
   
  }
  render() {
     const filteredRobots = this.state.robots.filter((robot) => {
       return robot.name
         .toLowerCase()
         .includes(this.state.searchfield.toLowerCase());
     }
     );
     console.log(filteredRobots);
return (
  <div className="tc">
    <h1>Robofriends</h1>
    <Searchbox searchChange={this.onSearchChange} />
    <Cardlist robots={filteredRobots} />
  </div>
);
  }
    
}
export default App;