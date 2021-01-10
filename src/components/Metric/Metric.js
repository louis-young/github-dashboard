import React from "react";

import "./Metric.scss";

const Metric = ({ icon, name, quantity }) => {
  return (
    <article className="metric">
      <img src={icon} alt={name} className="metric__icon" />
      {name}: {quantity}
    </article>
  );
};

export default Metric;
