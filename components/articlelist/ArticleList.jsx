import React, { useState, useEffect } from "react";
import useArticles from "../../scripts/useArticles";
import ArticleLink from "../../components/articlelink/ArticleLink";
import "./ArticleList.css";

function ArticleList({
  source,
  featuredOnly = false,
  listMode = false,
  searchQuery = "",
  onTagClick,
  className = "", // ← Accept className prop
}) {
  const articles = useArticles(source);
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredArticles = articles
    .filter((article) => !article.inProgress) // ← Exclude in-progress articles
    .filter((article) => !featuredOnly || article.featured)
    .filter((article) => {
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;

      const inTitle = article.title?.toLowerCase().includes(q);
      const inSummary = article.summary?.toLowerCase().includes(q);
      const inTags = article.tags?.some((tag) => tag.toLowerCase() === q);

      return inTitle || inSummary || inTags;
    });

  useEffect(() => {
    setVisibleCount(5);
  }, [searchQuery]);

  if (listMode) {
    const toShow = filteredArticles.slice(0, visibleCount);
    const hasMore = visibleCount < filteredArticles.length;

    return (
      <>
        <ul className={`article-list-listmode ${className}`.trim()}>
          {toShow.map((article) => {
            const classes = ["compressed"];
            if (article.featured) classes.push("featured");
            if (article.inProgress) classes.push("in-progress");

            return (
              <li key={article.folder}>
                <ArticleLink
                  article={article}
                  className={classes.join(" ")}
                  onTagClick={onTagClick}
                />
              </li>
            );
          })}
        </ul>
        {hasMore && (
          <div className="article-list-showmore">
            <button
              className="cta-button"
              onClick={() => setVisibleCount((prev) => prev + 5)}
            >
              Show more
            </button>
          </div>
        )}
      </>
    );
  }

  // Default (grid) mode
  return (
    <div className={`article-list ${className}`.trim()}>
      {filteredArticles.map((article) => {
        const classes = [];
        if (article.featured) classes.push("featured");
        if (article.inProgress) classes.push("in-progress");

        return (
          <ArticleLink
            key={article.folder}
            article={article}
            className={classes.join(" ")}
            onTagClick={onTagClick}
          />
        );
      })}
    </div>
  );
}

export default ArticleList;
