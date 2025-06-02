import React from "react";
import "./ArticleLink.css";

import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Wrench } from "../../assets/icons/wrench.svg";

function ArticleLink({ article = {}, className = "", onTagClick }) {
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

  // If no folder or title, skip rendering the link entirely
  if (!folder || !title) return null;

  return (
    <article className={`article-link ${className}`}>
      <a
        href={article.link || `/blog/${folder}`}
        className="article-link-anchor"
        aria-label={`Read article: ${title}`}
        target={article.link ? "_blank" : undefined}
        rel={article.link ? "noopener noreferrer" : undefined}
      >
        {coverImage && (
          <img
            src={coverImage}
            alt={`Cover for ${title}`}
            className="article-link-cover"
            loading="lazy"
          />
        )}

        {title && <h4 className="article-link-title">{title}</h4>}

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

        {(publishDate || readingTime) && (
          <div className="article-info">
            {publishDate && (
              <div className="article-publish">
                <Calendar />
                <time className="article-link-date" dateTime={publishDate}>
                  {formatDate(publishDate)}
                </time>
              </div>
            )}
            {readingTime && (
              <div className="article-reading">
                <Clock />
                <p className="article-link-time">{readingTime} minutes</p>
              </div>
            )}
          </div>
        )}

        {summary && <p className="article-link-summary">{summary}</p>}

        {Array.isArray(tags) && tags.length > 0 && (
          <ul className="article-link-tags">
            {tags.map((tag) =>
              tag ? (
                <li key={tag} className="article-link-tag">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      onTagClick?.(tag);
                    }}
                  >
                    {tag}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        )}
      </a>
    </article>
  );
}

export default ArticleLink;
