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
import terrarium from "./assets/terrarium.webp";
import development from "./assets/development.png";
import logo from "./assets/logo.png";
import reddit from "./assets/reddit.png";
import layout from "./assets/layout.png";
import collaborate from "./assets/collaborate.png";
import code from "./assets/code.png";
import approval from "./assets/approval.png";

function Niceopods() {
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
      <div className="blogpost">
        <PageSection>
          <img src={heroImage} alt="Niceopods" className="blog-hero" />
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
            <h3 className="blog-heading">A lifelong love for tiny creatures</h3>
            <p className="blog-text">
              I've always been the kind of person who gets excited about the
              tiny stuff—literally. As a kid, I loved collecting bugs and small
              critters, building terrariums, and watching them go about their
              lives.
            </p>
            <p className="blog-text">
              Isopods were a favorite. Something about them just clicked with
              me.
            </p>
            <p className="blog-text">
              That fascination stuck around. Today, I still keep a large isopod
              colony in a 10-gallon terrarium. It's been going strong for over
              two years now.
            </p>
            <figure className="blog-image">
              <img src={terrarium} alt="My current terrarium" />
              <figcaption>My current terrarium setup.</figcaption>
            </figure>

            <h3 className="blog-heading">The research problem</h3>
            <p className="blog-text">
              Before I got my first colony, I did what any responsible pet owner
              would do—I tried to learn everything I could.
            </p>
            <p className="blog-text">
              Turns out, that was easier said than done.
            </p>
            <p className="blog-text">
              There were a few scattered forum posts, some Reddit threads, and
              the occasional care sheet—but no centralized hub of reliable
              information. And worse, a lot of what was out there contradicted
              itself.
            </p>
            <p className="blog-text">
              It was frustrating. Especially compared to the wealth of resources
              available for more popular pets.{" "}
            </p>
            <p className="blog-text">
              That's when I decided to make the resource I wished I had found.
            </p>

            <h3 className="blog-heading">The birth of Niceopods</h3>
            <p className="blog-text">
              Development for{" "}
              <a
                href="https://www.niceopods.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Niceopods</strong>
              </a>{" "}
              officially began on March 15, 2025.
            </p>
            <p className="blog-text">
              My goal was simple: create a well-organized, visually appealing,
              and genuinely helpful educational hub for isopod care.
            </p>
            <p className="blog-text">
              A place where people could learn everything from species-specific
              husbandry to breeding to legal regulations—without the guesswork.
            </p>
            <figure className="blog-image">
              <img src={development} alt="A page from Niceopods.com" />
              <figcaption>
                One of the landing pages from{" "}
                <a
                  href="https://www.niceopods.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Niceopods.com</strong>
                </a>
                .
              </figcaption>
            </figure>
            <p className="blog-text">
              I also wanted the site to have personality. My girlfriend{" "}
              <a
                href="https://www.linkedin.com/in/e-murray02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ellie
              </a>{" "}
              designed the logo, which ended up becoming a cornerstone of the
              brand's identity.
            </p>
            <figure className="blog-image">
              <img src={logo} alt="The Niceopods logo" />
              <figcaption>
                The Niceopods logo designed by{" "}
                <a
                  href="https://www.linkedin.com/in/e-murray02/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ellie
                </a>
                .
              </figcaption>
            </figure>

            <h3 className="blog-heading">Finding the right images</h3>
            <p className="blog-text">
              One of the first major roadblocks? Imagery.
            </p>
            <p className="blog-text">
              There were decent isopod photos online, sure—but most of the good
              ones were hidden behind expensive paywalls. And even then, there
              was almost no variety in species.
            </p>
            <p className="blog-text">
              It wasn't just a money issue—it was a biodiversity issue.
            </p>
            <p className="blog-text">
              So I turned to the{" "}
              <a
                href="https://www.reddit.com/r/isopods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                r/Isopods
              </a>{" "}
              community. I'd been active there for a while, and I knew people
              shared stunning photos of their colonies.
            </p>
            <p className="blog-text">
              I reached out to the mods to see if I could use some of those
              images for educational purposes.
            </p>
            <p className="blog-text">
              Two months (and a lot of messages) later, I got the green light.
            </p>
            <p className="blog-text">
              Thanks to that community, Niceopods now features images of dozens
              of species, straight from the hands of passionate keepers.
            </p>
            <figure className="blog-image">
              <img src={reddit} alt="The r/Isopods community" />
              <figcaption>
                The{" "}
                <a
                  href="https://www.reddit.com/r/isopods/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  r/Isopods
                </a>{" "}
                community, featuring a post from reddit user{" "}
                <a
                  href="https://www.reddit.com/user/TheHadoukenator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TheHadoukenator
                </a>
                .
              </figcaption>
            </figure>

            <h3 className="blog-heading">
              Making scientific content actually work
            </h3>
            <p className="blog-text">
              The next challenge was structural. I didn't just want to dump a
              bunch of info on a page. I needed to figure out how to present
              scientific and husbandry content in a way that was readable,
              digestible, and genuinely helpful.
            </p>
            <p className="blog-text">My plan was to create:</p>
            <ul>
              <li>Species profiles</li>
              <li>Guides for care, breeding, and feeding</li>
              <li>
                Articles about legal restrictions (yes, some isopods are
                considered pests!)
              </li>
            </ul>
            <p className="blog-text">
              It took some trial and error. I tested different layouts,
              experimented with navigation, and adjusted based on feedback.
            </p>
            <p className="blog-text">
              Eventually, I landed on something that felt right—clear,
              scrollable content with dedicated sections and intuitive page
              structure.
            </p>
            <figure className="blog-image">
              <img src={layout} alt="A layout from the Niceopods website" />
              <figcaption>A layout from the Niceopods website.</figcaption>
            </figure>

            <h3 className="blog-heading">
              Beyond articles: tools and automation
            </h3>
            <p className="blog-text">
              <em>Niceopods</em> isn't just a collection of articles—it's also
              packed with tools designed to help hobbyists save time and make
              better decisions.
            </p>
            <p className="blog-text">
              One of the biggest features I built was a{" "}
              <strong>breeder availability scraper</strong>.
            </p>
            <p className="blog-text">
              Online breeders tend to sell out of popular species quickly. So I
              wrote a web scraper that checks stock on multiple breeder sites,
              then surfaces it directly in search results on <em>Niceopods</em>.
            </p>
            <p className="blog-text">
              This lets users quickly find where to buy a species—and who has
              the best price or reliability.
            </p>
            <p className="blog-text">I also added:</p>
            <ul>
              <li>
                An <strong>Affiliate Supplies Page</strong> for curated,
                approved supplies
              </li>
              <li>
                A <strong>Contact/Collaboration Form</strong> so users can
                submit questions or pitch contributions—whether that's an
                article draft or photography
              </li>
            </ul>
            <figure className="blog-image">
              <img src={collaborate} alt="The Niceopods collaboration form" />
              <figcaption>The collaboration form from Niceopods.</figcaption>
            </figure>

            <h3 className="blog-heading">Tech stack and learning curves</h3>
            <p className="blog-text">
              This was the largest personal project I've worked on to this day.
            </p>
            <p className="blog-text">
              I built <em>Niceopods</em> entirely from scratch using React. That
              decision made it easier to keep things modular, which was crucial
              for handling species pages, tools, forms, and article content.
            </p>
            <p className="blog-text">
              But it wasn't without its challenges. From scraping dynamic
              websites to handling form validation and submissions, there was a
              lot of problem-solving involved—some of which took days to
              untangle.
            </p>
            <p className="blog-text">
              But every bug, every dead end, every weird layout issue… taught me
              something new.
            </p>
            <figure className="blog-image">
              <img src={code} alt="The stats stored with each isopod" />
              <figcaption>
                The table displaying the stats for each isopod species.
              </figcaption>
            </figure>

            <h3 className="blog-heading">
              Still in progress—but already making an impact
            </h3>
            <p className="blog-text">
              <em>Niceopods</em> is still in active development. There are more
              species to profile, more features to add, and plenty of polish
              left to apply.
            </p>
            <p className="blog-text">
              But I'm incredibly proud of where it stands today. The feedback
              I've received—from both hobbyists and fellow devs—has been
              overwhelmingly positive. People are excited to finally have a
              central, reliable place to learn about these fascinating
              creatures.
            </p>
            <figure className="blog-image">
              <img src={approval} alt="People like the Niceopods website" />
              <figcaption>
                Despite being far from finished, Niceopods has already drawn
                some attention.
              </figcaption>
            </figure>

            <h3 className="blog-heading">In conclusion</h3>
            <p className="blog-text">
              <em>Niceopods</em> started as a passion project, born from a love
              for tiny creatures and a frustration with bad info.
            </p>
            <p className="blog-text">
              It turned into something bigger—a site that helps others get into
              the hobby, care for their animals better, and connect with a small
              but passionate community.
            </p>
            <p className="blog-text">
              If you're curious, check it out for yourself at{" "}
              <a
                href="https://www.niceopods.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Niceopods.com</strong>
              </a>
              . And if you'd like to contribute or collaborate, I'd love to hear
              from you.
            </p>
            <p className="blog-text">
              Thanks to{" "}
              <a
                href="https://www.linkedin.com/in/e-murray02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ellie
              </a>{" "}
              for the logo, to the{" "}
              <a
                href="https://www.reddit.com/r/isopods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                r/Isopods
              </a>{" "}
              community for their support, and to everyone who helped bring this
              weird little dream to life.
            </p>
          </div>
        </PageSection>
      </div>
      {/* END_CONTENT */}
      <Footing />
    </div>
  );
}

export default Niceopods;
