import React from 'react';
import './App.css';
import NameList from  './Components/NameList';
import fire from './fire';

class App extends React.Component {
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let racesRef = fire.database().ref('Races').orderByKey().limitToLast(100);
    racesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let race = { text: snapshot.val(), id: snapshot.key };
      console.log(race.id);
    })
  }
  render() {
    return (
      <div className="App">
        <NameList/>
      </div>
    );
  }
}

export default App;
