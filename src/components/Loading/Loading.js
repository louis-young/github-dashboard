import React from "react";

import { HashLoader } from "react-spinners";

import "./Loading.scss";

const Loading = () => {
  return (
    <section className="loading">
      <HashLoader color="#6d60d0" size={50} />
    </section>
  );
};

export default Loading;
