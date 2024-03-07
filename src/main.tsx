import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./index.css";
import Login from "./component/Login.tsx";
import Dashboard from "./component/Dashboard";
import Test from "./component/Test"; // Import the Test component
import "bootstrap/dist/css/bootstrap.css";

/*
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
*/

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/test" element={<Test />} />{" "}
      {/* Route for the Test component */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);
