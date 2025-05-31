import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";

import Hero from "../../components/hero/Hero";
import HeroVideo from "../../assets/videos/hero.mp4";

import PageSection from "../../components/pagesection/PageSection";

import AvatarWave from "../../assets/images/avatar_wave.webp";

function Home() {
  return (
    <div className="page lock-screen">
      <Navbar name="woahCodes" className="delay3">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="/blog">Blog</a>
        <a href="https://drive.google.com/file/d/1TQbA8_gKywt2oy38jprAi8jHpJ2YniDi/view" target="_blank">Resume</a>
        <a href="#contact">Contact</a>
      </Navbar>
      <Hero image={HeroVideo} alt={"Alt"}>
        <p className="delay1">code that makes you say</p>
        <h1 className="delay2">woah</h1>
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
    </div>
  );
}

export default Home;
