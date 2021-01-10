import React from "react";

import "./Follower.scss";

const Follower = ({ link, image, username }) => {
  return (
    <li className="follower">
      <p>Link: {link}</p>
      <img className="follower__image" src={image} alt={username} />
      <p>Username: {username}</p>
    </li>
  );
};

export default Follower;
