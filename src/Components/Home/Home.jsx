import { useLoaderData } from "react-router-dom";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Newscard from "./Newscard/Newscard";
import { useState } from "react";



const Home = () => {
    const news = useLoaderData();
    const [displayNewsLength, setDisplayNewsLength] = useState(2);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                <div><LeftSideNav></LeftSideNav></div>

                <div className="md:col-span-2">
                    <h2 className="text-xl font-bold">Dragon News Home</h2>
                    {
                        news.slice(0, displayNewsLength).map(aNews => <Newscard
                            key={aNews._id}
                            news={aNews}
                        >
                        </Newscard>)
                    }
                    {
                        displayNewsLength >= news.length ?
                            <div className="text-center my-3">
                                <button onClick={() => setDisplayNewsLength(2)} className="btn bg-green-600 text-white font-bold">Collapse</button>
                            </div> :
                            <div className="text-center my-3">
                                <button onClick={() => setDisplayNewsLength(news.length)} className="btn bg-green-600 text-white font-bold">Expand</button>
                            </div >
                    }
                </div>

                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;