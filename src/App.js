import React, { Component } from 'react';
import './App.css';
import NameList from  './Components/NameList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NameList/>
      </div>
    );
  }
}

export default App;
