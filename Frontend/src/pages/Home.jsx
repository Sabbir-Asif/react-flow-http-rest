import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import ColorMechanism from "../components/Timeline/ColorMechanism";
import FlowCanvas from "../components/Timeline/FlowCanvas";
import Background from "../components/Home/Background";

const Home = () => {
    return (
        <div className="bg-[#FDFAF6]">
            <Navbar />
            <Header />
            <div className="max-w-6xl mx-auto relative">
                <div className="w-full flex justify-center relative">
                    <div className="w-[1152px] relative">
                        <div className="absolute top-12 left-20 z-10">
                            <ColorMechanism />
                        </div>
                        <FlowCanvas />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;