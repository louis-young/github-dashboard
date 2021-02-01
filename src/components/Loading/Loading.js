import React from "react";

import { HashLoader } from "react-spinners";

import "./Loading.scss";

const Loading = () => {
  return (
    <section className="loading">
      <HashLoader color="#003f5c" size={50} />
    </section>
  );
};

export default Loading;
