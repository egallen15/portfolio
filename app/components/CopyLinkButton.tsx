"use client";

import React from "react";
import { LinkIcon, CheckIcon } from "@heroicons/react/20/solid";

const CopyLinkButton: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <button
      onClick={handleCopyLink}
      className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
      title="Copy link to clipboard"
    >
      {copied ? (
        <>
          <CheckIcon className="h-5 w-5" />
          <span className="text-xs">Copied!</span>
        </>
      ) : (
        <LinkIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default CopyLinkButton;
