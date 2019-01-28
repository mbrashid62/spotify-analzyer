import React from 'react';
import '../styles/Spinner.scss';

const Spinner = () => (
  <div className="spinner">
    <span className="dot"/>
    <span className="dot"/>
    <span className="dot"/>
  </div>
);

Spinner.propTypes = {};

export default Spinner;
