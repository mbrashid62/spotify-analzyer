import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import '../../styles/Dashboard/Playlists.scss';

const Playlists = ({ playlists }) => {
  const [] = useState();
  useEffect(() => {

  }, []);
  return (
    <div className="playlists-container">
      <h2 className="header">Your Spotify Playlists</h2>
      {playlists.map((p, i) => {
        return <span className="playlist">{i + 1}. {p.name}</span>;
      })}
    </div>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array,
};

export default Playlists;