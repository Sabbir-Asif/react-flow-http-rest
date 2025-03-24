import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import ColorMechanism from "../components/Timeline/ColorMechanism";
import FlowCanvas from "../components/Timeline/FlowCanvas";

const Home = () => {

    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto max-w-8xl">
                <div className="flex">
                    <ColorMechanism />
                    <div className="flex-grow">
                        <Header />
                        <FlowCanvas />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;