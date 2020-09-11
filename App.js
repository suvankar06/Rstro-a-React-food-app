import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee, faUser, faEdit, faTrash, faList, faHome, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import { Navbar, Nav } from 'react-bootstrap'

import Home from "./components/Home"
import RestauranstList from "./components/RestauranstList"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetail from "./components/RestaurantDetail"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantUpdate from "./components/RestaurantUpdate"
import Login from "./components/Login"
import Protected from './components/Protected'
import Logout from './components/Logout'

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/login"
         render={props=>(
          <Login {...props}/>
         )}>
        </Route>

        <Protected exact path="/details" component={RestaurantDetail} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/create" component={RestaurantCreate} />
        < Route exact path="/list" component={RestauranstList} />
      <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
