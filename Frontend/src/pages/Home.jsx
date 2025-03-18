// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Home/Navbar";
// import TimelineMain from "../components/Timeline/TimelineMain";


// const Home = () => {
//     return (
//         <div className="">
//             <Navbar />
//             <div className="container mx-auto max-w-7xl mt-10">
//                 <div className="">
//                     <TimelineMain />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import { useState } from "react";
import Navbar from "../components/Home/Navbar";
import TimelineMain from "../components/Timeline/TimelineMain";
import Drawer from "../components/Timeline/Drawer";

const Home = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedFilePath, setSelectedFilePath] = useState(null);

    const handleOpenDrawer = (filePath) => {
        setSelectedFilePath(filePath);
        setDrawerOpen(true);
        console.log('clicked');
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto max-w-7xl mt-10">
                <div className="">
                    <TimelineMain handleOpenDrawer={handleOpenDrawer} />
                </div>
            </div>
            <Drawer 
                isOpen={drawerOpen} 
                onClose={handleCloseDrawer} 
                filePath={selectedFilePath} 
            />
        </div>
    );
};

export default Home;