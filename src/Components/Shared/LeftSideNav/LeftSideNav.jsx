import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TopPicks from "../../TopPicks/TopPicks";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [topPicks, setTopPicks] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setTopPicks(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-xl">All Category</h2>
            {
                categories.map(category => <NavLink
                    className="block ml-4 text-xl font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}>
                    {category.name}
                </NavLink>)
            }
            <div className="border border-gray-200 px-2 py-2">
                <TopPicks
                    key={topPicks._id}
                    newsData={topPicks}
                    orientation=""
                ></TopPicks>

            </div>
        </div>

    );
};

export default LeftSideNav;