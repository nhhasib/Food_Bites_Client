import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import { FaCartPlus, FaShoppingCart} from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart)

    const handleLogout = () => {
        logoutUser()
            .then()
            .catch()
    }
  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-50 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link to='/'>Home</Link>
              </li>

              <li>
                <Link to='/menu'>Our Menu</Link>
                          </li>
                          <li>
              <Link to='/order'>Order Food</Link>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/'>Home</Link>
            </li>
                     
            <li>
              <Link to='/menu'>Our Menu</Link>
            </li>
            <li>
              <Link to='/order/salad'>Order Food</Link>
                      </li>
                      
            <li className="mx-6">
            <Link to='dashboard/cart'><button className="btn">
  <p className="text-2xl"><FaShoppingCart></FaShoppingCart></p>
                <div className="badge badge-secondary">+{ cart?.length ||0}</div>
</button></Link>
            </li>
          </ul>
              </div>
              {
          user ? <div><button onClick={handleLogout}>Logout</button> <h1>{ user.displayName}</h1></div>:<li>
                          <Link to='/login'>Login</Link>
                        </li>
            }
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
