import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../../../assats/logo/navberlogo.png";
import { FaBars, FaUser, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="">
      <div className="navbar d-flex justify-between bg-base-200">
        <Link to="/" className="  normal-case text-xl">
          <img
            className="header-logo"
            height={50}
            width={140}
            src={logo}
            alt=""
          />
        </Link>
        <div className="navbar-end">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars style={{ height: "25px", width: "25px" }}></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-5"
            >
              <li>
                <Link className=" text-center justify-center rounded-full">
                  <FaUser className="user"></FaUser>
                </Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/sourcedetails">Source Details</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/sourcedetails">Source Details</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link className=" rounded-full">
                <FaUser className="user"></FaUser>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
