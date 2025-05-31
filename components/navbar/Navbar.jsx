import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Navbar = ({ name, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const combinedClassName = `navbar ${className} ${isScrolled ? "scrolled" : ""}`.trim();

  return (
    <nav className={combinedClassName}>
      <a className="site-link" href="/">
        {name}
      </a>

      <ul className="navigation">
        {React.Children.map(children, (child, index) => (
          <li className="nav-link" key={index}>
            {child}
          </li>
        ))}
      </ul>

      <ul className="small-navigation" data-open={isOpen}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const handleInteraction = (e) => {
              if (
                e.type === "click" ||
                (e.type === "keydown" && (e.key === "Enter" || e.key === " "))
              ) {
                setIsOpen(false);
              }
            };

            const clonedChild = React.cloneElement(child, {
              tabIndex: isOpen ? undefined : -1,
              onClick: handleInteraction,
              onKeyDown: handleInteraction,
            });

            return (
              <li className="small-nav-link" key={index}>
                {clonedChild}
              </li>
            );
          }

          return (
            <li className="small-nav-link" key={index}>
              {child}
            </li>
          );
        })}
      </ul>

      <button className="open-nav" data-open={isOpen} onClick={toggleNav}>
        {isOpen ? <Close /> : <Menu />}
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  name: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Navbar;