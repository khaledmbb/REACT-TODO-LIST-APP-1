import React, { useState } from "react";
import { Link } from "react-router-dom";
import links from "./menuItem";
import { FaReact, FaBars, FaPlus } from "react-icons/fa";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h1>React Js</h1>
          <div className="logo-icon">{<FaReact />}</div>
        </div>
        <div className="mobile-menu">
          <div className="toggle-icon" onClick={() => setToggle(!toggle)}>
            {toggle ? <FaBars /> : <FaPlus className="x" />}
          </div>
        </div>
        <div className={toggle ? "links hide-links" : "links show-links"}>
          <ul>
            {links.map(({ title, url, cName }, idx) => (
              <li
                onClick={() => setToggle(!toggle)}
                key={idx}
                className={cName}
              >
                <Link to={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
