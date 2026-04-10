"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const mdComponents: Components = {
  p: ({ children }) => (
    <p className="mb-2 text-[13px] leading-relaxed text-gray-200 last:mb-0">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-2 list-disc space-y-1 pl-4 text-[13px] text-gray-200 last:mb-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-2 list-decimal space-y-1 pl-4 text-[13px] text-gray-200 last:mb-0">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="text-emerald-200/90">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="break-all text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  h1: ({ children }) => (
    <p className="mb-2 text-sm font-semibold text-white">{children}</p>
  ),
  h2: ({ children }) => (
    <p className="mb-1.5 mt-2 text-sm font-semibold text-white first:mt-0">{children}</p>
  ),
  h3: ({ children }) => (
    <p className="mb-1 mt-2 text-[13px] font-semibold text-emerald-200/90 first:mt-0">{children}</p>
  ),
  hr: () => <hr className="my-2 border-white/10" />,
  code: ({ children }) => (
    <code className="rounded bg-white/10 px-1 py-0.5 text-xs text-emerald-200">{children}</code>
  ),
};

export default function ChatMarkdown({ content }: { content: string }) {
  return (
    <div className="chat-markdown break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
