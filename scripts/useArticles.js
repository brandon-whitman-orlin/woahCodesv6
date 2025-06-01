import { useEffect, useState } from "react";

const jsonGlob = import.meta.glob("../blogposts/*/index.json", { eager: true });
const imageGlob = import.meta.glob("../blogposts/*/cover.png", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function useArticles(source = "blog") {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesList = Object.keys(jsonGlob)
      .map((jsonPath) => {
        const articleData = jsonGlob[jsonPath];

        const match = jsonPath.match(/\/blogposts\/([^/]+)\/index\.json$/);
        const folder = match ? match[1] : null;

        if (!folder) return null;

        const imagePath = `../blogposts/${folder}/cover.png`;
        const coverImage = imageGlob[imagePath];

        return {
          ...articleData,
          folder,
          coverImage, // This is a resolved URL string
        };
      })
      .filter(Boolean);

    const parseDate = (dateString) => {
      const [month, day, year] = dateString.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    articlesList.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.inProgress && !b.inProgress) return 1;
      if (!a.inProgress && b.inProgress) return -1;
      return parseDate(b.publishDate) - parseDate(a.publishDate);
    });

    setArticles(articlesList);
  }, [source]);

  return articles;
}
