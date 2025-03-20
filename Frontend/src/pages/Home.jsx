import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import FlowCanvas from "../components/Timeline/FlowCanvas";

const Home = () => {

    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto max-w-6xl">
                <Header />
                <FlowCanvas />
            </div>
        </div>
    );
};

export default Home;