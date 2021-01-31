import React from "react";

import "./Follower.scss";

const Follower = ({ link, image, username }) => {
  return (
    <li>
      <a className="follower" href={link} target="_blank" rel="noopener nofollow noreferrer">
        <figure className="follower__image">
          <img className="follower__icon" src={image} alt={username} />
        </figure>
        <figcaption>
          <h6 className="follower__username">{username}</h6>
          <p className="follower__link">{link}</p>
        </figcaption>
      </a>
    </li>
  );
};

export default Follower;
