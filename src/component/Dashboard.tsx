/*
import React from "react";

const Dashboard = () => {
  return (
    <div id="dashboard" className="container-fluid border border-dark">
      <div
        id="banner"
        style={{ margin: "10px", border: "2px", borderColor: "orange" }}
      >
        utku
      </div>
    </div>
  );
};
*/

import React, { useContext } from "react";
import AuthContext from "../utils/context";

const Dashboard = () => {
  const { sessionEnabled, username } = useContext(AuthContext);

  return (
    <div>
      {sessionEnabled && <p>Welcome back, {username}!</p>}
      {/* Personalize based on sessionEnabled and username */}
    </div>
  );
};

export default Dashboard;
