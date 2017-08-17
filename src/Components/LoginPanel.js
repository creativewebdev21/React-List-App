import React from 'react';
import { Button } from 'reactstrap';
import firebase from 'firebase';

class LoginPanel extends React.Component {
  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return(
      <div>
        <Button color="danger" onClick={this.googleLogin}>Login with Google</Button>
        <Button color="primary">Login with Facebook</Button>
      </div>
    );
  }
}

export default LoginPanel;
