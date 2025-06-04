import React, { useEffect, useState } from 'react';

const NavbarSpacer = () => {
  const [height, setHeight] = useState(0);

  const updateHeight = () => {
    requestAnimationFrame(() => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        setHeight(navbar.offsetHeight);
      }
    });
  };

  useEffect(() => {
    updateHeight();

    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(navbar);

    window.addEventListener('resize', updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return <div className="navbar-spacer" style={{ height: `${height}px` }} />;
};

export default NavbarSpacer;
