import React, { Component } from 'react';

class ResultList extends React.Component {
  render() {
    var namesArr = [];
    this.props.names.forEach(function(person) {
      namesArr.push(<li>{person}</li>);
    });

    return (
      <div>
        <ul>
          {namesArr}
        </ul>
      </div>
    );
  }
}

export default ResultList;
