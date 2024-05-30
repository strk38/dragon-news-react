import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(form, name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-slate-100 flex flex-col items-center space-y-6 py-6 h-min">
                <h2 className="text-3xl">Register your account</h2>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>


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
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-active">Register</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;