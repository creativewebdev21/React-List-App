import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAOnOAd4V87YC35zcr85QmToMrcyqSMnMs",
    authDomain: "trirideapp.firebaseapp.com",
    databaseURL: "https://trirideapp.firebaseio.com",
    projectId: "trirideapp",
    storageBucket: "trirideapp.appspot.com",
    messagingSenderId: "80884052615"
  };
  var fire = firebase.initializeApp(config);

  export default fire;
