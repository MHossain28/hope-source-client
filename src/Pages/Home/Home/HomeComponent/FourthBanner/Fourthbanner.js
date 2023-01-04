import React from "react";
import img1 from "../../../../../assats/bannerImg/forth.png";

const Fourthbanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-lg ">
            <img src={img1} alt="" />
          </div>
          <div className="text-center lg:text-left">
            <h5 className="text-xl font-semibold">SHARE</h5>
            <h1 className="text-5xl font-bold py-4">
              Build Powerful Giving Campaign Pages
            </h1>
            <p className="py-6 text-xl">
              Donately’s <strong>peer-to-peer fundraising pages</strong> are 8
              times more likely to convert traffic to a donation than industry
              benchmarks. Combine those statistics with easy-to-create campaigns
              with recurring donations, and you should see an uptick in revenue
              in no time at all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthbanner;
