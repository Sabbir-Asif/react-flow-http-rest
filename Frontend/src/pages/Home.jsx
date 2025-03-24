import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import ColorMechanism from "../components/Timeline/ColorMechanism";
import FlowCanvas from "../components/Timeline/FlowCanvas";

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="max-w-6xl mx-auto relative">
                <Header />
                <div className="w-full flex justify-center relative">
                    <div className="w-[1152px] relative">
                        {/* Position ColorMechanism absolutely within the FlowCanvas container */}
                        <div className="absolute top-4 left-4 z-10">
                            <ColorMechanism />
                        </div>
                        <FlowCanvas />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;