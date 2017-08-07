import React, { Component } from 'react';
import './App.css';
import ResultList from './Components/ResultList';

var PEOPLE = [
  "Sally",
  "Mae"
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NameList/>
      </div>
    );
  }
}

class NameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      names:PEOPLE
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    //this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTextChange(newText) {
    this.setState({text: newText});
  }

  handleFormSubmit(newName) {
    PEOPLE.push(newName);
    alert(PEOPLE);
    this.setState({names: PEOPLE});
  }

  render() {
    return (
      <div>
        <InputField onFormSubmit={this.handleFormSubmit.bind(this)} onTextInput={this.handleTextChange} nameValue={this.state.text}/>
        <ResultList names={this.state.names}/>
      </div>
    );
  }
}

class InputField extends React.Component {
  handleInputChange(event) {
    this.props.onTextInput(event.target.value);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.props.nameValue);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Add name"
            value={this.props.nameValue}
            onChange={this.handleInputChange.bind(this)}
            />
        </form>
      </div>
    );
  }
}

export default App;
