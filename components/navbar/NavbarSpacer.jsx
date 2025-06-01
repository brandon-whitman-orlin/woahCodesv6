import React, { useEffect, useState } from 'react';

const NavbarSpacer = () => {
  const [height, setHeight] = useState(0);

  const updateHeight = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setHeight(navbar.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight();

    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight); // Optional: if navbar resizes during scroll

    // Optional: handle DOM updates that may affect height
    const observer = new MutationObserver(updateHeight);
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      observer.observe(navbar, { attributes: true, childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
      observer.disconnect();
    };
  }, []);

  return <div className="navbar-spacer" style={{ height: `${height}px` }} />;
};

export default NavbarSpacer;