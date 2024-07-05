import "./NavBar.css";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <p>Main menu</p>
      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </NavLink>
    </>
  );
}

export default NavBar;
