import { Link, useLocation, useNavigate } from "react-router-dom";
import imgbg from "../../../assets/others/authentication.png";
import imglogin from "../../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import {  FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from =location.state?.from?.pathname||"/"
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: 'User login successfully',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'okay'
                })
                navigate(from, { replace: true })
            })
        .catch(error=>console.log(error.message))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: 'User login successfully',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'okay'
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))
        
    }

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url("${imgbg}")` }}
    >
      <div
        className="hero-content flex-col lg:flex-row drop-shadow-xl p-8"
        style={{ backgroundImage: `url("${imgbg}")` }}
      >
        <div className="text-center lg:text-left">
          <img src={imglogin} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="font-bold text-2xl text-center">Login Here</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                              type="email"
                              name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                              type="password"
                              name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex flex-col mx-auto text-center items-center mb-4">
            <div className="gap-4 flex m-2">
              <button onClick={handleGoogleLogin} className="border-2 border-black rounded-full p-2">
                <p className="text-2xl">
                  <FaGoogle></FaGoogle>
                </p>
              </button>
              <button className="border-2 border-black rounded-full p-2">
                <p className="text-2xl">
                  <FaGithub></FaGithub>
                </p>
              </button>
            </div>
            <p>
              New to Here? Please{" "}
              <Link to="/register">
                <span className="underline text-red-800">register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
