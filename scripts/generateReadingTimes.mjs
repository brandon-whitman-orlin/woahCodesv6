import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// These lines are necessary for __dirname to work in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.resolve(__dirname, "../blogposts");

const getWordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const calculateReadingTime = (content) =>
  Math.ceil(getWordCount(content) / 200);

const extractTextContent = (jsxPath) => {
  const content = fs.readFileSync(jsxPath, "utf-8");

  // Extract between START_CONTENT and END_CONTENT
  const match = content.match(
    /\/\*\s*START_CONTENT\s*\*\/([\s\S]*?)\/\*\s*END_CONTENT\s*\*\//
  );
  if (!match) return null;

  const rawJSX = match[1];
  const plainText = rawJSX.replace(/<[^>]+>/g, " "); // Strip tags
  return plainText;
};

fs.readdirSync(postsDir).forEach((folder) => {
  const postPath = path.join(postsDir, folder);
  const jsxFile = path.join(
    postPath,
    `${folder.charAt(0).toUpperCase() + folder.slice(1)}.jsx`
  );
  const jsonFile = path.join(postPath, "index.json");

  if (fs.existsSync(jsxFile) && fs.existsSync(jsonFile)) {
    const content = extractTextContent(jsxFile);
    if (!content) return;

    const time = calculateReadingTime(content);

    const json = JSON.parse(fs.readFileSync(jsonFile));
    json.readingTime = time;
    fs.writeFileSync(jsonFile, JSON.stringify(json, null, 2));
    console.log(`✅ Updated reading time for ${folder} article to: ${time} minutes.`);
  }
});
