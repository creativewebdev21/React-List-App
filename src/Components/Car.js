import React from 'react';
import { Table } from 'reactstrap';
import NewPersonForm from './NewPersonForm.js';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userBikes: "",
      passengers: [{name: "Hal Wilkerson", bikes:"1"},
                    {name: "Tim Ferriss", bikes:"1"},
                    {name: "Aubrey de Gray", bikes:"1"}
                  ]
    };
  }

  handleUserChange(newUser) {
    this.setState({userName: newUser});
  }

  handleBikeChange(newBike) {
    this.setState({userBikes: newBike});
  }

  addPerson() {
    let passengers = this.state.passengers;
    passengers.push({name: this.state.userName, bikes: this.state.userBikes});
    this.setState({ passengers: passengers,
                    userName: "",
                    userBikes: ""
                  });
  }

  render() {
    let personArray = [];
    this.state.passengers.forEach(function(person) {
      personArray.push(<tr key={ person.name }><td></td><td></td><td>{ person.name }</td><td>{ person.bikes }</td></tr>);
    });

    return (
      <Table striped>
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Leave Date/Time</th>
            <th>Name</th>
            <th>Bikes: <strong>Spots Available</strong></th>
          </tr>
        </thead>
        <tbody>
          {personArray}
          <NewPersonForm  onBtnJoinCarClick={this.addPerson.bind(this)}
                          onBikeChange={this.handleBikeChange.bind(this)}
                          onNameChange={this.handleUserChange.bind(this)}
                          userName={this.state.userName}
                          userBikes={this.state.userBikes}
          />
        </tbody>
      </Table>
    );
  }
}

export default Car;
