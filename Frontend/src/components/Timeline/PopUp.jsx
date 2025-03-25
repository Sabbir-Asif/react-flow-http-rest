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

const PopUp = ({ isOpen, onClose, filePath }) => {
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
      <div className="modal-box w-11/12 max-w-5xl max-h-[90vh]">
        <button 
          className="btn btn-sm btn-circle absolute right-2 top-2" 
          onClick={onClose}
        >
          ✕
        </button>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[80vh]">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css" />
            
            {/* Inject extracted custom styles */}
            {extractedStyles && (
              <div dangerouslySetInnerHTML={{ __html: extractedStyles }} />
            )}
            
            {/* Render the markdown with all our plugins */}
            <div className="markdown-body">
              <ReactMarkdown
                children={markdownContent}
                remarkPlugins={[
                  remarkGfm,
                  remarkFrontmatter,
                  remarkDirective,
                  remarkExtractStyles,
                ]}
                rehypePlugins={[
                  rehypeRaw,
                  rehypeSlug,
                  [rehypeHighlight, { ignoreMissing: true }]
                ]}
                components={{
                  // Custom components to handle special formatting
                  pre: ({ node, ...props }) => (
                    <pre className="hljs" {...props} />
                  ),
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '');
                    const lang = match ? match[1] : '';
                    return !inline ? (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    ) : (
                      <code className={className} {...props}>{children}</code>
                    );
                  }
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