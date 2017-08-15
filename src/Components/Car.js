import React from 'react';
import { Table } from 'reactstrap';

class Car extends React.Component {
  render() {
    return(
      <Table>
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Leave Date/Time</th>
            <th>Name</th>
            <th>Bikes</th>
          </tr>
        </thead>
      </Table>
    );
  }
}

export default Car;
