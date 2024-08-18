import React from "react";

const Hero = () => {
  return (
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
  );
};

export default Hero;
