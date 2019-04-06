import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DashBoardScreen from './screens/DashBoardScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import NavBarComponent from './components/NavBarComponent';

class App extends Component {
  /*We render the Router and NavBarComponent.*/
  render() {
    return (
      <div className="App">
        <Router>
          < NavBarComponent />
          <Route exact path="/" component={LoginScreen} />
          <Route path="/dashboard" component={DashBoardScreen} />
          {/*Make router to UserScreen.*/}
          <Route path="/user/" exact component={UserScreen} />
          {/*Make a router to UserScreen and this holds the id of the user as a parameter.*/}
          <Route path="/user/:id" component={UserScreen} />
        </Router>
      </div>
    );
  }
}

export default App;
