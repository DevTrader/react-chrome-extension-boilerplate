/* global chrome */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: ''
    }
  }

  componentDidMount() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;
      this.setState({
        domain: domain,
      });
    });
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.domain}</h1>
      </div>
    );
  }
}
export default App;
