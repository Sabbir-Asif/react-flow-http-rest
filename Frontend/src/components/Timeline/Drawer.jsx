import { marked } from "marked";
import { useState, useEffect } from "react";

const Drawer = ({ isOpen, onClose, filePath }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && filePath) {
      setLoading(true);
      fetch(filePath)
        .then(res => res.text())
        .then(data => {
          setContent(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching markdown content:', err);
          setContent("Failed to load content");
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
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Content Details</h2>
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
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-primary"></div>
                </div>
              ) : (
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;