import React, { Component } from 'react';
import HomeCallout from './HomeCallout';
import LandingPrompt from './LandingPrompt';
import Profile from "./Profile";
import SecurityDialogue from './SecurityDialogue';
import Footer from './Footer';
import '../styles/App.scss';

export class App extends Component {
  static displayName = 'src/components/App';

  render() {
    return (
      <div className="app" id="root">
        <HomeCallout />
        <Profile />
        <LandingPrompt />
        <SecurityDialogue />
      </div>
    );
  }
}

export default App;
