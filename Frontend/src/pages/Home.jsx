import Navbar from "../components/Home/Navbar";
import FlowCanvas from "../components/Timeline/FlowCanvas";

const Home = () => {

    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto max-w-7xl">
                <FlowCanvas />
            </div>
        </div>
    );
};

export default Home;