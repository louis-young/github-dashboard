import React, { useContext } from "react";

import { Context } from "../../context/Context";

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
    <article>
      <img src={image} alt={username} />
      <p>Username: {username}</p>
      <p>Link: {link}</p>
      <p>Description: {description}</p>
      <p>Company: {company}</p>
      <p>Location: {location}</p>
      <p>Website: {website}</p>
    </article>
  );
};

export default User;
