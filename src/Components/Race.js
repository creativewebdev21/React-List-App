import React from 'react';
import Car from './Car';
import NewCarForm from './NewCarForm';
import { Button } from 'reactstrap';

class Race extends React.Component {



  render() {
    return(
      <div className="race">
        <h2>{ this.props.raceName }</h2>
        <h3>{ this.props.raceDate }</h3>
        <Car/>
        <Car/>
        <Car/>
        <NewCarForm/>
      </div>
    );
  }
}

export default Race;
