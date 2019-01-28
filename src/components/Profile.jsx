import React from 'react';
import '../styles/Profile.scss';

const Profile = () => {
  return (
    <div className="profile-container">
      <p className="message">Hello, <span className="name">Nicolas Cage</span>.</p>
      <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg" />
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
