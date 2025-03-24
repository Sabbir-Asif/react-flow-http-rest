import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import ColorMechanism from "../components/Timeline/ColorMechanism";
import FlowCanvas from "../components/Timeline/FlowCanvas";

const Home = () => {

    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto">
                <Header />
                <div className="flex">
                    <ColorMechanism />
                    <FlowCanvas />
                </div>
            </div>
        </div>
    );
};

export default Home;