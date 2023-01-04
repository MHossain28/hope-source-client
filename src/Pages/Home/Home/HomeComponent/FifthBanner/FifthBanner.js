import React from "react";
import { FaEdit, FaLock, FaRegEnvelope, FaTag } from "react-icons/fa";
import "./FifthBanner.css";

const FifthBanner = () => {
  return (
    <div className="mx-6">
      <div className="my-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-center ">
          Why Donately?
        </h1>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 my-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaEdit className="icon"></FaEdit>
              <h2 className="card-title">Simple to Use and Customize</h2>
              <p>
                We pride ourselves on making things easy to use - no code, no
                developers, and no training required.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaTag className="icon"></FaTag>
              <h2 className="card-title">Affordable, Scalable Pricing</h2>
              <p>
                Our pricing model scales with your donation volume and ensures
                no hidden fees or surprises.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaLock className="icon"></FaLock>
              <h2 className="card-title">Safe and Secure</h2>
              <p>
                PCI and data privacy compliance with encryption and protection
                against cyber attacks
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaRegEnvelope className="icon"></FaRegEnvelope>
              <h2 className="card-title">Great Customer Support</h2>
              <p>
                Our in-house support, developers, and strategists will make sure
                you don't have to campaign alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthBanner;
