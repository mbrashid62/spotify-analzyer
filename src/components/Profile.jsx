import React from 'react';
import {
  useState,
  useEffect,
} from 'react';

import '../styles/Profile.scss';

const defaultPicUrl = "www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg";

const Profile = () => {
  const [name, setName] = useState('');
  const [spotifyId, setSpotifyId] = useState('');
  const [img, setImg] = useState(defaultPicUrl);

  useEffect(() => {
    const api = window.spotifyApi;
    api.getMe()
      .then((result) => {
        setName(result.body.display_name);
        setSpotifyId(result.body.id);
        if (result.body.images.length) {
          setImg(result.body.images[0].url);
        }
      });
  });
  {if (!spotifyId) {
    return null;
  }}
  return (
    <div className="profile-container">
      <p className="message">Hello, <span className="name">{name}</span>.</p>
      <img
        src={img}
        alt={defaultPicUrl}
      />
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
