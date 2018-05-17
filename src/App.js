import React, { Component } from 'react';
import Side from './components/side'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Side />
        <Main />
      </div>
    );
  }
}

export default App;
