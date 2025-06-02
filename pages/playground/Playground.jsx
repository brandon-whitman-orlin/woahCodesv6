import React, { useState } from "react";
import "./Playground.css";

import Navbar from "../../components/navbar/Navbar";
import NavbarSpacer from "../../components/navbar/NavbarSpacer";
import PageSection from "../../components/pagesection/PageSection";
import ArticleList from "../../components/articlelist/ArticleList";
import Footing from "../../components/footing/Footing";
import Background from "../../components/background/Background";
import AvatarComputer from "../../assets/images/avatar_computer.webp";

function Playground() {
  return (
    <div id="playground" className="page">
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
      <PageSection className="invert">
        <h2 className="section-title">Playground</h2>
        <div className="section-content">
          <div className="avatar">
            <div className="avatar-background blue"></div>
            <img src={AvatarComputer} alt="Computer" />
          </div>
          <div className="section-text">
            <h3 className="section-heading">
              Coding for curiosity's sake
            </h3>
            <p className="section-blurb">
              This is my playground—a space for creative experiments, bite-sized
              projects, and interactive ideas that don't quite fit anywhere
              else. It's where I test concepts, break things on purpose, and
              invite you to click around and explore.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <h3 className="section-heading">Prototypes and one-offs</h3>
        <ArticleList className="playground" source="playground" />
      </PageSection>
      <Footing />
    </div>
  );
}

export default Playground;
