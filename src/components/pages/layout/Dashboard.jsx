import React from "react";
import { FaBars, FaCalendarAlt, FaCalendarCheck, FaCommentDots, FaHome, FaShoppingBasket, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-[#D1A054] text-black">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <h1 className="text-4xl font-bold text-center italic">Food Bites</h1>
          <ul className="menu p-4 w-80 h-full ">
            {/* Sidebar content here */}
            <li>
              <NavLink to="home">
                <FaHome></FaHome>Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="reservation">
                <FaCalendarAlt></FaCalendarAlt>Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="wallet">
                <FaWallet></FaWallet>Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="cart">
                <FaShoppingCart></FaShoppingCart>My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="review">
                <FaCommentDots></FaCommentDots>My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="booking">
                <FaCalendarCheck></FaCalendarCheck>My Booking
              </NavLink>
            </li>
                      <div className="divider"></div>
                      
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourmenu">
                <FaBars></FaBars>Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaShoppingBasket></FaShoppingBasket>Order
                          </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
