import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ children, image, alt }) => {
  if (!image || !alt) {
    console.error("Hero component requires both 'image' and 'alt' props.");
    return null;
  }

  const isVideo = /\.(mp4|gif)$/i.test(image);

  if (isVideo) {
    return (
      <div className="hero">
        <video src={image} autoPlay disablePictureInPicture loop muted playsInline aria-hidden="true">
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className="hero-content">{children}</div>
      </div>
    );
  }

  return (
    <div className="hero">
      <img src={image} alt={alt} className="hero-image" />
      <div className="hero-content">{children}</div>
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hero;