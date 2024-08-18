import React from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg_hero flex justify-center items-center">
        {/* <div className="  "> */}
        <div className="text-White font-montserrat text-center">
          <h2 className="font-bold mb-10 text-xl">Educate to Elevate</h2>
          <p className="font-bold mb-10 text-xl w-3/4 mx-auto">
            Help children rise above and beyond with your support.
          </p>
          <button className="py-3 px-14 ml-3 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-3xl font-extrabold opacity-100">
            Donation Now
          </button>
        </div>
        {/* </div> */}
      </div>
      <section className="bg-gray-200 lg:relative min-h-[52rem] lg:min-h-[50rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 justify-items-center lg:absolute -top-10 w-full mx-auto px-5 lg:px-52 pt-5 lg:pt-0">
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:absolute top-96 w-full mx-auto px-5 lg:px-96 gap-5 lg:gap-0 pt-5 lg:pt-0 ">
          <HeroCard />
          <HeroCard />
        </div>
      </section>
    </>
  );
};

export default Hero;
