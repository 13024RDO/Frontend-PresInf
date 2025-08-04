import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ label, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `btn w-100 mb-2 text-start ${
          isActive ? "btn-primary fw-bold text-white" : "btn-outline-light text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;
