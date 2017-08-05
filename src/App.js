import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList items={["Sweets", "Rick"]}/>
      </div>
    );
  }
}

class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: props.items
    };
  }
  listItems(items) {
    return items.map(item => <li>{item}</li>)
  }
  render() {
    return (
      <ol>
        {this.listItems(this.state.names)}
      </ol>
    )
  }
}

export default App;
