
import imgbg from '../../../assets/others/authentication.png'
import imglogin from '../../../assets/others/authentication2.png'

const Registry = () => {

  return (
  
      <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("${imgbg}")` }}>
        <div className="hero-content flex-col lg:flex-row drop-shadow-xl p-8" style={{ backgroundImage: `url("${imgbg}")` }}>
          <div className="text-center lg:text-left">
           <img src={imglogin} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                  <h1 className='font-bold text-2xl text-center'>Register Here</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Registry;
