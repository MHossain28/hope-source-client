import React from "react";
import "./About.css";
import { FaRegEnvelope, FaDollarSign } from "react-icons/fa";
import imgbanner from "../../assats/bannerImg/about.jpeg";

const About = () => {
  return (
    <div>
      <div className="text-center my-12">
        <div className="my-6">
          <h1 className="lg:text-5xl text-3xl font-bold my-3">
            About Donately
          </h1>
          <p className="text-xl my-1 font-semibold">
            WE’VE LEARNED THE HARD WAY HOW TO FUNDRAISE THE EASY WAY.
          </p>
          <div className="text-semibold my-8 lg:w-3/4 mx-auto about-p">
            <p>
              We started Donately in 2013, in partnership with creative agency
              <strong> Fifty & Fifty</strong>, after working with numerous
              nonprofits. Our experience showed us an alarming gap in the online
              donation software market, so we set out to create the simplest
              solution around.
            </p>
            <p>
              More than 1,200 nonprofits, organizations, and individuals trust
              Donately to manage their online donations. Built with simplicity
              in mind, <strong>our features</strong> give you more time to raise
              money online and our software grows with you, so the possibilities
              are endless.
            </p>
            <p>
              Ultimately, we believe time should be spend solving social
              challenges, not wasted using clunky and expensive online donation
              software.
            </p>
          </div>
        </div>
        <figure>
          <img className="mx-auto" src={imgbanner} alt="" />
        </figure>

        <div className="mx-auto lg:w-1/2 w-3/4 my-32">
          <div className="about-p">
            <h1 className="lg:text-4xl text-3xl my-5">
              We put our money where our mouth is
            </h1>
            <p>
              We’re proud of the success we’ve shared with our partners so far,
              but, believe us, we’re just getting started. Here’s what we’ve
              accomplished with our partners so far:
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <FaDollarSign></FaDollarSign>
                <h2 className="card-title">
                  Processing over $2 million in donations per month
                </h2>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <FaRegEnvelope></FaRegEnvelope>
                <h2 className="card-title">
                  1,200 accounts actively raising money
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
