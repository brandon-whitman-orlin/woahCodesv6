import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Navbar = ({ name, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const combinedClassName = `navbar ${className}`.trim();

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

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
              // Allow keyboard activation with Enter or Space
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
