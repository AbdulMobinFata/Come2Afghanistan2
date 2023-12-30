import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/attention",
    display: "Advice",
  },
  {
    path: "/about",
    display: "About",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  return (
    <header
      className={`header ${showMenu ? "show__menu" : ""}`}
      ref={headerRef}
    >
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <span
              className={`mobile__menu ${showMenu ? "menu-open" : ""}`}
              onClick={toggleMobileMenu}
            >
              <i className="ri-menu-line"></i>
            </span>

            <div className={`navigation ${showMenu ? "show__menu" : ""}`}>
              <ul className="menu d-flex align-items-center gap-4">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                      onClick={closeMobileMenu} // Close the menu when a NavLink is clicked
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
