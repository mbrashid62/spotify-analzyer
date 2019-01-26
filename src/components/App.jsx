import React, { Component } from 'react';

export class App extends Component {
  state = {
    msg: 'Hello World',
  };

  static displayName = 'src/components/App';

  render() {
    const { msg } = this.state;
    return (
      <div className="app">
        <h1>Spotify Analyzer</h1>
        <h6>{msg}</h6>
      </div>
    );
  }
}

export default App;
