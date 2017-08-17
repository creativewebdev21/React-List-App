import React from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';

class NewCarForm extends React.Component {
  handleFormSubmit(event) {
    event.preventDefault();
    //Add New Car to Table
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  handleTimeChange(event) {
    this.props.onTimeChange(event.target.value);
  }

  handleBikeChange(event) {
    this.props.onBikeChange(event.target.value);
  }

  handlePassengerSpotChange(event) {
    this.props.onPassengerSpotsChange(event.target.value);
  }

  handleCarAdd(event) {
    this.props.onBtnAddCarClick();
  }

  render() {
    return(
      <Form inline onSubmit={this.handleFormSubmit.bind(this)}>
        <FormGroup>
          <Input onChange={this.handleNameChange.bind(this)} type="text" value={this.props.driverName} placeholder="Driver Name" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Input onChange={this.handleTimeChange.bind(this)} type="text" value={this.props.driverTime} placeholder="Time (Day HH:MM AM/PM)" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Input onChange={this.handlePassengerSpotChange.bind(this)} type="number" value={this.props.passengerSpots} placeholder="Passenger Spots" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Input onChange={this.handleBikeChange.bind(this)} type="number" value={this.props.driverBikes} placeholder="Bike Spots" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Button onClick={this.handleCarAdd.bind(this)} color="danger">Add Car</Button>{' '}
        </FormGroup>
      </Form>
    );
  }
}

export default NewCarForm;
