import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-holi-theme.css";
import "prismjs/components/prism-jsx.min";
import "./CodeBlock.css";

import { ReactComponent as Copy } from "../../assets/icons/copy.svg";
import { ReactComponent as CopySuccess } from "../../assets/icons/copysuccess.svg";


const CodeBlock = ({ children, lang = "javascript", inline = false }) => {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [children]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (inline) {
    return (
      <code ref={ref} className={`language-${lang} inline-code`}>
        {children}
      </code>
    );
  }

  return (
    <div className="code-block-wrapper" style={{ position: "relative" }}>
      <button className="copy-button" onClick={handleCopy}>
        {copied ? <CopySuccess /> : <Copy />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="code-block">
        <code ref={ref} className={`language-${lang}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
