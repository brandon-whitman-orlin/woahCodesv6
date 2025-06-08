import React, { useState, useEffect } from "react";
import "../blogpost.css";

import Navbar from "../../components/navbar/Navbar";
import NavbarSpacer from "../../components/navbar/NavbarSpacer";
import PageSection from "../../components/pagesection/PageSection";
import Footing from "../../components/footing/Footing";
import Background from "../../components/background/Background";

import CodeBlock from "../../components/codeblock/CodeBlock";

import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";

import data from "./index.json";
import heroImage from "./assets/hero.png";
import comparison from "./assets/comparison.jpg";
import comparison2 from "./assets/comparison2.jpg";
import loadtime from "./assets/loadtime.gif";

function Imageplaceholder() {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [month, day, year] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="blog page">
      <Background />
      <Navbar name="woahCodes">
        <a href="/#about">About</a>
        <a href="/#experience">Experience</a>
        <a href="/blog">Blog</a>
        <a href="/playground">Playground</a>
        <a
          href="https://drive.google.com/file/d/1TQbA8_gKywt2oy38jprAi8jHpJ2YniDi/view"
          target="_blank"
        >
          Resume
        </a>
        <a href="/#contact">Contact</a>
      </Navbar>
      <NavbarSpacer />
      {/* START_CONTENT */}
      <article className="blogpost">
        <PageSection>
          <img
            src={heroImage}
            alt="Progressive Image Placeholder Enhancement"
            className="blog-hero"
          />
          <h1 className="blog-title">{data.title}</h1>
          <h2 className="blog-summary">{data.summary}</h2>
          <div className="blog-info">
            <div className="publish-date blog-information">
              <Calendar />
              <time className="blog-date" dateTime={data.publishDate}>
                {formatDate(data.publishDate)}
              </time>
            </div>
            <div className="reading-time blog-information">
              <Clock />
              <p className="blog-time">{data.readingTime} minute read</p>
            </div>
          </div>
          <div className="blog-text-wrapper">
            <h3 className="blog-heading">
              Why are fast loading images so important?
            </h3>
            <p className="blog-text">
              Images are essential for making web pages visually appealing and
              meaningful—but they come at a cost. High-resolution images often
              mean large file sizes, which can significantly slow down page load
              times.
            </p>
            <p className="blog-text">
              And in web development, slow loading is a big deal. If a user has
              to wait too long, especially on a slow connection, they may simply
              leave your site.
            </p>
            <p className="blog-text">
              That's why optimizing image delivery is so important. One common
              strategy is to use placeholder images while the high-resolution
              versions load in. This helps maintain layout stability and gives
              users a smoother experience.
            </p>
            <p className="blog-text">Some popular placeholder types include:</p>
            <ul>
              <li>Blurred previews</li>
              <li>Skeleton loaders</li>
              <li>Dominant color blocks</li>
            </ul>
            <p className="blog-text">
              My personal favorite? A low-resolution version of the same
              image—lightweight, fast, and effective.
            </p>
            <figure className="blog-image">
              <img
                src={comparison}
                alt="Two image assets with drastic file size difference."
              />
              <figcaption>
                Two images (one greatly compressed) look very similar, despite
                one being far smaller and thus loading much faster.
              </figcaption>
            </figure>

            <h3 className="blog-heading">
              The power of a Low-Resolution preview
            </h3>
            <p className="blog-text">
              Let's say you have a high-resolution image that's 500KB in size. A
              low-resolution version of the same image might be just 22KB—or
              even less.
            </p>
            <p className="blog-text">
              On a strong connection, this difference may feel negligible. But
              on slower networks (e.g., 3G), that large image could take{" "}
              <strong>up to a minute</strong> to load. Meanwhile, the low-res
              version appears almost instantly.
            </p>
            <p className="blog-text">
              This drastically improves perceived performance. Users see{" "}
              <em>something</em> immediately, and the full image loads
              seamlessly after that.
            </p>
            <figure className="blog-image">
              <img
                src={comparison2}
                alt="Two image assets with drastic load time difference."
              />
              <figcaption>
                Two images (one greatly compressed) again look very similar,
                however due to compression, one loads in a fraction of the time.
              </figcaption>
            </figure>

            <h3 className="blog-heading">
              The Technique: Combining both in a single{" "}
              <CodeBlock inline lang="jsx">{`<img>`}</CodeBlock> tag
            </h3>
            <p className="blog-text">
              Here's the simple trick I use to achieve progressive image
              enhancement: Use the{" "}
              <strong>low-resolution image as a background</strong> on the same{" "}
              <CodeBlock inline lang="jsx">{`<img>`}</CodeBlock> element that
              displays the high-resolution image.
            </p>
            <CodeBlock lang="jsx">
              {`<img 
  src="high-resolution.jpg" 
  style="background-image: url('low-resolution.jpg');" 
  alt="Descriptive alt text"/>`}
            </CodeBlock>
            <p className="blog-text">Why this works:</p>
            <ul>
              <li>
                The browser loads and displays the low-resolution background
                very quickly.
              </li>
              <li>
                The high-resolution image gradually loads and renders over the
                top.
              </li>
              <li>
                No need for extra HTML wrappers or complex JavaScript—just one
                image element and a little CSS.
              </li>
            </ul>
            <figure className="blog-image">
              <img
                src={loadtime}
                alt="GIF recording of the image overlay enchancement in action."
              />
              <figcaption>
                The low-resolution image loads instantly as a placeholder, while
                the high-resolution version loads on top once it's ready.{" "}
              </figcaption>
            </figure>
            <p className="blog-text">
              This makes it easy to integrate into existing components, and it
              degrades gracefully on older browsers.
            </p>

            <h3 className="blog-heading">
              BONUS: Automating placeholder enhancements
            </h3>
            <p className="blog-text">
              Manually setting background images for every{" "}
              <CodeBlock inline lang="jsx">{`<img>`}</CodeBlock> can get
              tedious, especially in larger projects. In my own projects, I use
              a small React component that automatically applies low-resolution
              placeholders based on naming conventions.
            </p>

            <CodeBlock lang="jsx">
              {`import React, { useEffect } from 'react';

const mediaBackground = () => {
  useEffect(() => {
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
        const newFilename = \`$\{name}_lowres$\{ext}\`;
        parts.push(newFilename);

        const newPath = parts.join('/');
        const newUrl = \`$\{url.origin}$\{newPath}\`;

        img.style.backgroundImage = \`url('$\{newUrl}')\`;
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
        img.style.backgroundRepeat = 'no-repeat';

        console.log(\`Set background-image for $\{img.src} to $\{newUrl}\`);
      } catch (e) {
        console.warn('Could not parse image src:', img.src);
      }
    });
  }, []);

  return null;
};

export default mediaBackground;`}
            </CodeBlock>

            <p className="blog-text">
              This component runs once on page load and applies placeholder
              logic automatically across the entire page.
            </p>
            <p className="blog-text">
              For this to work, you'll need to generate low-resolution versions
              of your images and videos with consistent naming (e.g.,
              filename_lowres.jpg). This can be automated in your build pipeline
              with tools like ImageMagick, Sharp, or FFmpeg.
            </p>
            <p className="blog-text">
              Not using React? No problem. This approach can easily be adapted
              for vanilla JavaScript, injected with a{" "}
              <CodeBlock inline lang="jsx">{`<script>`}</CodeBlock> tag, or
              implemented in frameworks like Vue, Svelte, or even server-side
              with templating engines. The idea is flexible—just choose the
              method that fits your current stack.
            </p>

            <h3 className="blog-heading">Closing statement</h3>
            <p className="blog-text">
              This small tweak can have a big impact. It's lightweight, elegant,
              and improves UX without requiring extra libraries or complex
              logic.
            </p>
            <p className="blog-text">
              If you're already optimizing your images, this is a great extra
              step to enhance perceived performance and deliver a more polished
              experience for your users.
            </p>
            <p className="blog-text">
              To see this enhancement in action, check out this{" "}
              <a
                href="https://codepen.io/brandon-whitman-orlin/full/emNEdyX"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodePen
              </a>{" "}
              I put together!
            </p>
          </div>
        </PageSection>
      </article>
      {/* END_CONTENT */}
      <Footing />
    </div>
  );
}

export default Imageplaceholder;
