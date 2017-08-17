import React from 'react';
import { Input, Button } from 'reactstrap';

class NewPersonForm extends React.Component {
  handleFormSubmit(event) {
    event.preventDefault();
    //Add New Car to Table
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  handleBikeChange(event) {
    this.props.onBikeChange(event.target.value);
  }

  handleCarJoin() {
    this.props.onBtnJoinCarClick();
  }

  render() {
    return (
      <tr>
        <td></td>
        <td><Button onClick={this.handleCarJoin.bind(this)} color="info">Join Car</Button>{' '}</td>
        <td><Input  onChange={this.handleNameChange.bind(this)}
                    type="text"
                    placeholder="Name"
                    value={this.props.userName}/>
                    </td>
        <td><Input  onChange={this.handleBikeChange.bind(this)}
                    type="number"
                    value={this.props.userBikes}
                    placeholder="Number of Bikes"/>
                    </td>
      </tr>
    );
  }
}

export default NewPersonForm;
