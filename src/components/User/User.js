import React, { useContext } from "react";

import { Context } from "../../context/Context";

import office from "../../assets/icons/user/office.svg";
import pin from "../../assets/icons/user/pin.svg";
import external from "../../assets/icons/user/external.svg";

import "./User.scss";

const User = () => {
  const { user } = useContext(Context);

  const {
    login: username,
    html_url: link,
    avatar_url: image,
    bio: description,
    company,
    location,
    blog: website,
  } = user;

  return (
    <article className="user">
      <img src={image} alt={username} />
      <p>Username: {username}</p>
      <p>Link: {link}</p>
      <p>Description: {description}</p>
      <p>
        <img className="user__icon" src={office} alt={company} /> {company}
      </p>
      <p>
        <img className="user__icon" src={pin} alt={location} /> {location}
      </p>
      <p>
        <img className="user__icon" src={external} alt={website} /> {website}
      </p>
    </article>
  );
};

export default User;
