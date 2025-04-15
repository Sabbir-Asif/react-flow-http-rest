const Navbar = () => {
  const location = window.location.pathname;
  const isHomePage = location === '/';
  return (
    <nav className="bg-blue-primary shadow-md p-3 flex items-center justify-between">
      <div className="flex-grow text-center">
        <h2 className="font-bold text-2xl font-nunito text-transparent bg-clip-text bg-gradient-to-r from-white to-white transform">
          From Invention to Evolution: A Complete Roadmap of HTTP Basics
        </h2>
        <button 
        onClick={() => isHomePage ? window.location.href = '/preview' : window.location.href = '/'}
        className="absolute right-4 top-2 bg-blue-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          {
            isHomePage ? 'Preview' : 'Back to Home'
          }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;