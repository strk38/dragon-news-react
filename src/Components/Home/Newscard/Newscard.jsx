import { Link } from "react-router-dom";
import { FaRegEye, FaRegBookmark, FaShare } from "react-icons/fa";

const Newscard = ({ news }) => {
    const { _id, title, author, thumbnail_url, image_url, details, rating, total_view } = news;
    return (

        <div className="rounded border border-gray-200 bg-base-100 mt-4">
            <div className="flex items-center justify-between bg-gray-100">
                <div className="flex  mt-3 mb-2">
                    <div className="avatar mx-3">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={author.img} />
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-base font-bold">{author.name}</h2>
                        <h2 className="text-sm">{author.published_date?.substring(0, 10)}</h2>
                    </div>
                </div>

                <div className="flex mx-2">
                    <div><FaRegBookmark /></div>&nbsp;&nbsp;
                    <div><FaShare /></div>
                </div>

            </div>

            <div>
                <figure className="px-4 pt-4">
                    <h2 className="font-bold mb-2">{title}</h2>
                    <img src={image_url} alt="news_title" className="rounded" />
                </figure>
                <div className="card-body items-center text-start">
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-red-400 font-semibold"> ...Read more ...</Link></p> :
                            <p>{details}</p>
                    }
                </div>
            </div>

            <div className="flex justify-between mb-3 mx-3">
                <div className="flex items-center">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div>&nbsp;&nbsp;{rating.number}</div>
                </div>
                <div className="flex items-center"><FaRegEye /> &nbsp;{total_view}</div>
            </div>
        </div>

    );
};

export default Newscard;