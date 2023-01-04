import React from "react";
import FastBanner from "./HomeComponent/FastBanner/FastBanner";
import FifthBanner from "./HomeComponent/FifthBanner/FifthBanner";
import Fourthbanner from "./HomeComponent/FourthBanner/Fourthbanner";
import SocendBaanner from "./HomeComponent/SocendBaanner/SocendBaanner";
import ThirdBanner from "./HomeComponent/ThirdBanner/ThirdBanner";

const Home = () => {
  return (
    <div>
      <FastBanner></FastBanner>

      <ThirdBanner></ThirdBanner>
      <SocendBaanner></SocendBaanner>
      <Fourthbanner></Fourthbanner>
      <FifthBanner></FifthBanner>
    </div>
  );
};

export default Home;
