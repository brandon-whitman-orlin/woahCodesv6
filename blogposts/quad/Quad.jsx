import React, { useState, useEffect } from "react";
import "../blogpost.css";

import Navbar from "../../components/navbar/Navbar";
import NavbarSpacer from "../../components/navbar/NavbarSpacer";
import PageSection from "../../components/pagesection/PageSection";
import Footing from "../../components/footing/Footing";
import Background from "../../components/background/Background";

import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";

import data from "./index.json";
import heroImage from "./assets/hero.png";
import quad_team from "./assets/the-quad-team.jpg";
import quad_page from "./assets/quad-page.png";
import old_quad_page from "./assets/old-quad-page.png";
import hkimmigration_page from "./assets/hkimmigration-page.png";
import param from "./assets/param.jpg";
import quad_now from "./assets/quad-now.png";

function Quad() {
  const [readingTime, setReadingTime] = useState(null);

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

  useEffect(() => {
    const blogpostEl = document.querySelector(".blogpost");
    if (!blogpostEl) return;

    let totalWords = 0;

    const walkNodes = (node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE ||
        node.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ) {
        for (const child of node.childNodes) {
          walkNodes(child);
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
        totalWords += wordCount;
      }
    };

    walkNodes(blogpostEl);

    const estimatedTime = Math.ceil(totalWords / 200);
    setReadingTime(estimatedTime);
  }, []);

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
      <div className="blogpost">
        <PageSection>
          <img src={heroImage} alt="Quad Consultation" className="blog-hero" />
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
              <p className="blog-time">
                {readingTime !== null
                  ? `${readingTime} minute read`
                  : "[Calculating...]"}
              </p>
            </div>
          </div>
          <div className="blog-text-wrapper">
            <h3 className="blog-heading">How it all started</h3>
            <p className="blog-text">
              In undergrad, I found myself working on a group project with some
              classmates I only knew somewhat well at the time. I can't even
              recall the original assignment anymore—but what I <em>do</em>{" "}
              remember is the energy.
            </p>
            <p className="blog-text">
              There was something different about the way we approached
              problems. Unlike many of our peers, we weren't just trying to meet
              the rubric—we were in it for the challenge and the craft. We cared
              about delivering satisfying, polished solutions. Solving problems
              was genuinely <em>fun</em> for us, and we took it seriously.
            </p>
            <p className="blog-text">
              I still laugh thinking about how we presented that first project
              in full suit and tie. The professor and the rest of the class
              looked at us like we'd lost our minds—but that became our thing.
              From then on, we worked together whenever we could, and always
              showed up in suits. A little ridiculous? Maybe. But it was part of
              what made us feel like a real team.
            </p>
            <figure className="blog-image">
              <img src={quad_team} alt="The quad team" />
              <figcaption>
                From left to right, my Computer Science professor{" "}
                <a
                  href="https://www.linkedin.com/in/vinayakelangovan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Professor Elangovan
                </a>
                , our Back-End Developer{" "}
                <a
                  href="https://www.linkedin.com/in/gabriel-nulman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gabe
                </a>
                , myself, our Lead Consultant{" "}
                <a
                  href="https://www.linkedin.com/in/jacob-gampa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jacob
                </a>
                , and our Creative Director{" "}
                <a
                  href="https://www.linkedin.com/in/parth-shahcs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parth
                </a>
                .
              </figcaption>
            </figure>
            <h3 className="blog-heading">The birth of Quad Consultation</h3>
            <p className="blog-text">
              Somewhere along the way, we realized this collaboration didn't
              have to stay within the classroom. So we started brainstorming:{" "}
              <em>What if we turned this into something real?</em>
            </p>
            <p className="blog-text">
              That was the beginning of{" "}
              <a
                href="https://quadconsultation.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Quad Consultation</strong>
              </a>
              .
            </p>
            <p className="blog-text">
              We envisioned a consulting firm where small and medium-sized
              businesses could come to us with their digital problems. We'd
              build websites, custom software, handle SEO, set up e-commerce
              stores—whatever people needed that we could figure out, we were
              eager to deliver.
            </p>
            <p className="blog-text">
              Each of us had a distinct strength. I handled the front-end.{" "}
              <a
                href="https://www.linkedin.com/in/gabriel-nulman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gabe
              </a>{" "}
              owned the back-end.{" "}
              <a
                href="https://www.linkedin.com/in/parth-shahcs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parth
              </a>{" "}
              had a strong eye for creative direction, and{" "}
              <a
                href="https://www.linkedin.com/in/jacob-gampa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jacob
              </a>{" "}
              was a natural consultant—great at understanding client needs and
              translating them into technical goals.
            </p>
            <p className="blog-text">
              We even looped in a talented mutual friend,{" "}
              <a
                href="https://linktr.ee/d3vil_cr3ations"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dev
              </a>
              , who designed a full visual identity for the company.
            </p>
            <figure className="blog-image">
              <img src={quad_page} alt="The Quad Website" />
              <figcaption>
                A section of the official Quad website, featuring an asset
                designed by{" "}
                <a
                  href="https://linktr.ee/d3vil_cr3ations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev
                </a>
                .
              </figcaption>
            </figure>
            <h3 className="blog-heading">
              Building the Company Website (The Hard Way)
            </h3>
            <p className="blog-text">
              One of my proudest (and most exhausting) accomplishments during
              this time was building our company website entirely from scratch.
            </p>
            <p className="blog-text">
              It was the largest project I had ever tackled. At the time, I only
              knew the basics: vanilla HTML, CSS, and JavaScript. No frameworks.
              No templating systems. Just raw code—and a lot of repeated blocks.
              It took months of late nights, endless debugging, and more than a
              few full redesigns (looking at you, Parth 😅).
            </p>
            <p className="blog-text">
              The website had to be responsive, stylish, and clearly communicate
              our wide range of services. It was a tough balance—technical
              content had to be readable and inviting, even to non-technical
              clients. It wasn't perfect, but it taught me more than any
              textbook ever could.
            </p>
            <p className="blog-text">
              This project cemented my love for front-end development—and,
              honestly, for computer science in general.
            </p>
            <figure className="blog-image">
              <img
                src={old_quad_page}
                alt="An old version of the Quad Website"
              />
              <figcaption>
                An old version of the Quad Website, including the old logo.
              </figcaption>
            </figure>
            <h3 className="blog-heading">Projects we're proud of</h3>
            <p className="blog-text">
              While Quad Consultation wasn't a full-time operation, we still
              managed to complete a handful of meaningful, professional-grade
              projects.
            </p>
            <h4 className="blog-heading-small">HK Immigration</h4>
            <p className="blog-text">
              We developed a home and contact page for{" "}
              <a
                href="https://www.hkimmigrationgroup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                HK Immigration
              </a>
              , a local immigration company. The site was designed for
              simplicity and ease-of-use, with careful attention given to
              multi-language accessibility. It was our first time working with a
              real client outside of school, and it gave us a valuable taste of
              real-world requirements and expectations.
            </p>
            <figure className="blog-image">
              <img src={hkimmigration_page} alt="The HK Immigration Website" />
              <figcaption>
                The landing page for{" "}
                <a
                  href="https://www.hkimmigrationgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HK Immigration
                </a>
                .
              </figcaption>
            </figure>
            <h4 className="blog-heading-small">PARAM - University Chatbot</h4>
            <p className="blog-text">
              This one was a standout: an AI chatbot for Penn State Abington's
              Computer Science department. The bot, <strong>PARAM</strong>, was
              trained on course schedules, program requirements, and general
              university FAQs. Its goal was to handle basic advising questions,
              so that human advisors could focus on more complex, individualized
              support. It was one of the most technically complex and rewarding
              builds we did.
            </p>
            <figure className="blog-image">
              <img src={param} alt="The PARAM Chat UI" />
              <figcaption>The UI for the PARAM Chatbot</figcaption>
            </figure>
            <h3 className="blog-heading">Where things stand today</h3>
            <p className="blog-text">
              Quad Consultation never officially disbanded. There was no formal
              announcement or shutdown—just four friends slowly pulled in
              different directions after graduation. We all found jobs in the
              tech industry, scattered across companies and cities.
            </p>
            <p className="blog-text">
              But the energy we shared at Quad? That's still with me. I still
              approach every project—personal or professional—with that same
              desire to go above and beyond. To solve problems <em>well</em>,
              not just get them done.
            </p>
            <p className="blog-text">
              As for Quad Consultation's future? I don't know exactly. But if
              the opportunity to reboot it ever came, I'd do it all over again
              in a heartbeat.
            </p>
            <figure className="blog-image">
              <img src={quad_now} alt="The Quad Consultation About Page" />
              <figcaption>
                The "About the Developers" section from Quad's website.
              </figcaption>
            </figure>
            <h3 className="blog-heading">Final thoughts</h3>
            <p className="blog-text">
              Quad Consultation wasn't just a student side hustle. It was a
              testing ground, a proving ground, and a launchpad. It taught me
              how to code better, work better, and think like a professional
              even before I officially became one.
            </p>
            <p className="blog-text">
              Feel free to check{" "}
              <a
                href="https://quadconsultation.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Quad Consultation</strong>
              </a>{" "}
              out for yourself! Just be gentle, I made the site almost 3 years
              ago.
            </p>
          </div>
        </PageSection>
      </div>
      {/* END_CONTENT */}
      <Footing />
    </div>
  );
}

export default Quad;
