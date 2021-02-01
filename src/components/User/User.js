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
    name,
  } = user;

  return (
    <article className="user card">
      <a href={link} target="_blank" rel="noopener nofollow noreferrer" className="user__user">
        <figure>
          <img src={image} alt={username} className="user__photo" />
        </figure>
        <figcaption className="user__details">
          {name && <h5 className="user__name">{name}</h5>}
          <p className="user__username">{username}</p>
        </figcaption>
      </a>

      {description && <p className="user__description">{description}</p>}

      {company && (
        <p className="user__detail user__detail--first">
          <img className="user__icon" src={office} alt={company} />
          <span className="user__text">{company}</span>
        </p>
      )}

      {location && (
        <p className="user__detail">
          <img className="user__icon" src={pin} alt={location} />
          <span className="user__text">{location}</span>
        </p>
      )}

      {website && (
        <p className="user__detail user__detail--last">
          <img className="user__icon" src={external} alt={website} />
          <a href={link} target="_blank" rel="noopener nofollow noreferrer" className="user__text link">
            {website}
          </a>
        </p>
      )}
    </article>
  );
};

export default User;
