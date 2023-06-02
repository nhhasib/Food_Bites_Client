
import { Link } from 'react-router-dom';
import imgbg from '../../../assets/others/authentication.png'
import imglogin from '../../../assets/others/authentication2.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import Swal from 'sweetalert2';

const Registry = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email,name,photo,password)

        createUser(email,password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: 'User created successfully',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'okay'
                  })
            })
        .catch(error=>console.log(error.message))
    }

  return (
  
      <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("${imgbg}")` }}>
        <div className="hero-content flex-col lg:flex-row drop-shadow-xl p-8" style={{ backgroundImage: `url("${imgbg}")` }}>
          <div className="text-center lg:text-left">
           <img src={imglogin} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleRegister} className="card-body">
                  <h1 className='font-bold text-2xl text-center'>Register Here</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                              type="email"
                              name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                              type="text"
                              name='name'
                  placeholder="email"
                  className="input input-bordered"
                />
                      </div>

                      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                              type="url"
                              name='photo'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                              type="text"
                              name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
              <p>
              Already have account? Please <Link to="/login">
                <span className="underline text-red-800">login</span>
              </Link>
            </p>
              </div>
        </div>
      </div>
   
  );
};

export default Registry;
