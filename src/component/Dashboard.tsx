import React, { useContext } from "react";
import { AuthContext } from "./context";

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
