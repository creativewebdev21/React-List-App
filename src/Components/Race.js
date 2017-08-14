import React from 'react';
import { Table } from 'reactstrap';

class Race extends React.Component {

  render() {
    return(
      <Table>
        <thead>
          <th>{ this.props.raceName }</th>
        </thead>
      </Table>
    );
  }
}

export default Race;
