"use client";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PiCopy } from "react-icons/pi";
import { toast } from "react-toastify";

export const CodeHighlighter = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => {
  return (
    <div className="text-start outline outline-1 outline-stone-700">
      <div className="flex">
        <div className="w-full bg-stone-800 p-2 text-sm capitalize">
          {language}
        </div>
        <div
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            toast.success("Code copied!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              pauseOnFocusLoss: false,
              theme: "dark",
            });
          }}
          className="flex cursor-pointer items-center space-x-2 bg-stone-800 px-2 text-sm"
        >
          <div className="whitespace-nowrap capitalize">copy code</div>
          <PiCopy size={20} />
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        wrapLines
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
