import React from 'react';
import Race from './Race';
import fire from './../fire';
import { ListGroup, ListGroupItem } from 'reactstrap';

class RaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      names: []
    };
  }

  componentWillMount() {
    let newRaceList = this.state.names.slice();
    /* Create reference to messages in Firebase Database */
    let racesRef = fire.database().ref('Races').orderByKey().limitToLast(100);
    racesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let race = { children: snapshot.val(), id: snapshot.key };
      newRaceList.push(race);
      this.setState({names: newRaceList});
    })
  }

  handleTextChange(newText) {
    this.setState({text: newText});
  }

  handleFormSubmit(newName) {
    let newRaceList = this.state.names.slice();
    newRaceList.push({id:newName});
    this.setState({
      names: newRaceList,
      text: ''
    });
  }

  render() {
    let raceTables = [];
    this.state.names.forEach(function(race) {
      raceTables.push(<ListGroupItem key={ race.id }><Race raceName={ race.id } raceDate={ race.children.Date } cars={ race.children.Cars }/></ListGroupItem>);
    });

    return (
      <div>
        <ListGroup>
          { raceTables }
        </ListGroup>
      </div>
    );
  }
}

export default RaceList;
