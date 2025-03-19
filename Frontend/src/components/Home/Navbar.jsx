const Navbar = () => {
    return (
        <div className="bg-gray-100 p-2 flex items-center">
            <span >
                <img src="/logo/Cefalo logo.png" alt="cefalo logo"  
                className="w-36 m-2"/>
            </span>
            <div className="flex-grow text-center">
                <h2 className="font-semibold text-3xl font-ruhi italic text-gray-700">Evolution of Web Applications</h2>
            </div>
        </div>
    );
};

export default Navbar;