import React, { Component } from 'react';

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

export default InputField;
