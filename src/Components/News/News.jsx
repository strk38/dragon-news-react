import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa6";
import TopPicks from "../TopPicks/TopPicks";


const News = () => {
    const newsData = useLoaderData();
    const { id } = useParams(); //to fetch URL-data id wise from route
    //const idInt = parseInt(id); //here id is string not integer
    const news = newsData.find(n => n._id === id);
    //console.log('news', news);
    //console.log('newsData', newsData);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


                <div className="md:col-span-3">
                    <h2 className="text-xl font-bold">Dragon News</h2>


                    <div className="border border-gray-200 my-6">
                        <div className="px-6 pt-4">
                            <img src={news.image_url} alt="news_title" className="rounded" />
                            <h2 className="font-bold mt-2 text-xl">{news.title}</h2>
                        </div>

                        <div className="items-center text-start px-6 pt-2 pb-3">
                            <p className="text-lg font-normal">{news.details}</p>
                        </div>
                        <div className=" bg-red-600 w-fit px-4 ml-6 mb-4 py-1">
                            <Link to={'/'}><h2 className="text-white font-bold flex items-center"><FaArrowLeft /> &nbsp;&nbsp;All news in this category</h2></Link>
                        </div>
                    </div>


                    <div >
                        <h2 className="text-base font-bold text-blue-600 mb-2">Editors Insight</h2>
                        <TopPicks
                            key={newsData._id}
                            newsData={newsData}
                            orientation="grid grid-cols-3 gap-4"

                        ></TopPicks>

                    </div>
                </div>

                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default News;