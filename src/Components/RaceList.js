import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Race from './Race';
import fire from './../fire';

class RaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      fbRaces: [],
      firebaseRaceListRef: fire.database().ref('Races'),
      raceHTML: []
    };
  }

  componentWillMount() {
    let newRaceList = [];
    let raceTables = [];
    this.state.firebaseRaceListRef.on('child_added', snapshot => {
      let race = { children: snapshot.val(), id: snapshot.key, cars:snapshot.child("Cars") };
      raceTables.push(<ListGroupItem key={ race.id }><Race raceName={ race.id } raceDate={ race.children.Date }/></ListGroupItem>);
      newRaceList.push(race);
      this.setState({fbRaces: newRaceList});
      this.setState({raceHTML: raceTables});
    });
  }

  handleTextChange(newText) {
    this.setState({text: newText});
  }

  render() {
    return (
      <div>
        <ListGroup>
          { this.state.raceHTML }
        </ListGroup>
      </div>
    );
  }
}

export default RaceList;
