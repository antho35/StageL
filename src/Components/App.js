import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Map from './Map.js';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <div id="map">
          <Map/>
        </div>
        <div id="console">
        </div>
      </div>
    );
  }
}

export default App;
