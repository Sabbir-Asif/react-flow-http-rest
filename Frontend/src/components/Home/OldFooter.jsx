import React from 'react';

// Theme options as a prop with default blue theme
const Footer = ({ theme = 'blue' }) => {
  // Theme color configurations
  const themes = {
    blue: {
      gradient: "bg-gradient-to-r from-blue-950 to-blue-600",
      accent: "border-blue-400",
      border: "border-blue-700",
      social: "bg-blue-800 hover:text-blue-800"
    },
    purple: {
      gradient: "bg-gradient-to-r from-purple-950 to-purple-600",
      accent: "border-purple-400",
      border: "border-purple-700",
      social: "bg-purple-800 hover:text-purple-800"
    },
    green: {
      gradient: "bg-gradient-to-r from-green-950 to-green-600",
      accent: "border-green-400",
      border: "border-green-700", 
      social: "bg-green-800 hover:text-green-800"
    },
    teal: {
      gradient: "bg-gradient-to-r from-teal-950 to-teal-500",
      accent: "border-teal-400",
      border: "border-teal-700",
      social: "bg-teal-800 hover:text-teal-800"
    },
    indigo: {
      gradient: "bg-gradient-to-r from-indigo-950 to-indigo-500",
      accent: "border-indigo-400",
      border: "border-indigo-700",
      social: "bg-indigo-800 hover:text-indigo-800"
    }
  };

  // Get the selected theme, default to blue if not found
  const currentTheme = themes[theme] || themes.blue;

  return (
    <footer className={`w-full ${currentTheme.gradient} text-white shadow-lg`}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Company Information - Left Side */}
        <div>
          <div className="mb-5">
            <img 
              src="./logo/Cefalo logo.png" 
              alt="CEFALO" 
              className="brightness-0 invert h-8" 
            />
          </div>
         
          <div className="flex space-x-5">
            {/* Social Media Icons with theme-specific hover effects */}
            <a 
              href="#" 
              aria-label="Twitter" 
              className={`text-white p-2 ${currentTheme.social} rounded-full hover:bg-white transition-all duration-300`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className={`text-white p-2 ${currentTheme.social} rounded-full hover:bg-white transition-all duration-300`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="GitHub" 
              className={`text-white p-2 ${currentTheme.social} rounded-full hover:bg-white transition-all duration-300`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
       
        {/* Quick Links - Right Side */}
        <div className="flex flex-col space-y-2 md:ml-auto">
          <h3 className={`text-base font-semibold mb-6 pb-2 border-b-2 ${currentTheme.accent} inline-block`}>
            Quick Links
          </h3>
          <ul className="flex space-x-6 flex-wrap">
            <li>
              <a 
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" 
                className="text-gray-200 hover:text-white text-sm transition-colors flex items-center group"
              >
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">HTTP </span>
              </a>
            </li>
            <li>
              <a 
                href="https://developer.ibm.com/articles/ws-restful/" 
                className="text-gray-200 hover:text-white text-sm transition-colors flex items-center group"
              >
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">REST APIs</span>
              </a>
            </li>
            <li>
              <a 
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" 
                className="text-gray-200 hover:text-white text-sm transition-colors flex items-center group"
              >
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">CORS</span>
              </a>
            </li>
            <li>
              <a 
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" 
                className="text-gray-200 hover:text-white text-sm transition-colors flex items-center group"
              >
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">Caching</span>
              </a>
            </li>
            <li>
              <a 
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" 
                className="text-gray-200 hover:text-white text-sm transition-colors flex items-center group"
              >
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">Cookies</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
      {/* Bottom Footer - Copyright and Links */}
      <div className={`border-t ${currentTheme.border}`}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-xs font-light">
            © 2025 CEFALO. All Rights Reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors hover:underline">Terms & Conditions</a>
            <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;