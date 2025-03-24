import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import ColorMechanism from "../components/Timeline/ColorMechanism";
import FlowCanvas from "../components/Timeline/FlowCanvas";


const Home = () => {

    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto max-w-7xl">
                <div className="flex">
                    <ColorMechanism />
                    <div className="w-5xl">
                        <Header />
                        <FlowCanvas />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;