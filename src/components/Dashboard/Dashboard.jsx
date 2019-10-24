import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getUserId,
  getUserPlaylists,
} from '../../redux/actions/spotify';

import Playlists from './Playlists';

const Dashboard = ({
  userId,
  playlists,
}) => {
  const [canRenderPlaylists, setCanRenderPlaylists] = useState(false);
  useEffect(() => {
    if (userId && playlists.length) {
      setCanRenderPlaylists(true);
    }
  }, [userId, playlists]);
  return (
    <div className="dashboard-container">
      {canRenderPlaylists && (
        <Playlists playlists={playlists} />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  userId: PropTypes.string,
  playlists: PropTypes.array,
};

export default connect((state) => ({
  userId: state.spotify.userId,
  playlists: state.spotify.playlists,
}))(Dashboard);
