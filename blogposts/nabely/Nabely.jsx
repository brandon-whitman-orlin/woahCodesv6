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
import pennState from "./assets/pennstate.jpg";
import nabely_mockup from "./assets/nabely_mockup.png";
import nabely_layout from "./assets/nabely_layout.png";
import nabely_layout_old from "./assets/nabely_layout_old.png";
import competition_winners from "./assets/competition_winners.png";
import nabely_developers from "./assets/nabely_developers.png";

function Nabely() {
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
              <p className="blog-time">{data.readingTime} minute read</p>
            </div>
          </div>
          <div className="blog-text-wrapper">
            <h3 className="blog-heading">How the pandemic changed us</h3>
            <p className="blog-text">
              It was late 2022, and I was midway through my junior year at Penn
              State Abington. Campus life was just beginning to recover from the
              chaos of the Covid-19 outbreak, which had upended nearly every
              aspect of college for the better part of two years.
            </p>
            <p className="blog-text">
              Penn State, like most institutions, had pivoted to remote learning
              almost overnight. While it kept us safe, the shift was jarring.
              Classes felt distant. Friendships were harder to maintain. And
              that intangible feeling of being “part of something” — a community
              — was almost completely gone.
            </p>
            <p className="blog-text">
              Thankfully, I already had a few close friends from the two
              semesters before the lockdowns hit. As classes resumed in person,
              those connections grew stronger. A few of them would eventually
              become the co-founders of the startup we'd launch together:{" "}
              <strong>Nabely</strong>.
            </p>
            <figure className="blog-image">
              <img
                src={pennState}
                alt="The Sutherland Building of Penn State Abington"
              />
              <figcaption>
                The Sutherland Building of Penn State Abington, photo by{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/User:Shuvaev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shuvaev
                </a>.
              </figcaption>
            </figure>

            <h3 className="blog-heading">The idea behind Nabely</h3>
            <p className="blog-text">
              In early 2023, Penn State announced a startup competition for
              students. The prompt was simple: build something that solves a
              real problem. But what problem would we tackle?
            </p>
            <p className="blog-text">
              As we reflected on our post-pandemic reality, a central question
              kept coming up:
            </p>
            <h4 className="blog-heading-small">Where do we belong?</h4>
            <p className="blog-text">
              More and more, it seemed like young people were stuck between just
              two environments—home and school (or work). That third
              place—somewhere you go not out of obligation, but out of
              desire—was missing. Sociology actually has a name for this: the
              "third place.” And society, for a host of reasons (social media,
              urban sprawl, isolation), was forgetting how important it was.
            </p>
            <p className="blog-text">
              We wanted to help people find that place again. And so, Nabely was
              born.
            </p>
            <figure className="blog-image">
              <img src={nabely_mockup} alt="An early brand design for Nabely" />
              <figcaption>
                An early brand design for Nabely put together by{" "}
                <a
                  href="https://www.linkedin.com/in/dellobuonojs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jarett
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/parth-shahcs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parth.
                </a>
              </figcaption>
            </figure>

            <h3 className="blog-heading">What Nabely actually did</h3>
            <p className="blog-text">
              At its core, Nabely was a mobile app designed to help users
              discover local “third places.” Book clubs, open mic nights, game
              cafés, car shows—anything that brought people together in real,
              shared spaces.
            </p>
            <p className="blog-text">
              You'd log in, set your location, and tell the app what kind of
              vibe you were looking for. Nabely would then connect you with
              events or spots that matched your preferences—submitted by local
              businesses looking to boost community engagement.
            </p>
            <p className="blog-text">
              To sweeten the deal, we created a <strong>"Get Rewarded"</strong>{" "}
              program. Businesses could offer incentives like coupons or loyalty
              perks for people who attended Nabely-approved events. And users
              could earn badges on their profiles for participation—attending
              events, hosting meetups, or even just showing up consistently.
            </p>
            <p className="blog-text">
              It wasn't just about finding things to do. It was about reclaiming
              our sense of belonging—<em>offline</em>.
            </p>
            <figure className="blog-image">
              <img
                src={nabely_layout_old}
                alt="Old Nabely.com dashboard layout"
              />
              <figcaption>
                An old layout design for the Nabely dashboard.
              </figcaption>
            </figure>

            <h3 className="blog-heading">
              Building Nabely: front-end challenges and wins
            </h3>
            <p className="blog-text">
              For the Nabely project, I took on the role of front-end developer.
              I was lucky to work alongside some incredibly talented teammates
              who focused on the visual and UX design aspects—freeing me up to
              focus on structure, layout, and functionality.
            </p>
            <p className="blog-text">
              The very first version of Nabely was built using nothing but
              vanilla HTML, CSS, and JavaScript. It was a great learning
              experience, but it also came with its fair share of
              headaches—repetitive code, brittle layouts, and a lot of
              duplicated logic.
            </p>
            <p className="blog-text">
              As the project matured, so did I as a developer. I decided to
              rebuild major parts of the app using <strong>React</strong>. It
              made the structure more modular, reusable, and scalable. I also
              introduced <strong>Zustand</strong> as a lightweight state
              management tool to pass data—like upcoming events and
              location-based recommendations—between different parts of the app.
            </p>
            <p className="blog-text">
              One of the biggest UI challenges was figuring out how to fit a lot
              of meaningful content into a mobile-first design. The app had to
              surface location data, events, reward programs, user achievements,
              and more—without overwhelming the user. There was a lot of
              iteration, but in the end, I'm really proud of the way it all came
              together.
            </p>
            <figure className="blog-image">
              <img src={nabely_layout} alt="UI for the Nabely webapp" />
              <figcaption>
                Some of the updated layout design for the Nabely Dashboard.
              </figcaption>
            </figure>

            <h3 className="blog-heading">From startup dream to near miss</h3>
            <p className="blog-text">
              We entered the Nabely concept into the startup competition. And
              for a while, it felt like things were really moving.
            </p>
            <p className="blog-text">
              The judges liked our idea. The mission was clear. The potential
              impact, even clearer. We made it through the initial rounds, but
              ultimately placed just outside the top five—meaning we didn't
              secure the funding we were hoping for.
            </p>
            <p className="blog-text">
              It was tough, sure. But not a failure. We had designed a full
              concept, built real prototypes, worked with local businesses, and
              pitched something we genuinely believed in. We didn't walk away
              with prize money, but we gained something way more important:
              experience, clarity, and conviction.
            </p>
            <figure className="blog-image">
              <img
                src={competition_winners}
                alt="Winners from the 2025 Startup Competition"
              />
              <figcaption>
                Winners from the 2025 Startup Week Competition at Penn State.
                Picture from{" "}
                <a
                  href="https://www.psu.edu/news/invent-penn-state/story/five-student-startups-win-funding-invent-penn-state-incu-competition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  psu.edu
                </a>
                .
              </figcaption>
            </figure>

            <h3 className="blog-heading">Where Nabely stands today</h3>
            <p className="blog-text">
              After the competition, life moved quickly. We graduated. We got
              jobs in the industry. The kind of jobs we had been working toward
              all along.
            </p>
            <p className="blog-text">
              As for Nabely? It's still alive—just... dormant.
            </p>
            <p className="blog-text">
              We've all agreed: if the timing ever feels right again, we'd
              absolutely bring it back. There's still something powerful about
              the mission. The world hasn't solved the third place problem. And
              until it does, Nabely still has a reason to exist.
            </p>
            <p className="blog-text">
              The world needs Nabely, it just might not be ready for it yet.
            </p>
            <figure className="blog-image">
              <img src={nabely_developers} alt="The developers of Nabely" />
              <figcaption>
                The developers of Nabely. Top Row:{" "}
                <a
                  href="https://www.linkedin.com/in/dellobuonojs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jarett
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/colinjoygeorge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colin
                </a>
                , Middle Row:{" "}
                <a
                  href="https://www.linkedin.com/in/parth-shahcs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parth
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/gabriel-nulman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gabe
                </a>
                , and Myself at the bottom.
              </figcaption>
            </figure>

            <h3 className="blog-heading">Long story short</h3>
            <p className="blog-text">
              Nabely wasn't just a class project or a pitch deck—it was our
              answer to a deeply personal question:
            </p>
            <h4 className="blog-heading-small">
              What does community look like in a post-pandemic world?
            </h4>
            <p className="blog-text">
              It taught me how to collaborate, to build with purpose, and to
              think about how tech can genuinely help people live better, more
              connected lives.
            </p>
            <p className="blog-text">
              Even if it's not active today, Nabely remains one of the projects
              I'm most proud of. And who knows? The world could always use
              another third place.
            </p>
          </div>
        </PageSection>
      </div>
      {/* END_CONTENT */}
      <Footing />
    </div>
  );
}

export default Nabely;
