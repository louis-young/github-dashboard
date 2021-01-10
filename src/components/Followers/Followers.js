import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Follower from "../Follower/Follower";

import "./Followers.scss";

const Followers = () => {
  const { followers } = useContext(Context);

  return (
    <ul className="followers">
      {followers.map((follower) => {
        const { id, html_url: link, avatar_url: image, login: username } = follower;

        return <Follower key={id} link={link} image={image} username={username} />;
      })}
    </ul>
  );
};

export default Followers;
