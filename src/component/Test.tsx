import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleButtonClick = () => {
    navigate("/dashboard"); // Navigate to the dashboard route
  };

  return (
    <div>
      <h2>Test Page</h2>
      <button onClick={handleButtonClick}>Go to Dashboard</button>
      <Link to="/dashboard">Or go to Dashboard using a link</Link>
    </div>
  );
};

export default Test;
