import React from 'react';
import './App.css';
import NameList from  './Components/NameList';
import RaceList from  './Components/RaceList';
import fire from './fire';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RaceList/>
      </div>
    );
  }
}

export default App;
