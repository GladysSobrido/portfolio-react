import "./NavBar.css";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <p>mm</p>
      <div className="mainmenu">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "normal"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "normal"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "normal"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "normal"
          }
        >
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
