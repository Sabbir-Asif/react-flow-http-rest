import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';

const remarkExtractStyles = () => {
  return (tree, file) => {
    const styles = [];

    visit(tree, 'html', (node) => {
      if (node.value.startsWith('<style') && node.value.endsWith('</style>')) {
        styles.push(node.value);
        node.value = '';
      }
    });

    file.data.styles = styles.join('\n');
  };
};

const PopUp = ({ isOpen, onClose, filePath, breadcrumb }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [extractedStyles, setExtractedStyles] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && filePath) {
      setLoading(true);
      fetch(filePath)
        .then(res => res.text())
        .then(data => {
          setMarkdownContent(data);

          // Extract styles using regex as a fallback
          const styleMatches = data.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
          if (styleMatches.length > 0) {
            setExtractedStyles(styleMatches.join('\n'));
          }

          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching markdown content:', err);
          setMarkdownContent("Failed to load content");
          setLoading(false);
        });
    }
  }, [isOpen, filePath]);

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-5xl max-h-[90vh] bg-[#FDFAF6]">
        <div className="breadcrumbs text-md font-medium font-nunito ml-8 md:ml-12">
          <ul>
            {
              breadcrumb?.map(bc => <li>{bc}</li>)
            }
          </ul>
        </div>
        <button
          className="btn btn-sm btn-circle absolute left-4 top-6"
          onClick={onClose}
        >
          ✕
        </button>
        <hr className="h-1" />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[80vh] p-10 lg:p-12">
            {extractedStyles && (
              <div dangerouslySetInnerHTML={{ __html: extractedStyles }} />
            )}

            <style>{`
              .markdown-container {
                color: #24292e;
                line-height: 1.6;
              }
              .markdown-container ul {
                list-style-type: disc;
                padding-left: 2em;
                margin-bottom: 1em;
                color: #24292e;
              }
              .markdown-container ol {
                list-style-type: decimal;
                padding-left: 2em;
                margin-bottom: 1em;
                color: #24292e;
              }
              .markdown-container li {
                margin-bottom: 0.5em;
                color: #24292e;
              }
              .markdown-container li > p {
                margin-bottom: 0;
              }
              .markdown-container pre {
                background-color: #f6f8fa;
                border-radius: 6px;
                padding: 16px;
                overflow: auto;
                margin-bottom: 1em;
              }
              .markdown-container code:not(.hljs) {
                background-color: rgba(175,184,193,0.2);
                border-radius: 6px;
                padding: 0.2em 0.4em;
                font-size: 85%;
                color: #e83e8c;
              }
              .markdown-container h1 {
                font-size: 2em;
                font-weight: bold;
                margin: 0.67em 0;
                border-bottom: 1px solid #eaecef;
                padding-bottom: 0.3em;
                color: #24292e;
              }
              .markdown-container h2 {
                font-size: 1.5em;
                font-weight: bold;
                margin: 0.83em 0;
                border-bottom: 1px solid #eaecef;
                padding-bottom: 0.3em;
                color: #24292e;
              }
              .markdown-container h3 {
                font-size: 1.25em;
                font-weight: bold;
                margin: 1em 0;
                color: #24292e;
              }
              .markdown-container blockquote {
                border-left: 4px solid #dfe2e5;
                color: #6a737d;
                padding: 0 1em;
                margin: 0 0 16px 0;
              }
              .markdown-container a {
                color: #0366d6;
                text-decoration: none;
              }
              .markdown-container a:hover {
                text-decoration: underline;
              }
              .markdown-container table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 16px;
              }
              .markdown-container th, .markdown-container td {
                padding: 6px 13px;
                border: 1px solid #dfe2e5;
              }
              .markdown-container th {
                background-color: #f6f8fa;
                font-weight: 600;
              }
              .hljs {
                background: #f6f8fa;
                color: #24292e;
              }
            `}</style>

            <div className="markdown-container">
              <ReactMarkdown
                children={markdownContent}
                remarkPlugins={[
                  [remarkGfm, { singleTilde: true }],
                  remarkFrontmatter,
                  remarkDirective,
                  remarkExtractStyles,
                ]}
                rehypePlugins={[
                  rehypeRaw,
                  rehypeSlug,
                  [rehypeHighlight, {
                    ignoreMissing: true,
                    aliases: {
                      javascript: ['js', 'jsx'],
                      typescript: ['ts', 'tsx'],
                      shell: ['bash', 'sh', 'zsh'],
                    }
                  }]
                ]}
                components={{
                  ul: ({ depth, className, ...props }) => (
                    <ul
                      className={`${className || ''} list-disc pl-${depth ? depth * 4 : 8} my-2`}
                      {...props}
                    />
                  ),
                  ol: ({ depth, className, ...props }) => (
                    <ol
                      className={`${className || ''} list-decimal pl-${depth ? depth * 4 : 8} my-2`}
                      {...props}
                    />
                  ),
                  li: ({ className, ordered, ...props }) => (
                    <li
                      className={`${className || ''} mb-1`}
                      {...props}
                    />
                  ),
                  pre: ({ node, ...props }) => (
                    <pre className="hljs rounded-lg p-4 overflow-x-auto" {...props} />
                  ),
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline ? (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    ) : (
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-pink-600" {...props}>
                        {children}
                      </code>
                    );
                  },
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold mt-6 mb-3 pb-2 border-b border-gray-200" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-600" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-blue-600 hover:underline" {...props} />
                  ),
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse" {...props} />
                    </div>
                  ),
                  th: ({ node, ...props }) => (
                    <th className="px-4 py-2 bg-gray-100 border border-gray-300 font-semibold" {...props} />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="px-4 py-2 border border-gray-300" {...props} />
                  ),
                }}
              />
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default PopUp;