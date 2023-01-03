import React, { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";

const FastBanner = () => {
  // cheack user
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://awesomethemez.com/work/html5/hisham/img/hero-bg-1.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold ">
              HUMANITY . <i className="opacity-90">INTEGRITY</i> . HONESTY
            </h1>
            <hr className="w-72 mx-auto lg:my-8" />

            <h4 className="text-2xl ">{user?.email}</h4>
            <h4 className="text-2xl font-bold">
              AWESOME THEMEZ PRESENT NON-PROFIT SITE
            </h4>
            <p className="mb-5 my-3 font-semibold">
              Donation and help us for homeless people.We are a organization
              that helps for children people.
            </p>
            <button className="btn-on btn-light mt-8">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastBanner;
