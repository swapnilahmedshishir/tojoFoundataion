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
          <button className="btn btn-wide py-3 px-14 ml-3 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-3xl font-extrabold opacity-100">
            Donation Now
          </button>
        </div>
        {/* </div> */}
      </div>
      <section className="bg-[#ECF6FC] lg:relative min-h-[152rem] lg:min-h-[62rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  justify-items-center lg:absolute -top-10 w-full mx-auto px-5 lg:px-16 xl:px-28  lg:gap-3 pt-5 lg:pt-0">
          <HeroCard
            services={{
              img: "education 1.png",
              title: "Education",
              description:
                "Education is recognized as a fundamental right in Bangladesh. The country has made significant progress in delivering education to its people. Acknowledging the crucial role of education,",
            }}
          />
          <HeroCard
            services={{
              img: "boy-and-girl 1.png",
              title: "Youth",
              description:
                "Education is recognized as a fundamental right in Bangladesh. The country has made significant progress in delivering education to its people. Acknowledging the crucial role of educationAcknowledging the crucial role of education,",
            }}
          />
          <HeroCard
            services={{
              img: "gender 1.png",
              title: "Gender",
              description:
                "Education is recognized as a fundamental right in Bangladesh. The country has made significant progress in delivering education to its people. Acknowledging the crucial role of education,",
            }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:absolute top-[30rem] w-full mx-auto px-5 lg:px-16 xl:px-72  lg:gap-3  gap-5  pt-5 lg:pt-0">
          <HeroCard
            services={{
              img: "Entrepreneurship.png",
              title: "Entrepreneurship",
              description:
                "Education is recognized as a fundamental right in Bangladesh. The country has made significant progress in delivering education to its people. Acknowledging the crucial role of education,",
            }}
          />
          <HeroCard
            services={{
              img: "conflict-management 1.png",
              title: "Conflicts & Disasters",
              description:
                "Education is recognized as a fundamental right in Bangladesh. The country has made significant progress in delivering education to its people. Acknowledging the crucial role of education,",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
