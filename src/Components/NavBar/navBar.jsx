import { Link, NavLink } from "react-router-dom";
import "./style.css";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <aside>
      <h1>
        Movies <span>DB</span>
      </h1>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "Button-Custom"
            : isActive
            ? "Button-Custom button-active"
            : ""
        }
      >
        Movies List
      </NavLink>
        <hr></hr>
      <NavLink
        to="/add"
        className={({ isActive, isPending }) =>
          isPending
            ? "Button-Custom"
            : isActive
            ? "Button-Custom button-active"
            : ""
        }
      >
        Add Movie
      </NavLink>
      <hr></hr>
    </aside>
  );
};
export default NavBar;
