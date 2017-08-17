import React from 'react';
import './App.css';
import RaceList from  './Components/RaceList';
import LoginPanel from './Components/LoginPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }
  //Login Objects
  handleLoginEvent(authenticated) {
    this.setState({loggedIn: authenticated});
  }

  //Render
  render() {
    return (
      <div className="App">
        { this.state.loggedIn ? <LoginPanel onAuthChange={this.handleLoginEvent.bind(this)}/> : null}
        { this.state.loggedIn ? <RaceList/> : null}
      </div>
    );
  }
}

export default App;
