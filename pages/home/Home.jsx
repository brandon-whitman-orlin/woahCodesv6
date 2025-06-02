import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import PageSection from "../../components/pagesection/PageSection";
import ItemGrid from "../../components/itemgrid/ItemGrid";
import Contact from "../../components/contact/Contact";
import Footing from "../../components/footing/Footing";

import Background from "../../components/background/Background";

import AvatarWave from "../../assets/images/avatar_wave.webp";
import AvatarHeart from "../../assets/images/avatar_heart.webp";
import AvatarHey from "../../assets/images/avatar_hey.webp";
import AvatarWhisper from "../../assets/images/avatar_whisper.webp";
import AvatarHand from "../../assets/images/avatar_hand.webp";

import HeroVideo from "../../assets/videos/hero.mp4";
import Nabely from "../../assets/videos/nabely.mp4";
import Quad from "../../assets/videos/quad.mp4";
import Niceopods from "../../assets/videos/niceopods.mp4";

function Home() {
  const [hasHash, setHasHash] = useState(Boolean(location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setHasHash(Boolean(location.hash));
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Handle first load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Use smooth scroll if desired
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="home" className={`page ${!hasHash ? "lock-screen" : ""}`}>
      <Background />
      <Navbar name="woahCodes" className={!hasHash ? "delay3" : ""}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="/blog">Blog</a>
        <a href="/playground">Playground</a>
        <a
          href="https://drive.google.com/file/d/1TQbA8_gKywt2oy38jprAi8jHpJ2YniDi/view"
          target="_blank"
        >
          Resume
        </a>
        <a href="#contact">Contact</a>
      </Navbar>
      <Hero image={HeroVideo} alt={"Alt"}>
        <p className={!hasHash ? "delay1" : ""}>code that makes you say</p>
        <h1 className={!hasHash ? "delay2" : ""}>woah</h1>
      </Hero>
      <PageSection>
        <h2 className="section-title" id="about">
          About
        </h2>
        <div className="section-content">
          <div className="avatar">
            <div className="avatar-background"></div>
            <img src={AvatarWave} alt="Waving" />
          </div>
          <div className="section-text">
            <h3 className="section-heading">Hey, my name is Brandon</h3>
            <p className="section-blurb">
              I'm a Full-Stack Developer with a passion for crafting captivating
              user experiences and solving complex problems through code.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection className="invert">
        <h2 className="section-title" id="experience">
          Experience
        </h2>
        <div className="section-content">
          <div className="avatar">
            <div className="avatar-background purple"></div>
            <img src={AvatarHeart} alt="Heart" />
          </div>
          <div className="section-text">
            <h3 className="section-heading">Some stuff I've done</h3>
            <p className="section-blurb">
              I've built full-stack applications and mobile experiences for
              clients and companies across multiple different industries, using
              technologies like Flutter, React, and AWS. From designing
              user-friendly interfaces to integrating cloud services and APIs, I
              focus on delivering scalable, high-performance solutions that make
              an impact.
            </p>
          </div>
        </div>
        <h3 className="section-heading">Some projects I've worked on</h3>
        <ItemGrid
          projects={[
            {
              video: Nabely,
              title: "Nabely",
              description:
                "Nabely connects users with local businesses through personalized recommendations and rewards. It also helps small businesses grow by offering digital tools for exposure, loyalty programs, and real-time analytics.",
              learn: "/blog/nabely",
              link: "https://nabely.com",
            },
            {
              video: Quad,
              title: "Quad Consultation",
              description:
                "Quad Consultation offers custom web consulting with tailored solutions, expert guidance, and flexible pricing to turn your project into reality without compromising quality.",
              learn: "/blog/quad",
              link: "https://quadconsultation.com",
            },
            {
              video: Niceopods,
              title: "Niceopods",
              description:
                "Niceopods is the ultimate resource for isopod enthusiasts, offering expert care guides, species profiles, and industry news to help both beginners and experienced keepers thrive in the hobby.",
              learn: "/blog/niceopods",
              link: "https://www.niceopods.com",
            },
            // {
            //   image: "https://via.placeholder.com/150",
            //   title: "infoBot",
            //   description: "This is a description of Project Four.",
            //   link: "https://discord.com/oauth2/authorize?client_id=1291699627263000597",
            // },
          ]}
        />
      </PageSection>
      <PageSection className="invert">
        <h2 className="section-title" id="blog">
          Blog
        </h2>
        <div className="section-content">
          <div className="avatar">
            <div className="avatar-background red"></div>
            <img src={AvatarHey} alt="Hey" />
          </div>
          <div className="section-text">
            <h3 className="section-heading">Here's what I've got to say</h3>
            <p className="section-blurb">
              From devlogs to tips and tricks, I love sharing my journey as I
              tackle new challenges and build exciting projects. Follow along to
              stay updated on what I'm learning and working on next!
            </p>
          </div>
        </div>
        <a href="/blog" rel="noopener noreferrer" className="cta-button">
          Visit the Blog
        </a>
      </PageSection>
      <PageSection>
        <h2 className="section-title" id="playground">
          Playground
        </h2>
        <div className="section-content">
          <div className="avatar">
            <div className="avatar-background green"></div>
            <img src={AvatarWhisper} alt="Whisper" />
          </div>
          <div className="section-text">
            <h3 className="section-heading">Some fun stuff I've built</h3>
            <p className="section-blurb">
              Explore a collection of small, interactive projects I've built
              along the way. From fun experiments to creative code challenges,
              this is where I get to play, learn, and push the boundaries of web
              development.
            </p>
          </div>
        </div>
        <a href="/playground" rel="noopener noreferrer" className="cta-button">
          Visit the Playground
        </a>
      </PageSection>
      <PageSection className="invert">
        <h2 className="section-title" id="contact">
          Contact
        </h2>
        <div className="section-content">
          <div className="avatar">
            <div className="avatar-background blue"></div>
            <img src={AvatarHand} alt="Hand" />
          </div>
          <div className="section-text">
            <h3 className="section-heading">Let's chat</h3>
            <p className="section-blurb">
              Got a project in mind or want to collaborate? I'd love to hear
              from you! Fill out the form below, and let's connect about
              potential opportunities or anything else you'd like to chat about.
            </p>
          </div>
        </div>
        <Contact />
      </PageSection>
      <Footing />
    </div>
  );
}

export default Home;
