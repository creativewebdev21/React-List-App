import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ResultList extends React.Component {
  render() {
    var namesArr = [];
    this.props.names.forEach(function(person) {
      namesArr.push(<ListGroupItem key={ person }>{ person }</ListGroupItem>);
    });

    return (
      <div>
        <ListGroup>
          { namesArr }
        </ListGroup>
      </div>
    );
  }
}

export default ResultList;
