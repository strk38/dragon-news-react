import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(form, form.get('email'));

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(e => {
                console.error(e);

            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-slate-100 flex flex-col items-center space-y-6 my-8 py-10">
                <h2 className="text-3xl">Login your account</h2>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <h2 className="font-semibold text-sm text-center text-slate-700">Dont’t Have An Account ? <NavLink to='/register' className="text-orange-600">Register</NavLink></h2>
                        <div className="form-control mt-6">
                            <button className="btn btn-active">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;