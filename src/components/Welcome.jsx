import React, {
  useState,
  useEffect,
} from 'react';

const Welcome = () => {
  const [name, setName] = useState('');
  const [spotifyId, setSpotifyId] = useState('');

  useEffect(() => {
    const api = window.spotifyApi;
    api.getMe()
      .then((result) => {
        setName(result.body.display_name);
        setSpotifyId(result.body.id);
      });
  });

  return (
    <h1>Welcome, {name}</h1>
  );
};

Welcome.propTypes = {};

export default Welcome;
