import React from 'react';
import Car from './Car';
import NewCarForm from './NewCarForm';
import fire from './../fire';

class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driverName: "",
      driverTime: "",
      driverBikes: "",
      passengerSpots: "",
      firebaseRaceRef: fire.database().ref('Races').child(this.props.raceName),
      carArray: []
    };
  }

  componentWillMount() {
    this.setCarsToFirebase();
  }

  handleNameChange(newName) {
    this.setState({ driverName: newName });
  }

  handleTimeChange(newLeaveTime) {
    this.setState({ driverTime: newLeaveTime });
  }

  handleBikeChange(newBikeCount) {
    this.setState({ driverBikes: newBikeCount });
  }

  handlePassengerSpotChange(newPassengerSpots) {
    this.setState({ passengerSpots: newPassengerSpots });
  }

  addCarToFirebase() {
    let newCarRef = this.state.firebaseRaceRef.child("Cars").push();
    newCarRef.set({
      "BikeSpots": this.state.driverBikes,
      "Driver": this.state.driverName,
      "LeaveTime": this.state.driverTime,
      "PassengerSpots": this.state.passengerSpots
    });
    this.setCarsToFirebase();
  }

  setCarsToFirebase() {
    let newCarsSnap = [];
    this.state.firebaseRaceRef.child("Cars").on('child_added', car => {
      newCarsSnap.push(<Car key={ car.child("Driver").val() }
                            driverName={ car.child("Driver").val() }
                            leaveTime={ car.child("LeaveTime").val() }
                            bikeSpots={ car.child("BikeSpots").val() }
                            passengerSpots={ car.child("PassengerSpots").val() }
                            passengerList={ car.child("Passengers").val() }
                            firebaseCarRef={ this.state.firebaseRaceRef.child("Cars").child(car.key) }
                            carKey={ car.key }
                            />);
      this.setState({ carArray: newCarsSnap });
    })
  }

  render() {
    return(
      <div className="race">
        <h2>{ this.props.raceName }</h2>
        <h3>{ this.props.raceDate }</h3>
        { this.state.carArray }
        <NewCarForm onNameChange={ this.handleNameChange.bind(this) }
                    onTimeChange={ this.handleTimeChange.bind(this) }
                    onBikeChange={ this.handleBikeChange.bind(this) }
                    onPassengerSpotsChange={ this.handlePassengerSpotChange.bind(this) }
                    onBtnAddCarClick={ this.addCarToFirebase.bind(this) }
                    driverName={ this.state.driverName }
                    driverTime={ this.state.driverTime }
                    driverBikes={ this.state.driverBikes }
                    passengerSpots={ this.state.passengerSpots }
          />
      </div>
    );
  }
}

export default Race;
