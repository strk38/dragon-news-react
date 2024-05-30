import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import img_1 from '../../../assets/qZone1.png';
import img_2 from '../../../assets/qZone2.png';
import img_3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg1.png';

const RightSideNav = () => {
    return (
        <div>
            <div>
                <h2 className="font-bold my-4">Login With</h2>
                <button className="btn w-full bg-transparent border-blue-300 mb-2">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn w-full bg-transparent border-slate-300 mb-2">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>

            <div>
                <h2 className="font-bold my-4">Find Us On</h2>
                <div className="">
                    <div className="btn w-full bg-transparent rounded-t-lg rounded-b-none border-slate-100 ">
                        <FaFacebook />
                        Facebook
                    </div>
                    <div className="btn w-full bg-transparent rounded-none border-x">
                        <FaTwitter />
                        Twitter
                    </div>
                    <div className="btn w-full bg-transparent rounded-b-lg rounded-t-none border-slate-100">
                        <FaInstagram />
                        Instagram
                    </div>
                </div>
            </div>

            <div className="bg-slate-100 my-4">
                <h2 className="font-bold pt-3 ml-2">Q-Zone</h2>
                <div className="px-2 py-3">
                    <img className='' src={img_1}></img>
                    <img className='' src={img_2}></img>
                    <img className='' src={img_3}></img>
                </div>
            </div>
            <div className="flex flex-col items-center py-8 px-4 my-4" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${bg})` }}>
                <h2 className="text-3xl font-semibold text-center text-white mb-4">Create an <br />Amazing  <br />Newspaper</h2>
                <p className="text-center text-white mb-4">Discover thousands of <br />options,
                    easy to <br />customize layouts, one-<br />click to import demo<br /> and much more.
                </p>
                <div className="w-1/2">
                    <h2 className="bg-red-500 text-white font-semibold text-center py-2">Learn More</h2>
                </div>
            </div>
        </div>

    );
};

export default RightSideNav;