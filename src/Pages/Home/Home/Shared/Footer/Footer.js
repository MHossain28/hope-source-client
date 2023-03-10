import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../assats/logo/navberlogo.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-vector/abstract-blue-dots-particles-wave-line-white-background-vector-illustration_78474-1060.jpg)`,
      }}
    >
      <footer className="footer p-10 bg-opacity-10 bg-slate-400 text-base-content">
        <div>
          <img height={70} width={180} src={logo} alt="" />
          <p>
            mahmudhossain919@gmail.com
            <br />
            Sutrapur, Dhaka -1100, Bangladesh
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
