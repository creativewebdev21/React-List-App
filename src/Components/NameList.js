import React,{ Component } from 'react';
import InputField from './InputField';
import ResultList from './ResultList';

var PEOPLE = [
  "Sally",
  "Mae"
];

class NameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      names:PEOPLE
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(newText) {
    this.setState({text: newText});
  }

  handleFormSubmit(newName) {
    PEOPLE.push(newName);
    this.setState({
      names: PEOPLE,
      text: ''
    });
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

export default NameList;
