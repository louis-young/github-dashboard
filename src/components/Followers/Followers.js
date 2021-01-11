import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Follower from "../Follower/Follower";

import "./Followers.scss";

const Followers = () => {
  const { followers } = useContext(Context);

  if (!followers.length) {
    return <h4>No followers.</h4>;
  }

  return (
    <>
      <h3>Followers</h3>
      <ul className="followers">
        {followers.map((follower) => {
          const { id, html_url: link, avatar_url: image, login: username } = follower;

          return <Follower key={id} link={link} image={image} username={username} />;
        })}
      </ul>
    </>
  );
};

export default Followers;
