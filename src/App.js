import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode'
import {setAuthToken} from './components/UserFunctions'
import {setCurrentUser} from './actions/authActions'


import Navigation from './components/navigation/Navigation'
import Landing from './components/landing/Landing'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Profile from './components/profile/Profile'
import Brik from './components/brik/Brik'
import store from './store';


if(localStorage.userToken){
  setAuthToken(localStorage.userToken)
  const decoded = jwt_decode(localStorage.userToken)
  store.dispatch(setCurrentUser(decoded))
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/brik" component={Brik}/>
          <div className="container">
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
