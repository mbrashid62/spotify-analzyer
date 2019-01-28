import React from 'react';
import Spinner from "./Spinner";
import '../styles/HomeCallout.scss';

const HomeCallout = () => (
  <div className="home-callout-container">
    <Spinner/>
    <p>Spotify Analyzer</p>
  </div>
);

HomeCallout.propTypes = {};

export default HomeCallout;
