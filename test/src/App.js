import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import { Link } from "react-router-dom";

//import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

//import { Navbar } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/*<Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>*/}
        <Link to="/">Scratch</Link>
        <Button variant="contained" color="primary">
          Hello world
        </Button>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
        <Routes />
      </div>
    );
  }
}

export default App;

