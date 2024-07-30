import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>This Page Not Available</h1>
      <NavLink to="/">Go to Home</NavLink>
    </div>
  );
};

export default PageNotFound;
