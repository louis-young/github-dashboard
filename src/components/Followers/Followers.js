import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Follower from "../Follower/Follower";

import "./Followers.scss";

const Followers = () => {
  const { followers } = useContext(Context);

  if (!followers.length) {
    return (
      <article className="card card--center">
        <h4 className="card__title">No followers</h4>
      </article>
    );
  }

  return (
    <article className="followers card">
      <ul className="followers__list">
        {followers.map((follower) => {
          const { id, html_url: link, avatar_url: image, login: username } = follower;

          return <Follower key={id} link={link} image={image} username={username} />;
        })}
      </ul>
    </article>
  );
};

export default Followers;
