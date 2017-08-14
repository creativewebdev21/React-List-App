import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

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
        <Form onSubmit={this.handleFormSubmit.bind(this)}>
          <FormGroup>
            <Input
              type="text"
              placeholder="Add name"
              value={this.props.nameValue}
              onChange={this.handleInputChange.bind(this)}
              />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default InputField;
