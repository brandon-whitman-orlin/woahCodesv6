import React, { useEffect } from 'react';

const Z_mediaBackground = () => {
  useEffect(() => {
    // Handle <img> elements
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      try {
        const url = new URL(img.src);
        const parts = url.pathname.split('/');
        const filename = parts.pop();

        const dotIndex = filename.lastIndexOf('.');
        if (dotIndex === -1) {
          console.warn('Image filename has no extension:', filename);
          return;
        }

        const name = filename.slice(0, dotIndex);
        const ext = filename.slice(dotIndex);
        const newFilename = `${name}_lowres${ext}`;
        parts.push(newFilename);

        const newPath = parts.join('/');
        const newUrl = `${url.origin}${newPath}`;

        img.style.backgroundImage = `url('${newUrl}')`;
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
        img.style.backgroundRepeat = 'no-repeat';

        console.log(`Set background-image for ${img.src} to ${newUrl}`);
      } catch (e) {
        console.warn('Could not parse image src:', img.src);
      }
    });

    // Handle <video> elements
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      try {
        const url = new URL(video.src);
        const parts = url.pathname.split('/');
        const filename = parts.pop();

        const dotIndex = filename.lastIndexOf('.');
        if (dotIndex === -1) {
          console.warn('Video filename has no extension:', filename);
          return;
        }

        const name = filename.slice(0, dotIndex);
        const posterFilename = `${name}_lowres.jpg`;
        parts.push(posterFilename);

        const newPath = parts.join('/');
        const posterUrl = `${url.origin}${newPath}`;

        video.setAttribute('poster', posterUrl);

        console.log(`Set poster for ${video.src} to ${posterUrl}`);
      } catch (e) {
        console.warn('Could not parse video src:', video.src);
      }
    });
  }, []);

  return null;
};

export default Z_mediaBackground;
