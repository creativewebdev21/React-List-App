import React from 'react';
import Car from './Car';
import NewCarForm from './NewCarForm';

class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driverName: "",
      driverTime: "",
      driverBikes: "",
      passengerSpots: "",
      cars: [
        {bikeSpots: "",driver: "", time: "", passengerSpots: 4, passengers: [{},{}]},
        {bikeSpots: "",driver: "", time: "", passengerSpots: 4, passengers: [{},{}]},
        {bikeSpots: "",driver: "", time: "", passengerSpots: 4, passengers: [{},{}]}
      ]
    };
  }

  handleNameChange(newName) {
    this.setState({driverName: newName});
  }

  handleTimeChange(newLeaveTime) {
    this.setState({driverTime: newLeaveTime});
  }

  handleBikeChange(newBikeCount) {
    this.setState({driverBikes: newBikeCount});
  }

  handlePassengerSpotChange(newPassengerSpots) {
    this.setState({passengerSpots: newPassengerSpots});
  }

  addCar() {
    let carsList = this.state.cars;
    carsList.push({ bikeSpots: this.state.driverBikes,
                    driver: this.state.driverName,
                    time: this.state.driverTime,
                    passengerSpots: this.state.passengerSpots,
                    passengers: [{},{}],
                  });
    this.setState({cars: carsList});
  }

  render() {
    let carArray = [];
    this.state.cars.forEach(function(car) {
      carArray.push(<Car/>);
    });
    return(
      <div className="race">
        <h2>{ this.props.raceName }</h2>
        <h3>{ this.props.raceDate }</h3>
        {carArray}
        <NewCarForm onNameChange={this.handleNameChange.bind(this)}
                    onTimeChange={this.handleTimeChange.bind(this)}
                    onBikeChange={this.handleBikeChange.bind(this)}
                    onPassengerSpotsChange={this.handlePassengerSpotChange.bind(this)}
                    onBtnAddCarClick={this.addCar.bind(this)}
                    driverName={this.state.driverName}
                    driverTime={this.state.driverTime}
                    driverBikes={this.state.driverBikes}
                    passengerSpots={this.state.passengerSpots}
          />
      </div>
    );
  }
}

export default Race;
