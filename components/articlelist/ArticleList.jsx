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
  className = "",
}) {
  const articles = useArticles(source);
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredArticles = articles
    .filter((article) => !article.inProgress)
    .filter((article) => !featuredOnly || article.featured)
    .filter((article) => {
      const queryTags = searchQuery
        .split(",")
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean);

      if (queryTags.length === 0) return true;

      const inTitle = article.title?.toLowerCase().includes(searchQuery.toLowerCase());
      const inSummary = article.summary?.toLowerCase().includes(searchQuery.toLowerCase());

      const articleTags = article.tags?.map((tag) => tag.toLowerCase()) || [];

      const inTags = queryTags.some((qt) => articleTags.includes(qt));

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
