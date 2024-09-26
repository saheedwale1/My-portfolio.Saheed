import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import navigation from "../styles/navigationbar.module.css";

const NavigationBar = () => {
  const [nav, setNav] = useState(false);
  const routes = [
    { id: 1, to: "/", link: "home" },
    { id: 2, to: "/about", link: "about" },
    { id: 3, to: "/project", link: "project" },
    { id: 4, to: "/service", link: "service" },
    { id: 5, to: "/contact", link: "contact" },
  ];

  return (
    <div className={navigation.navBar}>
      <div>
        <h1 className={navigation.logo}>SM</h1>
      </div>
      <ul className={navigation.ul}>
        {routes.map((route) => (
          <li className={navigation.li} key={route.id}>
            <Link to={route.to}>{route.link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className={navigation.bars}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={navigation.phoneItems}>
          {routes.map((route) => (
            <li
              onClick={() => setNav(!nav)}
              className={navigation.phoneItem}
              key={route.id}
            >
              <Link to={route.to}>{route.link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationBar;
