import { useState } from "react";

const TopPicks = ({ newsData, orientation }) => {
    const [displayNewsLength, setDisplayNewsLength] = useState(5);

    return (
        <div className={orientation}>
            {
                newsData.slice(0, displayNewsLength).map(n => n.others_info?.is_trending === true ?
                    <>
                        <div className="card bg-base-100 shadow-xl h-fit mb-2">
                            <img src={n.image_url} alt="Shoes" />
                            <div className="my-3 mx-2">
                                <h2 className="font-bold text-sm">
                                    {n.title}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                            </div>
                        </div>
                    </> : ''
                )

            }
        </div>
    );
};

export default TopPicks;