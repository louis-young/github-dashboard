import React from "react";

import "./Metric.scss";

const Metric = ({ icon, name, quantity }) => {
  const className = name.toLowerCase();

  return (
    <article className={`metric metric--${className} card`}>
      <figure className="metric__wrapper">
        <img src={icon} alt={name} className="metric__icon" />
      </figure>
      <figcaption>
        <h3 className="metric__figure">{quantity}</h3>
        <p className="metric__name">{name}</p>
      </figcaption>
    </article>
  );
};

export default Metric;
