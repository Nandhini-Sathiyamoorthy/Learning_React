import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NestedRountingPage = () => {
  return (
    <div className="outer_container box_size">
      <div className="header box_size"></div>
      <div className="body box_size">
        <div className="sidebar box_size">
          <NavLink
            to="/nested/content-1"
            className={({ isActive }) =>
              isActive ? "link_button selection" : "link_button"
            }
          >
            Content 1
          </NavLink>
          <NavLink
            to="/nested/content-2"
            className={({ isActive }) =>
              isActive ? "link_button selection" : "link_button"
            }
          >
            Content 2
          </NavLink>
          <NavLink
            to="/nested/content-3"
            className={({ isActive }) =>
              isActive ? "link_button selection" : "link_button"
            }
          >
            Content 3
          </NavLink>
        </div>
        <div className="section box_size">
          <div className="content box_size">
            <Outlet></Outlet>
          </div>
          <div className="footer box_size"></div>
        </div>
      </div>
    </div>
  );
};

export default NestedRountingPage;
