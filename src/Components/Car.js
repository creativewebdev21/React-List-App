import React from 'react';
import { Table } from 'reactstrap';
import NewPersonForm from './NewPersonForm.js';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userBikes: "",
      passengers: [
                  ],
      passengerHTML: []
    };
  }

  componentWillMount() {
    let personArray = [];
    this.state.passengers.forEach(function(person) {
      personArray.push(<tr key={ person.name }><td></td><td></td><td>{ person.name }</td><td>{ person.bikes }</td></tr>);
    });
    this.setState({ passengerHTML: personArray });
  }

  handleUserChange(newUser) {
    this.setState({ userName: newUser });
  }

  handleBikeChange(newBike) {
    this.setState({ userBikes: newBike });
  }

  addPerson() {
    let passengers = this.state.passengers;
    passengers.push({ name: this.state.userName, bikes: this.state.userBikes });
    this.setState({ passengers: passengers,
                    userName: "",
                    userBikes: ""
                  });
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
          <NewPersonForm  onBtnJoinCarClick={ this.addPerson.bind(this) }
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
