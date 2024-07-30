import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="heading">This is HomePage</h1>
      <img
        src={require("../images/template.jpg")}
        alt="sun"
        className="home_image"
      />
      <img
        src="https://www.astro-seek.com/seek-images/fb/seek_fb_moon_calendar_1200.jpg"
        alt="moon"
        className="home_image"
      />
      <br />
      <NavLink to="/login" className="nav_link">
        Login Page
      </NavLink>
      <NavLink to="/about" className="nav_link">
        About Page
      </NavLink>
      <NavLink to="/nested/content-1" className="nav_link">
        Nested Page
      </NavLink>
      <NavLink to="/printout" className="nav_link">
        Print Out
      </NavLink>
      <NavLink to="/homework" className="nav_link">
        Homework Page
      </NavLink>
      <NavLink to="signup" className="nav_link">
        Signup
      </NavLink>
      <NavLink to="profile" className="nav_link">
        Profile Page
      </NavLink>
      <NavLink to="hide" className="nav_link">
        Conditional Rendering Page
      </NavLink>
      <NavLink to="api" className="nav_link">
        API Page
      </NavLink>
      <NavLink to="crud" className="nav_link">
        CRUD Page
      </NavLink>
      <NavLink to="database" className="nav_link">
        DataBase Page
      </NavLink>
      <NavLink to="class" className="nav_link">
        Class Component
      </NavLink>
    </div>
  );
};

export default HomePage;
