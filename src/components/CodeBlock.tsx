import { useEffect, useRef, useState } from "preact/hooks";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

interface Props {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: Props) {
  const ref = useRef<HTMLPreElement>(null);
  const [btnText, setBtnText] = useState("Copy");

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current.querySelector("code")!);
    }
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setBtnText("Copied!");
      setTimeout(() => setBtnText("Copy"), 2000);
    } catch {
      setBtnText("Error");
      setTimeout(() => setBtnText("Copy"), 2000);
    }
  };

  return (
    <div style={{ position: "relative", margin: "1em 0" }}>
      {/* copy button */}
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "0.5em",
          right: "0.5em",
          padding: "0.25em 0.5em",
          fontSize: "0.8em",
          cursor: "pointer",
          borderRadius: "4px",
          border: "none",
          background: "#eee",
          color: "black",
        }}
      >
        {btnText}
      </button>

      {/* the code block itself */}
      <pre
        ref={ref}
        style={{ overflowX: "auto", padding: "1em", borderRadius: "4px" }}
      >
        <code class={`language-${language}`}>{code.trim()}</code>
      </pre>
    </div>
  );
}
