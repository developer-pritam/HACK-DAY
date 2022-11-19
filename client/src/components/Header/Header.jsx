import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
import Home from "@material-ui/icons/Home";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const theme = {
  text: "#14213d",
  body: "#E5E5E5",
  highlight: "#A6E1FA",
};
const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = () => {
  return (
    <div>
      <header className="header">
        <NavLink to="/" tag={Link} className="logo">
          <span className="logo-name" style={{ color: theme.text }}>
            PingoLearn
          </span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          <li>
            <NavLink
              to="/"
              tag={Link}
              activeStyle={{ color: theme.text }}
              style={{ color: theme.text }}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              <Home />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ color: theme.text }}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lessons"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ color: theme.text }}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Lessons
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/grammar"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ color: theme.text }}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Grammar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/unitdata"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ color: theme.text }}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Unit List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/partnerlist"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ color: theme.text }}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Partner List
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
