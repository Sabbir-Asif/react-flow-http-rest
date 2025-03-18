import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';

// Custom plugin to extract and handle styles in markdown
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

const Drawer = ({ isOpen, onClose, filePath }) => {
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
    <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className={`absolute inset-y-0 right-0 max-w-full flex transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-screen max-w-7xl md:max-w-5xl">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <span className="loading loading-infinity loading-2xl"></span>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;