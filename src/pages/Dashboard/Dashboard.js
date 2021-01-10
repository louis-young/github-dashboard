import React, { useContext } from "react";

import { Context } from "../../context/Context";

const Dashboard = () => {
  const { user } = useContext(Context);

  return (
    <section>
      <h1>Dashboard</h1>
      <pre> {JSON.stringify(user, false, 2)}</pre>
    </section>
  );
};

export default Dashboard;
