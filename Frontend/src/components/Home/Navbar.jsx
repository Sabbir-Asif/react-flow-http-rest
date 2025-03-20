const Navbar = () => {
  return (
    <nav className="bg-blue-primary shadow-md p-3 flex items-center justify-between mb-2">
      <div className="flex items-center bg-gray-100 p-2 rounded-md">
        <img 
          src="/logo/Cefalo logo.png" 
          alt="Cefalo logo" 
          className="w-36 mr-6"
        />
      </div>
      
      <div className="flex-grow text-center">
        <h2 className="font-semibold text-3xl font-ruhi text-transparent bg-clip-text bg-gradient-to-r from-white to-white transform">
          Evolution of Web Applications
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;