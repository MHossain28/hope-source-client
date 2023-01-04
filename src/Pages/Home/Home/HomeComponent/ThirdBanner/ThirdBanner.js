import React from "react";
import img1 from "../../../../../assats/bannerImg/third-1.png";

const ThirdBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h5 className="text-xl font-semibold">BUILD</h5>
            <h1 className="text-5xl font-bold py-4">
              Create the Perfect Donation Experience
            </h1>
            <p className="py-6 text-xl">
              Our <strong>donations forms </strong> and
              <strong> fundraising pages</strong> provide a powerful tool to
              collect online donations. Use our form builder to create
              multi-step forms, offer payment options such as Apple Pay or
              Paypal, and customize everything from eCards to confirmation
              screens. Plus, embedding on tools like Wordpress, Squarespace, and
              Webflow couldn’t be easier.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg ">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
