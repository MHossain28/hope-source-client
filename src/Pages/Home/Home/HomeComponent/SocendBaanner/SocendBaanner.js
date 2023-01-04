import React from "react";
import "./SocendBaanner.css";
import logo1 from "../../../../../assats/bannerImg/logo-1.png";
import logo2 from "../../../../../assats/bannerImg/logo-2.png";
import logo3 from "../../../../../assats/bannerImg/logo-3.png";

const SocendBaanner = () => {
  return (
    <div className="socend-container my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 py-16 px-4">
        <div className="logo-text">
          <img className="logo" style={{}} src={logo1} alt="" />
          <div className="">
            <p className="text-xl font-semibold socend-banner-text">
              Since 1980, we’ve granted more than 520,000 wishes all over the
              world.
            </p>
          </div>
        </div>
        <div className="logo-text">
          <img
            className="logo"
            style={{ backgroundColor: "grey" }}
            src={logo2}
            alt=""
          />
          <div className="">
            <p className="text-xl font-semibold socend-banner-text">
              This holiday season, give joy to a child living with with a
              critical illness – and restore hope for tomorrow.
            </p>
          </div>
        </div>
        <div className="logo-text">
          <img className="logo" style={{}} src={logo3} alt="" />
          <div className="">
            <p className="text-xl font-semibold socend-banner-text ">
              97% of wish parents report an improvement of the wish child’s
              emotional health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocendBaanner;
