import { useEffect, useState } from "react";

// Import from both folders
const jsonGlobBlog = import.meta.glob("../blogposts/*/index.json", { eager: true });
const imageGlobBlog = import.meta.glob("../blogposts/*/cover.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const jsonGlobPlayground = import.meta.glob("../playground/*/index.json", { eager: true });
const imageGlobPlayground = import.meta.glob("../playground/*/cover.png", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function useArticles(source = "blog") {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const jsonGlob = source === "playground" ? jsonGlobPlayground : jsonGlobBlog;
    const imageGlob = source === "playground" ? imageGlobPlayground : imageGlobBlog;
    const folderName = source === "playground" ? "playground" : "blogposts";

    const articlesList = Object.keys(jsonGlob)
      .map((jsonPath) => {
        const articleData = jsonGlob[jsonPath];
        const match = jsonPath.match(new RegExp(`\\/${folderName}\\/([^/]+)\\/index\\.json$`));
        const folder = match ? match[1] : null;
        if (!folder) return null;

        const imagePath = `../${folderName}/${folder}/cover.png`;
        const coverImage = imageGlob[imagePath];

        return {
          ...articleData,
          folder,
          coverImage,
        };
      })
      .filter(Boolean);

    const parseDate = (dateString) => {
      if (!dateString) return null;
      const [month, day, year] = dateString.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    articlesList.sort((a, b) => {
      // Featured articles first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // In progress articles last
      if (a.inProgress && !b.inProgress) return 1;
      if (!a.inProgress && b.inProgress) return -1;

      const dateA = parseDate(a.publishDate);
      const dateB = parseDate(b.publishDate);

      // Sort by date only if both dates are valid
      if (dateA && dateB) {
        return dateB - dateA;
      }

      // If only one has a valid date, prefer the one with the date
      if (dateA && !dateB) return -1;
      if (!dateA && dateB) return 1;

      // Otherwise keep original order
      return 0;
    });

    setArticles(articlesList);
  }, [source]);

  return articles;
}
