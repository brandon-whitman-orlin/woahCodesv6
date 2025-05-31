import React from "react";
import PropTypes from "prop-types";
import "./PageSection.css";

const PageSection = ({ children, className = "" }) => {
  const combinedClassName = `page-section ${className}`.trim();

  return (
    <section className={combinedClassName}>
      {children}
    </section>
  );
};

PageSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PageSection;
