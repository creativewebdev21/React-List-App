This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Summary](#summary)
- [Setup](#setup)
- [React State](#react-state)
- [Contact](#contact)

## Summary

React App. Once input is submitted through the input field, the state of the list is updated.
I've recorded the location of state in its own section
Uses Firebase:
  RealTime Database
  Authentication

## Setup
In order to start using this application, you need to do x things:
..* Clone the code (repository) from Github to your computer
..* Setup application and install dependencies
..* Run the application and log in

Clone the repository by opening your terminal (for windows, I use cmder found [here](http://cmder.net/)) then run `git clone https://github.com/SweetmanTech/react-list-app.git`. This will copy all files from the Github storage to the directory your terminal window is set to.

Next setup the application. In the same terminal window change directory `cd` to the newly created directory for this application. Then run `npm install` this will install all node packages associated with the project. After that has completed, run `firebase init` to be walked through the connectin from app-to-firebase. Once that's completed, run `npm start` to see if the application is working.
* Be sure to change the firebase config info found in `src/fire.js` otherwise you'll be messing with my databaseURL

Once you've run `npm start` the terminal should open a new browser window with the application. I recommend right-clicking to check if there are any logs or error messages before proceeding. Once you've confirmed there are no errors, log into the app by clicking the "Log in with Google" button. Once Google's authentication successfully authenticates you, the spplication will display the ridesharing application with data from your Firebase Realtime Database.

## React State
At any time, the following attributes are actively managed as the "State" of the React application. Any updates to the following attributes will cause the application to update to reflect the new state.
Logged In: src/App.js
UserName: src/Components/Car.js
User Bikes: src/Components/Car.js
Driver Name: src/Components/Race.js
Driver Depart Time: src/Components/Race.js
Driver Bike Spots: src/Components/Race.js

## Contact

Please message me through twitter @SweetmanTech or email me Boss@patricksweetman.com
