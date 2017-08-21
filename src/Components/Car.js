import React from 'react';
import { Table } from 'reactstrap';
import NewPersonForm from './NewPersonForm.js';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userBikes: "",
      passengers: this.props.passengerList,
      passengerHTML: [],
      firebaseCarRef: this.props.firebaseCarRef
    };
  }

  componentWillMount() {
    this.setPassengersToFirebase();
  }

  handleUserChange(newUser) {
    this.setState({ userName: newUser });
  }

  handleBikeChange(newBike) {
    this.setState({ userBikes: newBike });
  }

  addPassengerToFirebase() {
    let newPassengerRef = this.state.firebaseCarRef.child("Passengers").push();
    newPassengerRef.set({
      "Name": this.state.userName,
      "Bikes": this.state.userBikes
    });
    this.setPassengersToFirebase();
  }

  setPassengersToFirebase() {
    let personArray = [];
    this.state.firebaseCarRef.child("Passengers").on('value', passengers => {
      passengers.forEach(person => {
        personArray.push(<tr key={ person.child('Name').val() }>
                          <td></td>
                          <td></td>
                          <td>{ person.child('Name').val() }</td>
                          <td>{ person.child('Bikes').val() }</td>
                        </tr>);
      });
    });
    this.setState({ passengerHTML: personArray });
  }

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>{ this.props.driverName }</th>
            <th>{ this.props.leaveTime }</th>
            <th>Name</th>
            <th>Bikes: <strong>{ this.props.bikeSpots }</strong></th>
          </tr>
        </thead>
        <tbody>
          { this.state.passengerHTML }
          <NewPersonForm  onBtnJoinCarClick={ this.addPassengerToFirebase.bind(this) }
                          onBikeChange={ this.handleBikeChange.bind(this) }
                          onNameChange={ this.handleUserChange.bind(this) }
                          userName={ this.state.userName }
                          userBikes={ this.state.userBikes }
          />
        </tbody>
      </Table>
    );
  }
}

export default Car;
