import React from "react";
import "./ArticleLink.css";

import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Wrench } from "../../assets/icons/wrench.svg";

function ArticleLink({ article, className = "", onTagClick }) {
  const {
    title,
    publishDate,
    readingTime,
    summary,
    coverImage,
    tags = [],
    folder,
    featured,
    inProgress,
  } = article;

  // Format publishDate nicely
  const formatDate = (dateStr) => {
    const [month, day, year] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <article className={`article-link ${className}`}>
      <a
        href={`/blog/${folder}`}
        className="article-link-anchor"
        aria-label={`Read article: ${title}`}
      >
        {/* Cover image if present */}
        {coverImage && (
          <img
            src={coverImage}
            alt={`Cover for ${title}`}
            className="article-link-cover"
            loading="lazy"
          />
        )}

        <h4 className="article-link-title">{title}</h4>

        {/* ✨ NEW: Labels for featured/in-progress */}
        {(featured || inProgress) && (
          <div className="article-link-flags">
            {featured && (
              <div className="flag-wrapper">
                <Star />
                <p className="article-flag featured-flag">Featured</p>
              </div>
            )}
            {inProgress && (
              <div className="flag-wrapper">
                <Wrench />
                <p className="article-flag inprogress-flag">In Progress</p>
              </div>
            )}
          </div>
        )}

        <div className="article-info">
          <div className="article-publish">
            <Calendar />
            <time className="article-link-date" dateTime={publishDate}>
              {formatDate(publishDate)}
            </time>
          </div>
          <div className="article-reading">
            <Clock />
            <p className="article-link-time">{readingTime} minutes</p>
          </div>
        </div>

        {/* Summary instead of excerpt */}
        {summary && <p className="article-link-summary">{summary}</p>}

        {/* Tags as a list */}
        {tags.length > 0 && (
          <ul className="article-link-tags">
            {tags.map((tag) => (
              <li key={tag} className="article-link-tag">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(); // prevent navigating if inside <a>
                    onTagClick?.(tag);
                  }}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        )}
      </a>
    </article>
  );
}

export default ArticleLink;
