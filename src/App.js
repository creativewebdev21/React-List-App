import React from 'react';

import RaceList from  './Components/RaceList';
import LoginPanel from './Components/LoginPanel';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  handleLoginEvent(authenticated) {
    this.setState({loggedIn: authenticated});
  }

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
