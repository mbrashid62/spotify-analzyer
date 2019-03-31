import React from 'react';

import PulsatingArrows from '../components/PulsatingArrows';
import '../styles/Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Let's analyze your Spotify Playlists</h1>
      <PulsatingArrows />
    </div>
  );
};

Welcome.propTypes = {};

export default Welcome;
