import React, { useState } from "react";
import "./Blog.css";

import Navbar from "../../components/navbar/Navbar";
import NavbarSpacer from "../../components/navbar/NavbarSpacer";
import PageSection from "../../components/pagesection/PageSection";
import ArticleList from "../../components/articlelist/ArticleList";
import Footing from "../../components/footing/Footing";
import Background from "../../components/background/Background";
import AvatarPray from "../../assets/images/avatar_pray.webp";

function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTagClick = (tag) => {
    const tags = searchQuery
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    if (!tags.includes(tag.toLowerCase())) {
      setSearchQuery([...tags, tag].join(", "));
    }
  };

  return (
    <div id="blog" className="page">
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

      <PageSection>
        <h2 className="section-title">Blog</h2>
        <div className="section-content">
          <div className="avatar">
            <div className="avatar-background green"></div>
            <img src={AvatarPray} alt="Praying" />
          </div>
          <div className="section-text">
            <h3 className="section-heading">
              Building, learning, and sharing it all
            </h3>
            <p className="section-blurb">
              Welcome to my blog—a behind-the-scenes look at my journey as a web
              developer. Here, I share devlogs, helpful tips, and insights from
              the projects I'm building and the challenges I'm tackling.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <h3 className="section-heading">Recent posts</h3>
        <ArticleList source="blog" featuredOnly onTagClick={handleTagClick} />

        <h3 className="section-heading">All posts</h3>
        <form className="blog-search-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="blog-search" className="visually-hidden">
            Search blog posts
          </label>
          <input
            type="text"
            id="blog-search"
            name="q"
            className="blog-search-input"
            placeholder="Search blog posts (comma-separated)"
            autoComplete="off"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <ArticleList
          source="blog"
          listMode
          searchQuery={searchQuery}
          onTagClick={handleTagClick}
        />
      </PageSection>

      <Footing />
    </div>
  );
}

export default Blog;
