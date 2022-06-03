import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { FaBars, FaTimes } from "react-icons/fa";

const NavItem = ({
  nav,
  setCurrentLink,
  currentLink,
  handleSetActive,
  handleNavigation,
}) => {
  const location = useLocation();

  if (location.pathname === "/blog" || location.pathname !== "/") {
    if (nav.url === "blog") {
      return (
        <ReactLink to="/blog" onClick={() => handleNavigation()}>
          Blog
        </ReactLink>
      );
    }
    return (
      <ReactLink to={nav.blogUrl} onClick={() => handleNavigation()}>
        {" "}
        {nav.name}
      </ReactLink>
    );
  }

  if (nav.url === "blog") {
    return (
      <ReactLink to="/blog" onClick={() => handleNavigation()}>
        Blog
      </ReactLink>
    );
  }

  return (
    <Link
      activeClass="active"
      to={nav.url}
      spy={true}
      smooth={true}
      offset={-120}
      duration={100}
      style={{ cursor: "pointer" }}
      onClick={() => handleNavigation()}>
      {nav.name}
    </Link>
  );
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick((prevState) => !prevState);
  const [currentLink, setCurrentLink] = useState("Lock");
  const [header, setHeader] = useState(false);
  const handleSetActive = () => {};

  const [color, setColor] = useState(false);

  const { t } = useTranslation();

  const handleNavigation = () => {
    click && setClick((prevState) => !prevState);
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const links = [
    // {
    //   name: t("lock"),
    //   url: "lock",
    //   blogUrl: "/#lock",
    // },
    {
      name: t("app"),
      url: "app",
      blogUrl: "/#app",
    },
    {
      name: t("vision"),
      url: "vision",
      blogUrl: "/#vision",
    },
    {
      name: t("mission"),
      url: "mission",
      blogUrl: "/#mission",
    },
    {
      name: t("team"),
      url: "team",
      blogUrl: "/#team",
    },
    {
      name: t("contact"),
      url: "contact",
      blogUrl: "/#contact",
    },
    { name: t("blog"), url: "blog" },
  ];

  //change  navbar

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={header ? "header  active" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src="./images/company-logo.jpg" alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000000" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {links.map((nav) => (
            <li className="nav-item">
              <NavItem
                nav={nav}
                key={nav.url}
                currentLink={currentLink}
                setCurrentLink={setCurrentLink}
                handleSetActive={handleSetActive}
                handleNavigation={handleNavigation}
              />
            </li>
          ))}
        </ul>
        <select
          onChange={(e) => i18next.changeLanguage(e.target.value)}
          style={{
            padding: "0px",
            width: "100px",
            border: "2px solid #d00355",
            borderRadius: "20px",
          }}>
          <option defaultChecked disabled={true}>
            Lang
          </option>
          <option value="en" defaultChecked>
            English
          </option>
          <option value="sv" defaultChecked>
            Swedish
          </option>
        </select>
      </nav>
    </div>
  );
};

export default Navbar;
